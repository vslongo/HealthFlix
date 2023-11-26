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

  updatePassword: async (req: AuthenticateRequest, res: Response) => {
    const user = req.user
    const { currentPassword, newPassword } = req.body

    if (!user) {
      return res.status(401).json({ message: 'Não autorizado!' })
    }

    try {
      user.checkPassword(currentPassword, async (err, isSame) => {
        if (err) {
          return res.status(400).json({ message: err.message })
        }

        if (!isSame) {
          return res.status(400).json({ message: 'Senha incorreta' })
        }

        await userService.updatePassword(user.id, newPassword)
        return res.status(204).send()
      })
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