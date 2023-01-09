import { Component } from '@angular/core'
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ScheduleList, ScheduleListEmpty } from 'src/app/models/ScheduleList.model';
import * as moment from 'moment';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ScheduleListComponent {
  dataSource: ScheduleList[] = [ScheduleListEmpty(),ScheduleListEmpty()];

  columnsToDisplayWithExpand = ['date', 'name', 'email', 'expand'];
  expandedElement: ScheduleList | null = null;

  d(date: Date) {
    return moment(date).format('DD/MM/YYYY HH:mm')
  }

  week(date:Date) {
    const weekDay = moment(date).weekday()
    switch (weekDay) {
      case 0: return "domingo"
      case 1: return "segunda"
      case 2: return "terça"
      case 3: return "quarta"
      case 4: return "quinta"
      case 5: return "sexta"
      default: case 0: return "sabado"
    }
  }
}