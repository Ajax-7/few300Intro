import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holiday-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addItem(nameEl: HTMLInputElement, dateEl: HTMLInputElement) {
    const name = nameEl.value;
    const date = dateEl.valueAsDate.toISOString();
    // dispatch!

    nameEl.value = '';
    dateEl.value = '';
    nameEl.focus();
  }

}
