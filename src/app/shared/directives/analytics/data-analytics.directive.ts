import { Directive, Input, OnInit, HostListener, ElementRef } from '@angular/core';
import { DataCollectorService } from '../../services/analytics/data-collector.service';

@Directive({
  selector: '[appDataAnalytics]'
})
export class DataAnalyticsDirective implements OnInit {
  @Input() eventLabel: string;
  @Input() clickLocation: string;
  constructor(public readonly elementRef: ElementRef, private readonly dataCollectorService: DataCollectorService) {
  }
  ngOnInit(): void {
  }

  @HostListener('click', ['$event'])
  clickEvent(event: any) {
    
    try {
        event.stopPropagation();
        let currentNode = this.elementRef.nativeElement;
        let tempClickLocation = "";

        while (currentNode.nodeType == 1 || currentNode.parentNode != null) {
          if (currentNode.hasAttribute('clickLocation')) {
            (tempClickLocation === "") ? tempClickLocation += currentNode.attributes['clickLocation'].nodeValue : tempClickLocation += '-' + currentNode.attributes['clickLocation'].nodeValue;
          }
          currentNode = currentNode.parentNode;
        }
        this.clickLocation = tempClickLocation;
        console.log(this.eventLabel);
        console.log(this.clickLocation);
        if(this.eventLabel){
          this.dataCollectorService.sendClickDataToKinesis(this.eventLabel, this.clickLocation);
        }
    } catch (e) {
      console.log('exception occurred');
      console.log(e);
    }
  }
}