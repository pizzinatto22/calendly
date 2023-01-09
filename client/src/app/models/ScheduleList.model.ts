import { ScheduleData, ScheduleEmpty } from "./ScheduleData.model"

export interface ScheduleList extends ScheduleData {
  date: Date
  createdAt: Date
}

export function ScheduleListEmpty():ScheduleList {
  return {
    date: new Date(),
    createdAt: new Date(),
    email: "luiz.pizzinatto@ufsc.br",
    name: "Luiz Eduardo Pizzinatto",
    note: "Favor comparecer na sala do NICSE, térreo do Bloco G, junto à direção",
    ticket: "202209010002398"
  }
}