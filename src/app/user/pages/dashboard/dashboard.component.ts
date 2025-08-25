import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    // user info (can be dynamic later)
  userName: string = 'Admin';

  // filters (for binding if needed)
  filterType: string = '';
  selectedDevice: string = '';
  dataMode: string = '';
  timePeriod: string = '';

  // card data (you could fetch this from API)
  cards = [
    { title: 'KVA', value: '1,245.6', unit: 'kVA', description: 'Apparent Power' },
    { title: 'KWH', value: '8,932.4', unit: 'kWh', description: 'Energy Consumption' },
    { title: 'KVAR', value: '342.1', unit: 'kVAR', description: 'Reactive Power' },
    { title: 'PF', value: '0.92', unit: '', description: 'Power Factor' }
  ];

  // event handlers
  onNotificationClick(): void {
    console.log('🔔 Notification clicked');
    // future: open a dropdown or snackbar
  }

  onSettingsClick(): void {
    console.log('⚙️ Settings clicked');
    // future: route to settings page or open modal
  }

  onApplyFilter(): void {
    console.log('✅ Applying filters:', {
      filterType: this.filterType,
      selectedDevice: this.selectedDevice,
      dataMode: this.dataMode,
      timePeriod: this.timePeriod
    });
    // TODO: call API with these filters
  }
}
