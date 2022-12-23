export interface Schedule {
  name: string,
  email: string,
  ticket: string,
  note: string
}

export function ScheduleEmpty():Schedule {
  return {
    name: "",
    email: "",
    ticket: "",
    note: ""
  }
}