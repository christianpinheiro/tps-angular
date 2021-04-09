import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TimerService } from './timer.service';

interface Reponse{
  time: {updated: string};
  bpi: {
    USD: {
      "symbol": string;
      "rate": string;
      "rate_float": number;
    };
    EUR: {
      "symbol": string;
      "rate": string;
      "rate_float": number;
    }
  }
}

@Injectable()
export class BitcoinService {
  currentResponse: Reponse;
  updateList: Array<Reponse> = [];
  

  constructor(private http: HttpClient, private timer: TimerService) {
    this.timer.start(1000);
  }

  update(){
    this.http.get<Reponse>('https://api.coindesk.com/v1/bpi/currentprice.json')
    .subscribe(data => {      
      this.currentResponse = data;
      this.updateList.push(data);
    });
  }

  clear(){
    this.updateList = [];
  }


} 