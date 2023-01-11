import { Router } from "express";
import { ConfigController } from "../controllers/config.controller";

export class AppRoutes {
  routes = Router()
  private config = new ConfigController()

  public constructor() {
    this.routes.get("/config", this.config.list)
    this.routes.post("/config", this.config.save)
  }
}