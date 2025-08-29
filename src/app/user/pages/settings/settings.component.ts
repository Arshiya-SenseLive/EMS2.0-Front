import { Component } from '@angular/core';

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
export class SettingsComponent {
  editingField: string | null = null;

  profile: Profile = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    designation: 'Manager',
    contact: '9876543210',
    plant: 'Plant 1',
    password: ''
  };

  company: Company = {
    email: 'company@email.com',
    name: 'Company Pvt. Ltd.',
    location: 'Mumbai, India',
    consumer: 'LT',
    sanctionedLoad: '120',
    contractDemand: '100',
    connectedLoad: '90',
    tariff: 'Industrial',
    contractPercentage: '80%',
    bill: '₹50,000',
    energyDetail: 'Solar',
    energyValue: '250 KW'
  };

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
    { key: 'energyValue', label: 'Energy Value :' }
  ];

  onEdit(field: string) {
    this.editingField = field;
  }

  onSave(field: string) {
    console.log(`${field} updated:`, this.profile[field] || this.company[field]);
    this.editingField = null;
  }
  onSaveProfile(){
    console.log('Profile updated:', this.profile);
    this.editingField = null;
  }
}
