import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  userName = 'Admin';
  showFilters = false;   // hidden by default

  filter = {
    type: 'device' as 'device' | 'group',
    deviceId: null as string | null,
    groupId: null as string | null,
    mode: 'real-time',
    period: 'today'
  };

  filterTypeOptions = [
    { label: 'Individual Device', value: 'device' },
    { label: 'Group', value: 'group' }
  ];
  deviceOptions = [{ id: 'building1', name: 'Main Building - Floor 1' }];
  groupOptions  = [{ id: 'g1', name: 'Plant A – Transformers' }];
  dataModeOptions = [
    { label: 'Real-Time', value: 'real-time' },
    { label: 'Historical', value: 'historical' }
  ];
  timePeriodOptions = [
    { label: 'Today', value: 'today' },
    { label: 'This Week', value: 'week' },
    { label: 'This Month', value: 'month' }
  ];

  toggleFilters() { this.showFilters = !this.showFilters; }

  // Selection handlers (keep your existing ones if you prefer)
  onFilterTypeChange(item:any){ this.filter.type = item.value; this.filter.deviceId = this.filter.groupId = null; }
  onDeviceChange(item:any){ this.filter.deviceId = item.id; }
  onGroupChange(item:any){ this.filter.groupId = item.id; }
  onModeChange(item:any){ this.filter.mode = item.value; }
  onPeriodChange(item:any){ this.filter.period = item.value; }

  applyFilters() {
    // TODO: call API with this.filter
    // Auto-close after applying (like your figma example)
    this.showFilters = false;
  }

  // ---- Badge helper utilities ----
  getLabel(list: {label:string; value:string}[], value: string): string {
    return list.find(x => x.value === value)?.label ?? value;
  }
  getDeviceName(id: string|null): string {
    return this.deviceOptions.find(d => d.id === id)?.name ?? 'Device';
  }
  getGroupName(id: string|null): string {
    return this.groupOptions.find(g => g.id === id)?.name ?? 'Group';
  }
}

