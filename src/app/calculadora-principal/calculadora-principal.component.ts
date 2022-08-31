import { Component, OnInit } from '@angular/core';
import { Numero } from './Numero.model';

@Component({
  selector: 'app-calculadora-principal',
  templateUrl: './calculadora-principal.component.html',
  styleUrls: ['./calculadora-principal.component.css'],
})
export class CalculadoraPrincipalComponent implements OnInit {
  public numeroText: string = "";
  public numerosArray: number[] = [];
  public result: number = 0;
  public r: number = 0;
  public varAdicional: number= 0;
  public nextNumero: number = 0;
  public arrayResult: number[] = [];

  constructor() {}

  ngOnInit(){}

  adicionaNumero(numero: number) {
    this.numeroText += numero.toString();
    this.varAdicional = +this.numeroText;

    console.log(this.numeroText);
  }

  Operacoes(op: string){
   this.numerosArray.push(this.varAdicional);
   console.log(this.numerosArray);

   switch(op){
    case '+':
      this.Limpar();
      this.result = this.numerosArray.reduce(function(a,b){
        return a + b;
     });
      console.log(this.result + " soma");
      break;
    case '-':
      this.Limpar();
      this.result = this.numerosArray.reduce(function(a,b){
        return a - b;
     });
      console.log(this.result + " subtração");
      break;
    case '*':
      this.Limpar();
      this.result = this.numerosArray.reduce(function(a,b){
        return a * b;
     });
      console.log(this.result + " multiplicação");
      break;
    case '/':
        this.Limpar();
        this.result = this.numerosArray.reduce(function(a,b){
          return a / b;
       });
        console.log(this.result + " multiplicação");
        break;
   }
  }

  Resultado(){
    this.numeroText += this.result;
    console.log("Resultado1: " + this.result);
  }

  LimparTudo() {
    this.numerosArray = [];
    this.numeroText = "";
  }

  Limpar(){
    this.numeroText = "";
  }
}
