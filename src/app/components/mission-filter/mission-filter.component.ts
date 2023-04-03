// mission-filter.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mission-filter',
  templateUrl: './mission-filter.component.html',
  styleUrls: ['./mission-filter.component.css']
})
export class MissionFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<string>();
  year: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onFilter(): void {
    this.filter.emit(this.year);
  }
}
