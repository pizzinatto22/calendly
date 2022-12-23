export interface Config {
  start: Date,
  end: Date,
  duration: number,
  emails: string,
  week_hours: ConfigStartEndTime[][] 
}

export interface ConfigStartEndTime {
  start: string,
  end: string
}

export function ConfigEmpty(): Config {
  return {
    start: new Date(),
    end: new Date(),
    duration: 0,
    emails: "",
    week_hours: [
      [],[],[],[],[],[],[]
    ]
  }
}