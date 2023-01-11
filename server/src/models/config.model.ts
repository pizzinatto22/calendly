import { Schema, model } from 'mongoose';

export interface IConfig {
  start: Date,
  end: Date,
  duration: number,
  emails: string,
  week_hours: IConfigStartEndTime[][] 
}

export interface IConfigStartEndTime {
  start: string,
  end: string
}

export const ConfigSchema = new Schema<IConfig>({
  start: {type: Date, required: true},
  end: {type: Date, required: true},
  duration: {type: Number, required: true},
  emails: String,
  week_hours: [[new Schema<IConfigStartEndTime>({
    start: {type: String},
    end: {type: String},
  }, {_id: false})]]

});

export const ConfigModel = model<IConfig>('Config', ConfigSchema)

