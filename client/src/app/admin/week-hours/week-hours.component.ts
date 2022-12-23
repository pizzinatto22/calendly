import { Component, Input} from '@angular/core';
import { ConfigStartEndTime } from 'src/app/models/Config.model';

@Component({
  selector: 'app-week-hours',
  templateUrl: './week-hours.component.html',
  styleUrls: ['./week-hours.component.css']
})
export class WeekHoursComponent {

  @Input() data: ConfigStartEndTime[] = []
  @Input() index: number = 0

  constructor() { }

  weekDay(day: number) {
    switch (day) {
      case 0: return "Domingo"
      case 1: return "Segunda"
      case 2: return "Terça"
      case 3: return "Quarta"
      case 4: return "Quinta"
      case 5: return "Sexta"
      default: return "Sábado"
    }
  }

  add() {
    this.data.push(<ConfigStartEndTime>{start:"", end: ""})
  }

  remove(t: ConfigStartEndTime) {
    this.data = this.data.filter(e => e != t)
  }

}
