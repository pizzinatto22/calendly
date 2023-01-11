import * as Mongoose from "mongoose";
// import { UserModel } from "./users/users.model";

export class Database {
  private database: Mongoose.Connection | null = null

  constructor (private uri: string) {}

  connect() {
    return new Promise((accept, reject) => {
      if (this.database) {
        return accept(true)
      }

      Mongoose.connect(this.uri)
      .then(() => {
        this.database = Mongoose.connection
        console.log("LUIZ", Mongoose.connection)
        accept(true)
      })
      .catch(e => reject(e))
    })
    
  }

  disconnect() {
    if (!this.database)
      return

    Mongoose.disconnect()
    this.database = null
  }
}