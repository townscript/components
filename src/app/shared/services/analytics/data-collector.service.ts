import { Injectable } from '@angular/core';
import { DataProducer, Configuration } from '@townscript/data-collector';
import { UserService } from '../user-service';


@Injectable()
export class DataCollectorService {
  constructor(private userService: UserService) { }
  user:any;

  initKinesisDataCollector = (awsAccessKeyId:string, awsSecretAccessKey:string, awsRegion:string, awsKinesisStreamName:string, recordForKinesis:boolean ) => {
    try {
      const dataPipelineConfig: Configuration = {
        accessKeyId: awsAccessKeyId,
        secretAccessKey: awsSecretAccessKey,
        region: awsRegion,
        uniqueIdentifier: 'STREAM-1',
        streamName: awsKinesisStreamName
      };
      DataProducer.initialize(dataPipelineConfig, !recordForKinesis);
      console.log('initialised kinesis now');
    } catch (e) {
      console.log('we are getting exceptions in initializing kinesis ' + e);
    }
  }

  sendPageViewDataToKinesis = () => {
    try {
      let loggedInUserId = null;
      this.userService.user.subscribe(data => {
        this.user = data;
        if (this.user && this.user.userId) {
            loggedInUserId = this.user.userId;
        }
        DataProducer.callPageView(loggedInUserId);
      });
    } catch (e) {
      console.log('there was exception in sending data from booking flow' + e);
    }
  }

  sendClickDataToKinesis = (eventLabel: string, clickedLocation: string) => {
    try {
      let loggedInUserId = null;
      this.userService.user.subscribe(data => {
        this.user = data;
        if (this.user && this.user.userId) {
            loggedInUserId = this.user.userId;
        }
        DataProducer.callClickEvent(eventLabel, clickedLocation, loggedInUserId);
      });
    } catch (e) {
      console.log('exception while sending the click stream data from marketplace' + e);
    }
  }  
}

export function initializeDataCollector(awsAccessKeyId:string, awsSecretAccessKey:string, awsRegion:string, awsKinesisStreamName:string, recordForKinesis:boolean ,dataCollectorService: DataCollectorService) {
  return () => dataCollectorService.initKinesisDataCollector(awsAccessKeyId, awsSecretAccessKey, awsRegion, awsKinesisStreamName, recordForKinesis);
}