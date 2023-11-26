import { Request, Response } from 'express'
import { AuthenticateRequest } from '../middlewares/auth'
import { episodeService } from '../services/episodeService'

export const episodesController = {
  // GET /episodes/stream
  stream: async (req: Request, res: Response) => {
    const { videoUrl } = req.query
    const range = req.headers.range

    try {
      if (typeof videoUrl !== 'string') {
        throw new Error('videoUrl must be of type \'string\'');
      }

      episodeService.streamEpisodeToResponse(res, videoUrl, range)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },
  getWatchTime: async (req: AuthenticateRequest, res: Response) => {
    const userId = req.user!.id
    const episodeId = req.params.id

    try {
        const watchTime = await episodeService.getWatchTime(userId, Number(episodeId))
        return res.json(watchTime)
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
        }
    }
},

// POST /episodes/:id/watchTime
setWatchTime: async (req: AuthenticateRequest, res: Response) => {
    const userId = req.user!.id
    const episodeId = Number(req.params.id)
    const { seconds } = req.body

    try {
        const watchTime = await episodeService.setWatchTime({
            episodeId,
            userId,
            seconds
        })
        return res.json(watchTime)
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
        }
    }
}
}