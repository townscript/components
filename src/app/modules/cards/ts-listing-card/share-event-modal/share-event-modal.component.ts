import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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

    constructor(public dialogRef: MatDialogRef<ShareEventModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private utilityService: UtilityService) {
          this.utilityService.addFBSDK();
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
            FB.ui(
                {
                    method: 'feed',
                    name: this.event.name,
                    link: `${this.baseUrl}/e/${this.event.shortName}`,
                    picture: this.event.absoluteMobileImageUrl
                });
        });
    }

    ngOnInit() {
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
    }

}
