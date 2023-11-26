import { Response } from "express";
import { AuthenticateRequest } from "../middlewares/auth";
import { userService } from "../services/userService";

export const usersController = {
  // GET /users/current
  show: async (req: AuthenticateRequest, res: Response) => {
    const currentUser = req.user

    try {
      return res.json(currentUser)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  update: async (req: AuthenticateRequest, res: Response) => {
    const { id } = req.user!
    const { firstName, lastName, phone, email, birth } = req.body

    try {
      const updatedUser = await userService.update(id, {
        firstName,
        lastName,
        phone,
        email,
        birth
      })

      return res.json(updatedUser)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  // GET /users/current/watching
  watching: async (req: AuthenticateRequest, res: Response) => {
    const { id } = req.user!

    try {
      const watching = await userService.getKeepWatchingList(id)
      return res.json(watching)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}