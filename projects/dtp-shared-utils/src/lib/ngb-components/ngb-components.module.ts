import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerBasicComponent } from './datepicker-basic/datepicker-basic.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DatepickerBasicComponent],
  exports: [DatepickerBasicComponent],
  imports: [
    CommonModule, BrowserModule, FormsModule, NgbModule],
})
export class NgbComponentsModule { }
