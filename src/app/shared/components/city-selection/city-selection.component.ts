import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { config } from '../../../core/app-config';
import { CookieService } from '../../../core/cookie.service';
import { SharedService } from '../../../shared/services/shared.service';


@Component({
  selector: 'app-city-selection',
  templateUrl: './city-selection.component.html',
  styleUrls: ['./city-selection.component.scss']
})
export class CitySelectionModalComponent implements OnInit {

  countryCode: string = 'in';
  cityPopupActive: any = true;
  activePlace: any;
  popularCities: any;
  router = config.router;
  popularCityImageLink: string = config.imageCommonResourcesBaseUrl + '/Marketplace/popular-cities/';
  showLoader = true;
  loaderText: string;
  closeSuggestions = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CitySelectionModalComponent>,
    public dialog: MatDialog,
    public sharedService: SharedService,
    private cookieService: CookieService) {

  }

  close = () => {
    this.dialogRef.close();
  }

  getCities = async (code: string): Promise<any> => {
    const data = await this.sharedService.getPopularCitiesByCountryCode(code);
    this.popularCities = data['data'];
    setTimeout(() => {
      this.showLoader = false;
    }, 500);
  }

  getCityFromLatAndLong = async (lat: string, long: string): Promise<any> => {
    const result = await this.sharedService.getNearbyCity(lat, long);
    const city = result['data'];
    if (city) {
      this.showLoader = true;
      this.loaderText = "Redirecting to " + city.name;
      setTimeout(() => {
        this.close();
        this.router.navigate([this.countryCode + '/' + city.code], {});
      }, 500);
    }
  }

  detectLocation = (): void => {
    navigator.geolocation.getCurrentPosition((location: any) => {
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;
      this.getCityFromLatAndLong(latitude, longitude);
    });
  }

  setCloseSuggestions = (val): void => {
    this.closeSuggestions = val;
  }

  ngOnInit() {
    if (this.data && this.data.cities) {
      this.popularCities = this.data.cities;
      this.showLoader = false;
    } else {
      this.getCities(this.countryCode);
    }

    this.cookieService.setCookie('cityPopupDisplayed', 'true', 1200, '/');
  }

}
