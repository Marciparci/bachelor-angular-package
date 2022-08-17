import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import MyReactComponent from './react-components/MyReactComponent';
import MyReactForm from './react-components/MyReactForm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'bachelor-angular-package';
  MyReactComponent = MyReactComponent;
  MyReactForm = MyReactForm;
  inputs: any = [];


  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.httpClient.get("assets/data.json").subscribe(data =>{
      console.log(data);

      // umlagern in Array um leichter an Eigenschaften zu kommen
      this.inputs = data;

      // Zuweisen JSON Wert zu Input Wert Text
      const text = (<HTMLInputElement>document.getElementById("text"));
      text.value = this.inputs.text;

      // Zuweisen JSON Wert zu Input Wert Nummer
      const number = (<HTMLInputElement>document.getElementById("number"));
      number.value = this.inputs.number;

      // Zuweisen JSON Wert zu Input Wert Datum
      const date = (<HTMLInputElement>document.getElementById("date"));
      date.value = this.inputs.date;
    })
  }
}
