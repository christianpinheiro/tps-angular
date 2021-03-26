import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-juroscompostos",
  templateUrl: "./juroscompostos.component.html",
  styleUrls: ["./juroscompostos.component.css"]
})
export class JuroscompostosComponent implements OnInit {
  capit: number;
  taxa: number;
  tempo: number;

  constructor() {
    this.capit = 0;
    this.taxa = 0;
    this.tempo = 0;
  }

  getCapital() {
    return this.capit;
  }

  getTaxa() {
    return this.taxa;
  }

  getTempo() {
    return this.tempo;
  }

  juros(capit, taxa, tempo) {
    return this.capit * Math.pow((1 + (taxa / 100)), tempo);
  }

  getCapitalList() {
    let list: number[] = [];

    for (let i = 1; i <= this.tempo; i++) list.push(this.getTempo());

    return list;
  } 

  ngOnInit() {}
}
