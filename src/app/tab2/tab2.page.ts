import { Component } from '@angular/core';
import { evaluate } from 'mathjs'
import { AlertController } from '@ionic/angular';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
 
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 
  public calculo = ''; // vazia, variável que mostra o cálculo na tela 
  public resultado: string; // nula, mostra o resultado na tela
  private ponto = false; // falsa porque ainda não tem um ponto na tela
 private operacoes = ['+', '-', '/', '*'];
  
 
  constructor(public alertController: AlertController) {}
 
  adicionarNumero(valor: string){

    if(this.resultado){ //se a variável estiver preenchida vai ser verdadeira, se tiver vazia vai ser falsa 
      this.apagarTudo(); //limpa a calculadora antes de colocar o próximo valor
    }
    this.calculo = this.calculo + valor;
    
  }
 
  adicionarPonto(){

    if (this.ponto){
      return; //return para a execução de um método
    }
    this.calculo += ".";
    this.ponto = true; 
     
  }
 
  adicionarOperacao(operador: string){
    if (this.resultado){ //utiliza o resultado do primeiro cálculo para as próximos
      this.calculo = this.resultado.toString(); //toString para que possa pegar o que tiver dentro da variável resultado e converter para texto antes de colocar dentro de cálculo 
      this.resultado = null; //limpar o resultado
    }
    const ultimo = this.calculo.slice(-1);  // está pegando o último item de cálculo para que eu não possa repetir meu último operador 
    if(this.operacoes.indexOf(ultimo) > -1){  // indexOf vai procurar na variável operações o último carácter
    return;
    }
      this.calculo += operador;
    this.ponto = false;
  }
 
  public apagarTudo(){
    this.calculo = '';
    this.resultado = null;
    this.ponto = false;
  }

 public apagarUltimo(){ 
   const ultimo = this.calculo.slice(-1);
   if(ultimo == "."){ //Verifica se o último carácter inserido é o ponto
this.ponto = false; 
   }
this.calculo = this.calculo.slice(0, -1); //o método slice está pegando tudo o que tiver dentro da variável calculo desconsiderndo o último caracter
 }
  
 public calcularResultados(){
   try{  //try catch vai tentar executar esse pedaço de código, caso dê errado em vez de parar a aplicação de forma inesperada para o usuario, ele vai executar o que estiver no catch, assim o usuario nao sai prejudicado
   this.resultado = evaluate(this.calculo); //toda vez que clicar no botão de igual, vai chamar a função evaluate e vai pegar tudo o que tiver na linha de calculo e executar para que possa exibir o resultado
 } catch (e){
   this.resultado = '';
   this.presentAlert('ERRO!', 'Cálculo Inválido, verifique com atenção!'); //presentAlert exibe uma mensagem para o usuário
 }

 }

 async presentAlert(titulo: string, mensagem: string) { 
  const alert = await this.alertController.create({
    
    header: titulo,
  
    message: mensagem,
    buttons: ['OK']
  });

  await alert.present();
}
}