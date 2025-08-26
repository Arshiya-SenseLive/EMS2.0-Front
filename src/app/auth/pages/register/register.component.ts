import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',

  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm!: FormGroup;
  activeStep: number = 1;
  roles = [
    { label: 'User', value: 'user' },
    { label: 'Admin', value: 'admin' },
    { label: 'Guest', value: 'guest' },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      // Company Details
      company_name: ['', Validators.required],
      company_email: [
        '',
        {
          validators: [Validators.required, Validators.email],
          updateOn: 'blur',
        },
      ],
      company_location: ['', Validators.required],

      sanctioned_load: ['', Validators.required],
      contract_demand: ['', Validators.required],
      connected_load: ['', Validators.required],
      tariff: ['', Validators.required],
      perct_of_contract_demand: [''],
      electricity_bill: [''],

      energy_details: [''],
      energy_value: [''],

      // Admin Details
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      designation: ['', Validators.required],
      phone_number: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      plant: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$'
          ),
        ],
      ],
      confirm_password: ['', Validators.required],
    });
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirm_password() {
    return this.registerForm.get('confirm_password');
  }
  get phone_number() {
    return this.registerForm.get('phone_number');
  }
  get company_email() {
    return this.registerForm.get('company_email');
  }
  get first_name() {
    return this.registerForm.get('first_name');
  }
  get last_name() {
    return this.registerForm.get('last_name');
  }
  get company_name() {
    return this.registerForm.get('company_name');
  }
  get company_location() {
    return this.registerForm.get('company_location');
  }
  get sanctioned_load() {
    return this.registerForm.get('sanctioned_load');
  }
  get contract_demand() {
    return this.registerForm.get('contract_demand');
  }
  get connected_load() {
    return this.registerForm.get('connected_load');
  }
  get tariff() {
    return this.registerForm.get('tariff');
  }
  get designation() {
    return this.registerForm.get('designation');
  }
  get plant() {
    return this.registerForm.get('plant');
  }
  
  onRegister(): void {
    // if (this.registerForm.valid) {
    //   console.log('Login form submitted:', this.registerForm.value);
    //   // Here you would typically send the data to a service for authentication
    //   alert('Login successful! Check the console for form data.');
    // } else {
    //   console.log('Form is invalid.');
    //   alert('Please fill in both username and password.');
    // }
  }
}
