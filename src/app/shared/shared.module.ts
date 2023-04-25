import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianComponent } from './components/accordian/accordian.component';

@NgModule({
  declarations: [
    AccordianComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccordianComponent
  ]
})
export class SharedModule { }
