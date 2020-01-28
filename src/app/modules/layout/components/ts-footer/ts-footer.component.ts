import { Component, Input, OnInit } from '@angular/core';
import { FooterService } from './ts-footer.service';

@Component({
  selector: 'ts-footer',
  templateUrl: './ts-footer.component.html',
  styleUrls: ['./ts-footer.component.scss']
})
export class TsFooterComponent implements OnInit {

  @Input() popularCities: any;
  @Input() showBuilding: boolean = true;

  copyrightYear:number;

  constructor(private footerService: FooterService) {

  }

  getPopularCities = async (): Promise<any> => {
    const data = await this.footerService.getAllPopularCities();
    this.popularCities = data['data'];
  }

  ngOnInit() {
    this.copyrightYear = new Date().getFullYear();
    if(this.popularCities == undefined){      
      this.getPopularCities();
    }
  }
}
