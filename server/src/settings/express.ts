import express from 'express'
import { Router, Request, Response } from 'express';
import { AppRoutes } from './routes';

export class AppExpress {
  private app = express()
  private appRoutes = new AppRoutes()
  
  constructor(private port: number) {
    this.app.use(this.appRoutes.routes)
  }
  
  start() {
    this.app.use(express.json())

    this.app.listen(this.port, () => {
      console.log(` *** Server running on port ${this.port} ***`)
    })
  }
}