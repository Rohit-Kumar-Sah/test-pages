import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { RouterModule, Routes } from '@angular/router';

const addressRoute :Routes = [

  {path : "" , component:Component1Component },
  {path : "component1" , component: Component1Component},
  {path : 'component2' , component: Component2Component}
  

]



@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component
  ],
  imports: [

    BrowserModule,
    RouterModule.forRoot(addressRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
