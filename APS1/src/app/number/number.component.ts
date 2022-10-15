import { Component, OnInit } from '@angular/core';
import { Participante } from './participante';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})

export class NumberComponent implements OnInit {
  public participantes: Participante[] = [];
  public qtdSorteios = 3;
  public sorteios: Array<Array<number>> = [];
  private sorteio: Array<number> = [];
  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 20; index++) {
      let oParticipante = new Participante;
      oParticipante.nome = "Pariticipante " + (index + 1).toString();
      this.participantes.push(oParticipante);
    }  
  }


  Sortear(): void {
    if (true) {
      this.sorteios = [];
      let numbers: number[] = [];
      this.participantes.forEach(participante => {
        numbers.push(participante.number_1);
        numbers.push(participante.number_2);
        numbers.push(participante.number_3);
        numbers.push(participante.number_4);
        numbers.push(participante.number_5);
        numbers.push(participante.number_6);
      });
   
      for (var q = 0; q <= this.qtdSorteios - 1; q++) {
        for (var i = 0; i < 6; i++) {
          let _random = Math.floor(Math.random() * numbers.length);
          this.sorteio.push(numbers[_random]);
        }
        this.sorteios.push(this.sorteio);
        this.sorteio = [];
      }
    }
  }
} 
