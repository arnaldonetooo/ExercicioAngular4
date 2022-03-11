import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Exercicioangular04';
  
  constructor(private _snakeBar:MatSnackBar){}
   open() {
    this._snakeBar.open('Pacote Comprado', 'fechar');
  }







}
