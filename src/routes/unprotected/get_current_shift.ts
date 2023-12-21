import { Handler } from "express"

export const get: Handler = async (req, res) => {
  res.send({data: {shift: 1}})
}