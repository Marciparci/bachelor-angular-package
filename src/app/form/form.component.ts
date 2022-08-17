import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BubblyService } from '../bubbly-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [BubblyService]
})
export class FormComponent {

  exampleForm = this.formBuilder.group({
    text: 'Formulartext',
    number: 0,
    date: '2022-08-09'
  })

  constructor(
    private formBuilder: FormBuilder,
    private bubblyService: BubblyService
  ) { }

  onSubmit() {
    let framework = "angular";
    console.log("submitted Angular");
    BubblyService.getInputValues(framework);
    this.bubblyService.consoleTest();

    // Alte Variante der Datenbindung direkt über das Formular

    // let angularText = (<HTMLInputElement>document.getElementById("Atext")).value;
    // (<HTMLInputElement>document.getElementById("text")).value = angularText;

    // let angularNumber = (<HTMLInputElement>document.getElementById("Anumber")).value;
    // (<HTMLInputElement>document.getElementById("number")).value = angularNumber;

    // let angularDate = (<HTMLInputElement>document.getElementById("Adate")).value;
    // (<HTMLInputElement>document.getElementById("date")).value = angularDate;
  }

}
