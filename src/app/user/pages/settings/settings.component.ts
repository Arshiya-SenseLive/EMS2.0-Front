import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  designation: string;
  contact: string;
  plant: string;
  password: string;
  [key: string]: any;
}

interface Company {
  email: string;
  name: string;
  location: string;
  consumer: string;
  sanctionedLoad: string;
  contractDemand: string;
  connectedLoad: string;
  tariff: string;
  contractPercentage: string;
  bill: string;
  energyDetail: string;
  energyValue: string;
  [key: string]: any;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  editingField: string | null = null;
  profileForm!: FormGroup;
  companyForm!: FormGroup;

  companyFields = [
    { key: 'email', label: 'Company Email :' },
    { key: 'name', label: 'Company Name :' },
    { key: 'location', label: 'Company Location :' },
    { key: 'consumer', label: 'Energy Consumer :' },
    { key: 'sanctionedLoad', label: 'Sanctioned Load (KW) :' },
    { key: 'contractDemand', label: 'Contract Demand (KVA) :' },
    { key: 'connectedLoad', label: 'Connected Load (KW) :' },
    { key: 'tariff', label: 'Tariff :' },
    { key: 'contractPercentage', label: '% of Contract Demand :' },
    { key: 'bill', label: 'Electricity Bill :' },
    { key: 'energyDetail', label: 'Energy Detail (Solar/Digi) :' },
    { key: 'energyValue', label: 'Energy Value :' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['John', Validators.required],
      lastName: ['Doe', Validators.required],
      email: ['john.doe@email.com', [Validators.required, Validators.email]],
      designation: ['Manager', Validators.required],
      contact: [
        '9876543210',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      plant: ['Plant 1', Validators.required],
      password: [
        'johndoe@123',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$'
          ),
        ],
      ],
    });

    this.companyForm = this.fb.group({
      email: ['company@email.com', [Validators.required, Validators.email]],
      name: ['Company Pvt. Ltd.', Validators.required],
      location: ['Mumbai, India', Validators.required],
      consumer: ['LT', Validators.required],
      sanctionedLoad: ['120', Validators.required],
      contractDemand: ['100', Validators.required],
      connectedLoad: ['90', Validators.required],
      tariff: ['Industrial', Validators.required],
      contractPercentage: ['80%'],
      bill: ['₹50,000'],
      energyDetail: ['Solar', Validators.required],
      energyValue: ['250 KW'],
    });
  }

  onEdit(field: string) {
    this.editingField = field;
  }

  getMaskedPassword(password: string): string {
    return '●'.repeat(password?.length || 0);
  }

  onSave(field: string) {
    if (this.profileForm.get(field)?.invalid || this.companyForm.get(field)?.invalid) {
      this.profileForm.get(field)?.markAsTouched();
      this.companyForm.get(field)?.markAsTouched();
      return;
    }
    console.log(`${field} updated:`, this.profileForm.value[field] || this.companyForm.value[field]);
    this.editingField = null;
  }

  onSaveProfile() {
    if (this.profileForm.valid && this.companyForm.valid) {
      console.log('Profile updated:', this.profileForm.value, this.companyForm.value);
      this.editingField = null;
    } else {
      this.profileForm.markAllAsTouched();
      this.companyForm.markAllAsTouched();
    }
  }

  // convenient getters (like in register.component)
  get f() {
    return this.profileForm.controls;
  }
  get c() {
    return this.companyForm.controls;
  }
}
