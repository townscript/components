import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let CookieService = class CookieService {
    constructor() { }
    getCookie(name) {
        const ca = document.cookie.split(';');
        const caLen = ca.length;
        const cookieName = `${name}=`;
        let c;
        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) === 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return null;
    }
    deleteCookie(name) {
        this.setCookie(name, '', -1);
    }
    setCookie(name, value, expireDays, path = '') {
        const d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        const expires = 'expires=' + d.toUTCString();
        document.cookie = name + '=' + value + '; ' + expires + (path.length > 0 ? '; path=' + path : '');
    }
};
CookieService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], CookieService);
export { CookieService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdG93bnNjcmlwdC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9jb3JlL2Nvb2tpZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFFeEIsZ0JBQWdCLENBQUM7SUFFVixTQUFTLENBQUMsSUFBWTtRQUMzQixNQUFNLEVBQUUsR0FBa0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckQsTUFBTSxLQUFLLEdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxNQUFNLFVBQVUsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDO1FBQzlCLElBQUksQ0FBUyxDQUFDO1FBRWQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMvQixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDakQ7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLFlBQVksQ0FBQyxJQUFJO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSxTQUFTLENBQUMsSUFBWSxFQUFFLEtBQWEsRUFBRSxVQUFrQixFQUFFLE9BQWUsRUFBRTtRQUNqRixNQUFNLENBQUMsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUMxRCxNQUFNLE9BQU8sR0FBVyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JELFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsSUFBSSxHQUFHLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwRyxDQUFDO0NBRUYsQ0FBQTtBQTlCWSxhQUFhO0lBRHpCLFVBQVUsRUFBRTs7R0FDQSxhQUFhLENBOEJ6QjtTQTlCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29va2llU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgZ2V0Q29va2llKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGNhOiBBcnJheTxzdHJpbmc+ID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gICAgY29uc3QgY2FMZW46IG51bWJlciA9IGNhLmxlbmd0aDtcbiAgICBjb25zdCBjb29raWVOYW1lID0gYCR7bmFtZX09YDtcbiAgICBsZXQgYzogc3RyaW5nO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYUxlbjsgaSArPSAxKSB7XG4gICAgICBjID0gY2FbaV0ucmVwbGFjZSgvXlxccysvZywgJycpO1xuICAgICAgaWYgKGMuaW5kZXhPZihjb29raWVOYW1lKSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcoY29va2llTmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlQ29va2llKG5hbWUpIHtcbiAgICB0aGlzLnNldENvb2tpZShuYW1lLCAnJywgLTEpO1xuICB9XG5cbiAgcHVibGljIHNldENvb2tpZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZURheXM6IG51bWJlciwgcGF0aDogc3RyaW5nID0gJycpIHtcbiAgICBjb25zdCBkOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyBleHBpcmVEYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgY29uc3QgZXhwaXJlczogc3RyaW5nID0gJ2V4cGlyZXM9JyArIGQudG9VVENTdHJpbmcoKTtcbiAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz0nICsgdmFsdWUgKyAnOyAnICsgZXhwaXJlcyArIChwYXRoLmxlbmd0aCA+IDAgPyAnOyBwYXRoPScgKyBwYXRoIDogJycpO1xuICB9XG5cbn1cbiJdfQ==