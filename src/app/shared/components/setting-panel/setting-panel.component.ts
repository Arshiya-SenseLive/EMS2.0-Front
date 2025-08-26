import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-setting-panel',
  templateUrl: './setting-panel.component.html',
  styleUrl: './setting-panel.component.css'
})

export class SettingPanelComponent {
  // isOpen = this.panelService.isOpen$;
  // panelData$ = this.panelService.data$;
  form!: FormGroup;
  isFormReady = false;
  isEditMode = false;
  currentDate: Date = new Date();

  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpenSubject.asObservable();

  private dataSubject = new BehaviorSubject<{ type: string; mode: string; item?: any } | null>(null);
  data$ = this.dataSubject.asObservable();

  private panelSub!: Subscription;
// 
  

  constructor(
    // private panelService: SettingsPanelService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
   
  }

  open(type: string, mode: 'add' | 'edit', item?: any): void {
    this.dataSubject.next({ type, mode, item });
    this.isOpenSubject.next(true);
  }


  update(): void {
    if (this.form.valid) {
      const formData = this.form.value;

      if (this.isEditMode) {
        // Update logic
      } else {
        // Add logic
      }

      this.close();
    } else {
      console.warn('❌ Form invalid. Please fill all required fields.');
    }
  }

  close(): void {
    
    document.body.style.overflow = 'auto';
  }

  ngOnDestroy(): void {
    this.panelSub?.unsubscribe();
    document.body.style.overflow = 'auto';
  }
}
