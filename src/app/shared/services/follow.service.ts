import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../services/user-service';
import { config } from '../../core/app-config';

@Injectable()
export class FollowService {

    baseUrl: String = config.baseUrl;
    apiServerUrl: String = this.baseUrl + 'api/';
    listingsUrl: String = this.baseUrl + 'listings/';

    user: any;
    private followData$: BehaviorSubject<Object> = new BehaviorSubject<Object>(null);
    followData = this.followData$.asObservable();

    constructor(private http: HttpClient, private userService: UserService) {
        this.userService.user.subscribe(data => {
            this.user = data;
            if (this.user && this.user.userId) {
                this.getFollowData(this.user.userId);
            }
        });
    }
    createFollowData = (type, typeId, userId) => {
        const data = {
            type: type,
            typeId: typeId,
            userId: userId
        };
        return this.http.post(this.listingsUrl + 'followData/follow', data);
    }
    getFollowData = (id) => {
        this.http.get(this.listingsUrl + 'followData/?userId=' + id).subscribe(res => {
            this.updateFollowData(res['data']);
        });
    }
    unfollow = (followDataId) => {
        return this.http.post(this.listingsUrl + 'followData/unfollow/' + followDataId, {});
    }
    updateFollowData = (data): void => {        
        this.followData$.next(data);
    }

}
