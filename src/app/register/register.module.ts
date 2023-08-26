import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterService } from './register.service';

@NgModule({
  declarations: [RegisterFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [RegisterService],
  exports: [RegisterFormComponent]
})
export class RegisterModule { }
