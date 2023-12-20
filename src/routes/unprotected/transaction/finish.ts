import { Handler } from "express"
import { prisma } from "@/lib/db"
import { getModelConfig } from "@/utils/common"

export const post: Handler = async (req, res) => {
  try {
    if (!req.body.transaction_id) return res.status(500).json({success: false, message: 'transaction_id harus diisi!'})
    await prisma.transaction.update({
      where: {id: req.body.transaction_id},
      data: {
        status: "SERVED"
      }
    })
    res.send({success: true, message: 'Berhasil menyelesaikan pesanan'})
  } catch (err) {
    res.status(500).json({success: false, message: err})
  }
}