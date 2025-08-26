import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  HostListener,
  forwardRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }]
})
export class SelectComponent {
   @Input() items: any[] = [];
  @Input() displayKey: string = 'name';
  @Input() valueKey: string = 'id';
  @Input() placeholder: string = 'Select';


  @Output() selectionChange = new EventEmitter<any>();

  isOpen = false;
  selectedItem: any = null;

  private internalValue: any = null;

  private onChange = (_: any) => { };
  private onTouched = () => { };

  constructor(private _eref: ElementRef) { }

  writeValue(value: any): void {
    this.internalValue = value;
    this.updateSelectedItem();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  toggleDropdown(event: MouseEvent) {
    this.isOpen = !this.isOpen;
    event.stopPropagation();
  }

  selectItem(item: any, event: MouseEvent) {
    this.selectedItem = item;
    this.internalValue = item[this.valueKey];
    this.onChange(this.internalValue);
    this.selectionChange.emit(item);
    this.isOpen = false;
    event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: Event) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.updateSelectedItem();
    }
  }

  private updateSelectedItem(): void {
    if (this.items && this.internalValue !== null) {
      this.selectedItem = this.items.find(item => item[this.valueKey] === this.internalValue);
    }
  }
}
