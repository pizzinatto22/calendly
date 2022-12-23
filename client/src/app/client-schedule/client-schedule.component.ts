import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatCalendar } from '@angular/material/datepicker';
import * as moment from 'moment';
import { AvailableDates } from '../models/AvailableDates.model';
import { Schedule, ScheduleEmpty } from '../models/Schedule.model';

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
    this.selectedHourSlot = null
  }

  currentDateSlot:AvailableDates | null | undefined = null
  selectedHourSlot : string | null = null

  schedule : Schedule = ScheduleEmpty()

  availableDates: AvailableDates[] = [
    {date: new Date("2022-12-21"), slots:["09:00", "10:30"]},
    {date: new Date("2022-12-22"), slots:[]},
    {date: new Date("2022-12-23"), slots:["14:00", "15:00", "16:00", "17:00"]}
  ]

  @ViewChild(MatCalendar) calendar: MatCalendar<Date> | undefined

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
  }

  cancel(f:NgForm) {
    f.reset()
    this.selectedHourSlot = null
  }
  
  onSubmit(f: NgForm) {
    console.log(this.schedule)
  }
}
