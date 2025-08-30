import { Component , OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit{
  userName = 'Admin';
  showFilters = false;
    Highcharts: typeof Highcharts = Highcharts;
  

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

   donutTimeFilters = [
    { label: '1 Hr', value: '1h' },
    { label: '12 Hrs', value: '12h' },
    { label: 'Today', value: 'day' },
    { label: 'This Week', value: 'week' },
    { label: 'This Month', value: 'month' }
  ];
  selectedDonutFilter = 'day';

  // --- Chart Options
  donutOptions: Highcharts.Options = {};
  lineOptions: Highcharts.Options = {};

  ngOnInit() {
    this.initDonutChart();
    this.initLineChart();
  }

  toggleFilters() { this.showFilters = !this.showFilters; }

 
  onFilterTypeChange(item:any){ this.filter.type = item.value; this.filter.deviceId = this.filter.groupId = null; }
  onDeviceChange(item:any){ this.filter.deviceId = item.id; }
  onGroupChange(item:any){ this.filter.groupId = item.id; }
  onModeChange(item:any){ this.filter.mode = item.value; }
  onPeriodChange(item:any){ this.filter.period = item.value; }

  applyFilters() {
   
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

  getTrendClass(value: number): string {
    if (value > 0) return 'trend-up';   
    if (value < 0) return 'trend-down';  
    return 'trend-normal';              
  }

  getTrendIcon(value: number): string {
    if (value > 0) return 'trending_up';
    if (value < 0) return 'trending_down';
    return 'trending_flat';  // neutral icon
  }
    initDonutChart() {
    const data = this.generateRandomDonutData();

    this.donutOptions = {
      chart: { type: 'pie', backgroundColor: '#fff' },
      title: { text: `${data.total} kWh`, verticalAlign: 'middle', y: 20 },
      tooltip: { pointFormat: '{series.name}: <b>{point.y} kWh</b> ({point.percentage:.1f}%)' },
      plotOptions: {
        pie: {
          innerSize: '60%',
          dataLabels: { enabled: true, format: '{point.name}: {point.y} kWh' },
          colors: [
            'var(--primary-color)',
            'var(--secondary-color)',
            'var(--success-color)',
            'var(--warning-color)',
            'var(--info-color)',
            'var(--danger-color)'
          ]
        }
      },
      series: [{
        type: 'pie',
        name: 'Consumption',
        data: data.values
      }]
    };
  }

  // ---- Line Chart
  initLineChart() {
    const actual = Array.from({ length: 12 }, (_, i) => [i * 2, 600 + Math.random() * 700]);
    const peak = 1350;

    this.lineOptions = {
      chart: { type: 'line', backgroundColor: '#fff' },
      title: { text: '' },
      xAxis: { title: { text: 'Time' }, categories: actual.map(p => `${p[0]}:00`) },
      yAxis: { title: { text: 'kW' } },
      tooltip: { shared: true },
      series: [
        {
          type: 'line',
          name: 'Actual Demand',
          data: actual.map(p => p[1]),
          color: 'var(--primary-color)'
        },
        {
          type: 'line',
          name: 'Max Demand',
          data: new Array(actual.length).fill(peak),
          color: 'red',
          dashStyle: 'ShortDash'
        }
      ]
    };
  }

  // ---- Random Data Generator for Donut
  generateRandomDonutData() {
    const devices = ['Main Building', 'Manufacturing', 'Office Block', 'Equipment', 'HVAC', 'Lighting'];
    const values = devices.map(name => [name, Math.floor(Math.random() * 5000) + 500]);
    const total = values.reduce((sum, v) => sum + (v[1] as number), 0);
    return { total, values };
  }

  // ---- Update Donut Chart by Filter
  updateDonutData(filter: string) {
    this.selectedDonutFilter = filter;
    this.initDonutChart(); // re-generate with new data
  }
}

