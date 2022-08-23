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

  // Füllen des Formulars mit Ausgangswerten
  exampleForm = this.formBuilder.group({
    text: 'Formulartext',
    number: 0,
    date: '2022-08-09'
  })

  // Initalisieren des bubblyServices
  constructor(
    private formBuilder: FormBuilder,
    private bubblyService: BubblyService
  ) { }

  // Funktion löst aus, wenn der "Absenden" Button des Angular Formulars betätigt wird
  onSubmit() {
    let framework = "angular";
    console.log("submitted Angular");

    // Aufruf des Services und der Funktion "getInputValues" 
    // mit Übergabeparameter des Namen des Frameworks und Syntax nach React Standard (statische Funktion)
    BubblyService.getInputValues(framework);

    // Aufruf des Services und der Funktion "consoleTest"
    // Syntax nach Angular Standard
    this.bubblyService.consoleTest();
  }

}
