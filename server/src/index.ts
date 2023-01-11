import { Database } from "./settings/db";
import { AppExpress } from "./settings/express";


const db = new Database(process.env.MONGO_URL || "")

db.connect()
.then(() => {
    const app = new AppExpress(parseInt(process.env.PORT || "3000", 10))
    app.start()
  })
  .catch(e => {
    console.log("Error starting database. App could not init.", e)
  })