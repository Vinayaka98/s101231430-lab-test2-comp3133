// mission-details.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Launch } from '../../models/launch';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent implements OnInit {
  @Input() launch: Launch | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
