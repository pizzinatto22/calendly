import { Request, Response } from "express";
import { ConfigModel, IConfig } from "../models/config.model";

export class ConfigController {

  async list(req: Request, res: Response) {
    const config = await ConfigModel.findOne().lean()
    res.json(config)
  }

  async save(req: Request, res: Response) {

    const data:IConfig = req.body

    console.log(data)

    let config = await ConfigModel.findOne()
    try {
      if (config) {
        config.overwrite(data)
      } else {
        config = new ConfigModel(data)
      }
      
      await config.save()

      res.json(config)
    } catch (e) {
      console.log(e)
      res.status(400).json({
        error: "Error on saving config"
      })
    }
    
    
  }
}