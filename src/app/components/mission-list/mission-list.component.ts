// mission-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Launch } from '../../models/launch';
import { MissionService } from '../../services/mission.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  launches: Launch[] = [];
  selectedLaunch: Launch | undefined;

  constructor(private missionService: MissionService) { }

  ngOnInit(): void {
    this.getLaunches();
  }

  onSelect(launch: Launch): void {
    this.selectedLaunch = launch;
  }

  onFilter(year: string): void {
    if (year) {
      this.missionService.getLaunchesByYear(year).subscribe((data: Launch[]) => {
        this.launches = data;
      });
    } else {
      this.getLaunches();
    }
  }

  private getLaunches(): void {
    this.missionService.getLaunches().subscribe((data: Launch[]) => {
      this.launches = data;
    });
  }
}
