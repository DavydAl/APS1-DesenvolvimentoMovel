import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})

export class NumberComponent implements OnInit {
  private numbers = ["1", "50", "3", "4", "60", "6", "7", "8", "9", "10", "45", "25", "3", "14", "15", "16", "17", "18"];
  private qtdSorteios = 5;
  private sorteios = new Array();
  private sorteio = new Array();
  constructor() { }

  ngOnInit(): void {
  }

  Sortear(): void {
    if (true) {
      //se nao fort igual ele adiciona. VCom toda certeza vai ter que ser feito um loop para validar.   
      for (var q = 1; q <= this.qtdSorteios; q++) {
        for (var i = 0; i < 6; i++) {
          let _random = Math.floor(Math.random() * this.numbers.length);
          this.sorteio.push(this.numbers[_random]);
        }
        this.sorteio = [];
        this.sorteios.push(this.sorteio);
      }
    }
  }
} 
