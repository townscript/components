import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { config } from '../../../../core/app-config';
import { UtilityService } from './../../../../shared/services/utilities.service';

declare const FB: any;

@Component({
    selector: 'app-share-event-modal',
    templateUrl: './share-event-modal.component.html',
    styleUrls: ['./share-event-modal.component.scss']
})
export class ShareEventModalComponent implements OnInit {

    event: any;
    eventURL: string;
    eventName: string;
    shareLink: any = {};
    baseUrl: string = config.baseUrl;
    copied = false;
    imageLink: string;

    constructor(public dialogRef: MatDialogRef<ShareEventModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private utilityService: UtilityService) {

    }

    close = () => {
        this.dialogRef.close();
    }

    copyLink = () => {
        const copyText: any = document.getElementById('event_link');
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand('copy');
        this.copied = true;
        setTimeout(() => {
            this.copied = false;
        }, 1000000);
    }

    shareOnFB = (): void => {
        setTimeout(() => {
            window.scrollTo(0, 0);
            this.close();
            FB.ui(
                {
                    method: 'feed',
                    name: this.event.name,
                    link: `${this.baseUrl}/e/${this.event.shortName}`,
                    picture: this.imageLink,
                    hashtag: '#Townscript'
                });
        });
    }

    ngOnInit() {
        setTimeout(() => this.utilityService.addFBSDK(),500);

        this.event = this.data.event;
        this.eventURL = 'https://www.townscript.com/e/' + this.event.shortName;
        this.eventName = this.event.name;

        this.shareLink.twitter = 'https://twitter.com/share' +
            '?url=' + config.baseUrl + 'e/' + this.event.shortName +
            '&text=' + this.eventName + ' is now live on Townscript!';

        this.shareLink.linkedin = 'https://www.linkedin.com/shareArticle?mini=true' +
            '&url=' + config.baseUrl + 'e/' + this.event.shortName +
            '&title=' + this.eventName;

        this.shareLink.whatsapp = 'https://web.whatsapp.com/send?' +
            'text=' + config.baseUrl + 'e/' + this.event.shortName;

        if(this.event.absoluteMobileImageUrl.indexOf('https:') > -1 ||
            this.event.absoluteMobileImageUrl.indexOf('http:') > -1){
              this.imageLink = this.event.absoluteMobileImageUrl;
        } else {
              this.imageLink = 'https:' + this.event.absoluteMobileImageUrl;
        }
    }

}
