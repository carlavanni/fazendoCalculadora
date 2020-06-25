import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  public primeirovalor: number; 
  public segundovalor: number; 
  public resultadoS: number;
  public resultadoSub: number;
  public resultadoD: number;
  public resultadoM: number;
  public num: null;
  
  
  
  public situacao(){
    let resultadoS = this.primeirovalor + this.segundovalor; 
    this.resultadoS = resultadoS;
  
  }

    public situ(){
    let resultadoSub = this.primeirovalor - this.segundovalor; 
    this.resultadoSub = resultadoSub;
    }

 public result (){
    let resultadoD = this.primeirovalor / this.segundovalor; 
    this.resultadoD = resultadoD;
 }

 public resultado(){
    let resultadoM = this.primeirovalor * this.segundovalor; 
    this.resultadoM = resultadoM;
 }
 
public exnum(){
  let num = this.num;
  this.primeirovalor = num
  this.segundovalor = num
  this.resultadoS = num
  this.resultadoSub = num
  this.resultadoD = num
  this.resultadoM = num;

}

}

