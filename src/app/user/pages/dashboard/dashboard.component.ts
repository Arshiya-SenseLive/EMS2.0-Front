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

  // example state
filter = {
  type: 'device',        // 'device' | 'group'
  deviceId: null,
  groupId: null,
  mode: 'real-time',     // 'real-time' | 'historical'
  period: 'today'        // 'today' | 'week' | 'month' ...
};

filterTypeOptions = [
  { label: 'Individual Device', value: 'device' },
  { label: 'Group', value: 'group' }
];

deviceOptions = [
  { id: 'building1', name: 'Main Building - Floor 1' },
  // ...
];

groupOptions = [
  { id: 'g1', name: 'Plant A – Transformers' },
  // ...
];

dataModeOptions = [
  { label: 'Real-Time', value: 'real-time' },
  { label: 'Historical', value: 'historical' }
];

timePeriodOptions = [
  { label: 'Today', value: 'today' },
  { label: 'This Week', value: 'week' },
  { label: 'This Month', value: 'month' }
];

// handlers (optional)
onFilterTypeChange(item:any){ this.filter.type = item.value; this.filter.deviceId = this.filter.groupId = null; }
onDeviceChange(item:any){ this.filter.deviceId = item.id; }
onGroupChange(item:any){ this.filter.groupId = item.id; }
onModeChange(item:any){ this.filter.mode = item.value; }
onPeriodChange(item:any){ this.filter.period = item.value; }

applyFilters(){
  // call API / emit event with `this.filter`
}

}
