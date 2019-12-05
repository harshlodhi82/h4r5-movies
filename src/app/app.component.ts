import { Component } from '@angular/core';
import { Const } from './shared/services/const-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'H4R5 Movies';
  constructor(public constFile:Const){

  }

  ngOnInit() { 
  }
  
  test(){
    return "harsh";
  }
}
