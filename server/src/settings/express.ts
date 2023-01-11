import express from 'express'
import { AppRoutes } from './routes';
import bodyParser from 'body-parser';

export class AppExpress {
  private app = express()
  private appRoutes = new AppRoutes()
  
  constructor(private port: number) {}
  
  start() {
    this.app.use(express.json())
    this.app.use(bodyParser.json())
    this.app.use(this.appRoutes.routes)

    this.app.listen(this.port, () => {
      console.log(` *** Server running on port ${this.port} ***`)
    })
  }
}