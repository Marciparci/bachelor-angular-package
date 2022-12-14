import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AngularReactModule } from '@bubblydoo/angular-react';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BubblyService } from './bubbly-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularReactModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BubblyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
