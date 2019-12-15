import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../services/user-service';
import { config } from '../../core/app-config';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class FollowService {

    baseUrl: String = config.baseUrl;
    apiServerUrl: String = this.baseUrl + 'api/';
    listingsUrl: String = this.baseUrl + 'listings/';

    user: any;
    private followData$: BehaviorSubject<Object> = new BehaviorSubject<Object>({});
    followData = this.followData$.asObservable();

    constructor(private http: HttpClient, private userService: UserService,
        private router: Router) {
        this.userService.user.subscribe(data => {
            this.user = data;
            if (this.user && this.user.userId) {
                this.getFollowData(this.user.userId);
            }

            this.router.events.subscribe((ev) => {
                if (ev instanceof NavigationEnd) {
                    if (this.user && this.user.userId) {
                        this.getFollowData(this.user.userId);
                    }
                }
            });
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
        this.followData = new BehaviorSubject<Object>({});
        this.followData$.next(data);
    }

}
