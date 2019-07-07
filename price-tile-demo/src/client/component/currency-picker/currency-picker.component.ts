import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StaticDataService } from 'src/client/services/static-data.service';

@Component({
  selector: 'app-currency-picker',
  templateUrl: './currency-picker.component.html',
  styleUrls: ['./currency-picker.component.css']
})
export class CurrencyPickerComponent implements OnInit {
  @Input() symbol: string;
  @Output() ccySelected = new EventEmitter<string>();

  ccyPairs = [];

  constructor(private staticDataService: StaticDataService) {}

  ngOnInit() {
    this.staticDataService.getCCY().then((result: any) => {
      this.ccyPairs = result;
    });
  }

  onChange(newValue) {
    this.ccySelected.emit(newValue);
  }
}
