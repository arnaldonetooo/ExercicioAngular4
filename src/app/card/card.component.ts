import { Component , EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

  @Input()
  titulo: string = ''

  @Input()
  conteudo: string = ''
  @Input()
  conteudo1: string = ""
  
  
  @Input()
  conteudo2: string = ""
  @Input()
  conteudo3: string = ""
  @Input()
  conteudo4: string = ""

  @Input()
  background: string = ''

    @Input()
   btnColor:string=''
    
   @Input()
  color:string=''
  
  @Input()
  height:string=''

 
 
  @Output()
  enviar:EventEmitter<any> = new EventEmitter<any>()
  evento():void{
    this.enviar.emit()
  }




   
}


