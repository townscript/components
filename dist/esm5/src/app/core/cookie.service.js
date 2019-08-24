import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var CookieService = /** @class */ (function () {
    function CookieService() {
    }
    CookieService.prototype.getCookie = function (name) {
        var ca = document.cookie.split(';');
        var caLen = ca.length;
        var cookieName = name + "=";
        var c;
        for (var i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) === 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return null;
    };
    CookieService.prototype.deleteCookie = function (name) {
        this.setCookie(name, '', -1);
    };
    CookieService.prototype.setCookie = function (name, value, expireDays, path) {
        if (path === void 0) { path = ''; }
        var d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        var expires = 'expires=' + d.toUTCString();
        document.cookie = name + '=' + value + '; ' + expires + (path.length > 0 ? '; path=' + path : '');
    };
    CookieService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], CookieService);
    return CookieService;
}());
export { CookieService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdG93bnNjcmlwdC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9jb3JlL2Nvb2tpZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDO0lBRUU7SUFBZ0IsQ0FBQztJQUVWLGlDQUFTLEdBQWhCLFVBQWlCLElBQVk7UUFDM0IsSUFBTSxFQUFFLEdBQWtCLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELElBQU0sS0FBSyxHQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBTSxVQUFVLEdBQU0sSUFBSSxNQUFHLENBQUM7UUFDOUIsSUFBSSxDQUFTLENBQUM7UUFFZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQy9CLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqRDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sb0NBQVksR0FBbkIsVUFBb0IsSUFBSTtRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0saUNBQVMsR0FBaEIsVUFBaUIsSUFBWSxFQUFFLEtBQWEsRUFBRSxVQUFrQixFQUFFLElBQWlCO1FBQWpCLHFCQUFBLEVBQUEsU0FBaUI7UUFDakYsSUFBTSxDQUFDLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBTSxPQUFPLEdBQVcsVUFBVSxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyRCxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQTVCVSxhQUFhO1FBRHpCLFVBQVUsRUFBRTs7T0FDQSxhQUFhLENBOEJ6QjtJQUFELG9CQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E5QlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvb2tpZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIGdldENvb2tpZShuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjYTogQXJyYXk8c3RyaW5nPiA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuICAgIGNvbnN0IGNhTGVuOiBudW1iZXIgPSBjYS5sZW5ndGg7XG4gICAgY29uc3QgY29va2llTmFtZSA9IGAke25hbWV9PWA7XG4gICAgbGV0IGM6IHN0cmluZztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FMZW47IGkgKz0gMSkge1xuICAgICAgYyA9IGNhW2ldLnJlcGxhY2UoL15cXHMrL2csICcnKTtcbiAgICAgIGlmIChjLmluZGV4T2YoY29va2llTmFtZSkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKGNvb2tpZU5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZUNvb2tpZShuYW1lKSB7XG4gICAgdGhpcy5zZXRDb29raWUobmFtZSwgJycsIC0xKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb29raWUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVEYXlzOiBudW1iZXIsIHBhdGg6IHN0cmluZyA9ICcnKSB7XG4gICAgY29uc3QgZDogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgZXhwaXJlRGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgIGNvbnN0IGV4cGlyZXM6IHN0cmluZyA9ICdleHBpcmVzPScgKyBkLnRvVVRDU3RyaW5nKCk7XG4gICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9JyArIHZhbHVlICsgJzsgJyArIGV4cGlyZXMgKyAocGF0aC5sZW5ndGggPiAwID8gJzsgcGF0aD0nICsgcGF0aCA6ICcnKTtcbiAgfVxuXG59XG4iXX0=