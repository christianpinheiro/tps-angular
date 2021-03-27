import { Injectable } from '@angular/core';

interface Task {
  title: string;
}

interface Disciplinas {}

@Injectable()
export class TasksService {
  list: Array<Task> = [];
  lista: Array<Disciplinas> = [
    "Negócios e Marketing e Eletrônicos",
    "Desenvolvimento para Servidores",
    "Inglês V",
    "Projeto de Prototipagem e Testes de Usabilidade",
    "Projeto de encontrabilidade",
    "Tópicos Especiais em Sistemas para Internet II",
    "Projeto de Trabalho de Graduação em Sistemas para Internet I"
  ];

  constructor() {}

  getList() {
    return this.list;
  }

  add(title: string) {
    this.list.push({title});
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }

  getLista() {
    return this.lista;
  }
}
