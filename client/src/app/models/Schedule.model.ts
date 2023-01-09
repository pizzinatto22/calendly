export interface ScheduleData {
  name: string,
  email: string,
  ticket: string,
  note: string
}

export function ScheduleEmpty():ScheduleData {
  return {
    name: "",
    email: "",
    ticket: "",
    note: ""
  }
}