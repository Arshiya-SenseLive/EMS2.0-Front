import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-user-body',
  templateUrl: './user-body.component.html',
  styleUrl: './user-body.component.css'
})
export class UserBodyComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  device: any;

  // constructor(public panelService: SettingsPanelService) {
  // }

  getBodyClass(): string {
    if (this.collapsed && this.screenWidth > 768) {
      return 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      return 'body-md-screen';
    }
    return '';
  }
}
