import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatCalendar } from '@angular/material/datepicker';
import * as moment from 'moment';
import { BackendService } from '../backend.service';
import { AvailableDates } from '../models/AvailableDates.model';
import { ScheduleData, ScheduleEmpty } from '../models/ScheduleData.model';

@Component({
  selector: 'app-client-schedule',
  templateUrl: './client-schedule.component.html',
  styleUrls: ['./client-schedule.component.css'],
})
export class ClientScheduleComponent {
  private _selected: Date | null = null

  get selected(): Date | null { return this._selected}

  set selected(d:Date | null) {
    this._selected = d
    this.currentDateSlot = this.findDate(d)
    this.clean()
  }

  currentDateSlot:AvailableDates | null | undefined = null
  selectedHourSlot : string | null = null
  schedule : ScheduleData = ScheduleEmpty()
  scheduleSuccess: boolean = false

  availableDates: AvailableDates[] = [
    {date: new Date("2023-01-03"), slots:["09:00", "10:30"]},
    {date: new Date("2023-01-05"), slots:[]},
    {date: new Date("2023-01-26"), slots:["14:00", "15:00", "16:00", "17:00"]}
  ]

  @ViewChild(MatCalendar) calendar: MatCalendar<Date> | undefined

  constructor(private backend: BackendService) {}

  findDate(d: Date | null) : AvailableDates | undefined {
    const strDate = d?.toISOString().substring(0, 10)
    return this.availableDates.find(
      e => e.date.toISOString().substring(0, 10) == strDate
    )
  }

  filter = (d: Date) : boolean => {
    return !!this.findDate(d)
  }

  dateClass = (d: Date) : string => {

    const date = this.findDate(d)

    if (date && date.slots!.length) {
      return 'slot_available'
    } 
    
    return ''
  }

  selectHour(h: string) {
    this.selectedHourSlot = h
  }

  today() {
    this.selected = new Date()
    this.calendar!.activeDate = <Date><unknown>moment(this.selected)
    this.calendar?.updateTodaysDate()
  }

  refresh() {
    //this.availableDates.pop()
    this.calendar?.updateTodaysDate()
    this.clean()
  }

  cancel(f:NgForm) {
    f.resetForm()
    this.clean()
  }

  clean() {
    this.selectedHourSlot = null
    this.schedule = ScheduleEmpty()
    this.scheduleSuccess = false
  }

  onSubmit(f: NgForm) {
    this.backend.schedule(this.schedule)
      .then(success => {
        this.scheduleSuccess = true
      })
      .catch(e => {
        //TODO - Melhorar isso aqui.
        alert("Não foi possível realizar o agendamento. Recarregue a página e tente novamente.")
        this.refresh()
      })
  }
}
