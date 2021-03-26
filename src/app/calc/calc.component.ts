import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  n: number;

  constructor() {}

  getImpar(){
      return this.n % 2 == 1;
    }

  getPar(){
      return this.n % 2 == 0;
    }

  ngOnInit() {}

}