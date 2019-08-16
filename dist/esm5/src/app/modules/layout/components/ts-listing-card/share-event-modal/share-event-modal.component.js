import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { config } from '../../../../../core/app-config';
var ShareEventModalComponent = /** @class */ (function () {
    function ShareEventModalComponent(dialogRef, data) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.shareLink = {};
        this.close = function () {
            _this.dialogRef.close();
        };
    }
    ShareEventModalComponent.prototype.ngAfterViewInit = function () {
    };
    ShareEventModalComponent.prototype.ngOnInit = function () {
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
    };
    ShareEventModalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-share-event-modal',
            template: "<div class=\"share-event-modal-container\">\n    <div class=\"flex items-center text-lg text-gray-800 justify-between\">\n        <h2>Share Event</h2>\n        <div class=\"rounded-full\" matRipple (click)=\"close()\">\n            <i class=\"mdi mdi-close text-2xl cursor-pointer rounded-full\"></i>\n        </div>\n    </div>\n    <div class=\"px-2 py-2\">\n        <div class=\"platforms flex items-center justify-between\">\n            <a [href]=\"shareLink?.whatsapp\" target=\"_blank\">\n                <div class=\"platform text-center cursor-pointer p-2 flex-1\">\n                    <i class=\"mdi mdi-whatsapp block text-4xl whatsapp\"></i>\n                    <span class=\"text-gray-700 text-sm\">Whatsapp</span>\n                </div>\n            </a>\n            <a [href]=\"shareLink?.fb\" target=\"_blank\">\n                <div class=\"platform text-center cursor-pointer p-2 flex-1\">\n                    <i class=\"mdi mdi-facebook block text-4xl facebook\"></i>\n                    <span class=\"text-gray-700 text-sm\">Facebook</span>\n                </div>\n            </a>\n            <a [href]=\"shareLink?.twitter\" target=\"_blank\">\n                <div class=\"platform text-center cursor-pointer p-2 flex-1\">\n                    <i class=\"mdi mdi-twitter block text-4xl twitter\"></i>\n                    <span class=\"text-gray-700 text-sm\">Twitter</span>\n                </div>\n            </a>\n            <a [href]=\"shareLink?.linkedin\" target=\"_blank\">\n                <div class=\"platform text-center cursor-pointer p-2 flex-1\">\n                    <i class=\"mdi mdi-linkedin block text-4xl linkedin\"></i>\n                    <span class=\"text-gray-700 text-sm\">LinkedIn</span>\n                </div>\n            </a>\n        </div>\n    </div>\n</div>",
            styles: [".share-event-modal-container .platform{-webkit-transition:.15s;transition:.15s}.share-event-modal-container .platform:hover{background:#fcfcfc;-webkit-transform:translateY(-5px);transform:translateY(-5px)}.share-event-modal-container .whatsapp{color:#64bf56}.share-event-modal-container .facebook{color:#4267b2}.share-event-modal-container .twitter{color:#3aa1f2}.share-event-modal-container .linkedin{color:#2977b5}"]
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object])
    ], ShareEventModalComponent);
    return ShareEventModalComponent;
}());
export { ShareEventModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtZXZlbnQtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvY29tcG9uZW50cy90cy1saXN0aW5nLWNhcmQvc2hhcmUtZXZlbnQtbW9kYWwvc2hhcmUtZXZlbnQtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQU94RDtJQU1JLGtDQUFtQixTQUFpRCxFQUNoQyxJQUFTO1FBRDdDLGlCQUdDO1FBSGtCLGNBQVMsR0FBVCxTQUFTLENBQXdDO1FBQ2hDLFNBQUksR0FBSixJQUFJLENBQUs7UUFGN0MsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUtwQixVQUFLLEdBQUc7WUFDSixLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQTtJQUhELENBQUM7SUFJRCxrREFBZSxHQUFmO0lBQ0EsQ0FBQztJQUNELDJDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsK0JBQStCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDdkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxrREFBa0Q7WUFDbEUsVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztZQUN6RCxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLHNEQUFzRDtZQUMxRixZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVM7WUFDN0IsY0FBYyxHQUFHLG1CQUFtQixDQUFDO1FBRXpDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLDJCQUEyQjtZQUNoRCxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO1lBQ3RELFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLDZCQUE2QixDQUFDO1FBRTlELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLGlEQUFpRDtZQUN2RSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO1lBQ3RELFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRS9CLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLGdDQUFnQztZQUN0RCxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7SUFDL0QsQ0FBQztJQW5DUSx3QkFBd0I7UUFMcEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyw4eURBQWlEOztTQUVwRCxDQUFDO1FBUU8sbUJBQUEsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFBO2lEQURFLFlBQVk7T0FOakMsd0JBQXdCLENBcUNwQztJQUFELCtCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FyQ1ksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC1jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1zaGFyZS1ldmVudC1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NoYXJlLWV2ZW50LW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zaGFyZS1ldmVudC1tb2RhbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlRXZlbnRNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBldmVudDogYW55O1xuICAgIGV2ZW50VVJMOiBhbnk7XG4gICAgZXZlbnROYW1lOiBhbnk7XG4gICAgc2hhcmVMaW5rOiBhbnkgPSB7fTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8U2hhcmVFdmVudE1vZGFsQ29tcG9uZW50PixcbiAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHtcblxuICAgIH1cbiAgICBjbG9zZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICB9XG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5ldmVudCA9IHRoaXMuZGF0YS5ldmVudDtcbiAgICAgICAgdGhpcy5ldmVudFVSTCA9IFwiaHR0cHM6Ly93d3cudG93bnNjcmlwdC5jb20vZS9cIiArIHRoaXMuZXZlbnQuc2hvcnROYW1lO1xuICAgICAgICB0aGlzLmV2ZW50TmFtZSA9IHRoaXMuZXZlbnQubmFtZTtcbiAgICAgICAgdGhpcy5zaGFyZUxpbmsuZmIgPSBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD9zPTEwMFwiICtcbiAgICAgICAgICAgIFwiJnBbdXJsXT1cIiArIGNvbmZpZy5iYXNlVXJsICsgXCJlL1wiICsgdGhpcy5ldmVudC5zaG9ydE5hbWUgK1xuICAgICAgICAgICAgXCImcFtpbWFnZXNdWzBdPVwiICsgY29uZmlnLmJhc2VVcmwgKyBcImRhc2hib2FyZC9pbWFnZXMvb3JnYW5pemVyX2xvZ2luX2ZpbGVzL2xvZ29mb3JmYi5wbmdcIiArXG4gICAgICAgICAgICBcIiZwW3RpdGxlXT1cIiArIHRoaXMuZXZlbnROYW1lICtcbiAgICAgICAgICAgIFwiJnBbc3VtbWFyeV09XCIgKyBcImJ5IHRvd25zY3JpcHQuY29tXCI7XG5cbiAgICAgICAgdGhpcy5zaGFyZUxpbmsudHdpdHRlciA9IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9zaGFyZVwiICtcbiAgICAgICAgICAgIFwiP3VybD1cIiArIGNvbmZpZy5iYXNlVXJsICsgXCJlL1wiICsgdGhpcy5ldmVudC5zaG9ydE5hbWUgK1xuICAgICAgICAgICAgXCImdGV4dD1cIiArIHRoaXMuZXZlbnROYW1lICsgXCIgaXMgbm93IGxpdmUgb24gVG93bnNjcmlwdCFcIjtcblxuICAgICAgICB0aGlzLnNoYXJlTGluay5saW5rZWRpbiA9IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWVcIiArXG4gICAgICAgICAgICBcIiZ1cmw9XCIgKyBjb25maWcuYmFzZVVybCArIFwiZS9cIiArIHRoaXMuZXZlbnQuc2hvcnROYW1lICtcbiAgICAgICAgICAgIFwiJnRpdGxlPVwiICsgdGhpcy5ldmVudE5hbWU7XG5cbiAgICAgICAgdGhpcy5zaGFyZUxpbmsud2hhdHNhcHAgPSBcImh0dHBzOi8vd2ViLndoYXRzYXBwLmNvbS9zZW5kP1wiICtcbiAgICAgICAgICAgIFwidGV4dD1cIiArIGNvbmZpZy5iYXNlVXJsICsgXCJlL1wiICsgdGhpcy5ldmVudC5zaG9ydE5hbWU7XG4gICAgfVxuXG59XG4iXX0=