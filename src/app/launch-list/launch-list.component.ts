import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PastLaunchesListGQL } from "../services/spacexGraphql.service";
import { map } from "rxjs/operators";


@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {

  constructor(private readonly pastLaunchesService: PastLaunchesListGQL) { }

  pastLaunches$ = this.pastLaunchesService
    .fetch({ limit: 100000 })
    .pipe(
      map(
        res => res.data.launchesPast
      )
    );

  ngOnInit(): void {
  }

}
