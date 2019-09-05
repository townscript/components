import { Injectable } from '@angular/core';
import { config } from '../../core/app-config';

declare var window;
@Injectable()

export class ApiService {
    FB_APP_ID = '303059286557418';
    hostName = config.baseUrl;
    betaHostName = config.betaHostName || 'beta.tsdugout.in/';
    S3_BUCKET_NAME = 'townscript-testing';
    GA_TRACKER_CODE = 'UA-68181318-1';
    SERVER_URL = 'https://www.tsdugout.in';
    API_SERVER = 'https://www.tsdugout.in/api/';
    algoliaIndexName = 'tsTesting';
    IPINFO_ACCESS_TOKEN = 'a27cfbcc77e854';	// change afterwards
    RECORD_FOR_KINESIS = true; // temporary
    PAYMENT_PAGE_URL = 'https://www.tsdugout.in/payment/';
}