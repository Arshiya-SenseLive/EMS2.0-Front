import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.css'
})
export class ForgotComponent {
  mailForm!:FormGroup;
  submitMail:boolean = false;
  mail:string = '';
  constructor(private fb:FormBuilder) {}
  ngOnInit(): void {
    this.mailForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]]
    });
  }
  get email() {
    return this.mailForm.get('email');
  }
  onSubmit() {
    this.submitMail = true;
  }
}
