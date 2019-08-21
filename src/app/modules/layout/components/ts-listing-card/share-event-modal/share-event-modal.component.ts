import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { config } from '../../../../../core/app-config';

@Component({
    selector: 'app-share-event-modal',
    templateUrl: './share-event-modal.component.html',
    styleUrls: ['./share-event-modal.component.scss']
})
export class ShareEventModalComponent implements OnInit {

    event: any;
    eventURL: any;
    eventName: any;
    shareLink: any = {};
    constructor(public dialogRef: MatDialogRef<ShareEventModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {

    }
    close = () => {
        this.dialogRef.close();
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.event = this.data.event;
        this.eventURL = "https://www.townscript.com/e/" + this.event.shortName;
        this.eventName = this.event.name;
        this.shareLink.fb = "https://www.facebook.com/sharer/sharer.php?s=100" +
            "&p[url]=" + config.baseUrl + "e/" + this.event.shortName +
            "&p[images][0]=" + config.baseUrl + "dashboard/images/organizer_login_files/logoforfb.png" +
            "&p[title]=" + this.eventName +
            "&p[summary]=" + "by townscript.com";

        this.shareLink.twitter = "https://twitter.com/share" +
            "?url=" + config.baseUrl + "e/" + this.event.shortName +
            "&text=" + this.eventName + " is now live on Townscript!";

        this.shareLink.linkedin = "https://www.linkedin.com/shareArticle?mini=true" +
            "&url=" + config.baseUrl + "e/" + this.event.shortName +
            "&title=" + this.eventName;

        this.shareLink.whatsapp = "https://web.whatsapp.com/send?" +
            "text=" + config.baseUrl + "e/" + this.event.shortName;
    }

}
