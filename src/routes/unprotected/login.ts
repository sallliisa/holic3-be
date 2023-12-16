import { prisma } from "@/lib/db"
import { Handler } from "express"

export const post: Handler = async (req, res) => {
  const result = await prisma.user.findFirst({
    where: {
      username: req.body.username,
      password: req.body.password
    }
  })

  if (!result) return res.status(403).send({
    success: false,
    message: 'Username atau password salah!'
  })
  res.send({
    data: {
      success: true,
      message: 'Berhasil melakukan login!'
    }
  })
}