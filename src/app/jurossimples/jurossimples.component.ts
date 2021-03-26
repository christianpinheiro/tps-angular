import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-jurossimples",
  templateUrl: "./jurossimples.component.html",
  styleUrls: ["./jurossimples.component.css"]
})
export class JurossimplesComponent implements OnInit {
  capit: number;
  taxa: number;
  tempo: number;
  result: 0;

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

  getResult() {
    {
      {
        return (this.capit * this.taxa * this.tempo) / 100;
      }
    }
  }

  getCapitalList() {
    let list: number[] = [];

    for (let i = 1; i <= 1; i++) list.push(this.getCapital());

    return list;
  }

  ngOnInit() {}
}
