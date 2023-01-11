import { Request, Response } from "express";
import { ConfigModel, IConfig } from "../models/config.model";

export class ConfigController {

  async list(req: Request, res: Response) {
    const config = await ConfigModel.findOne().lean()
    res.json(config)
  }

  async save(req: Request, res: Response) {

    const data:IConfig = req.body

    let config = await ConfigModel.findOne()
    
    if (config) {
      await config.overwrite(data)
    } else {
      config = new ConfigModel(data)
      await config.save()
    }
    
    res.json(config)
  }
}