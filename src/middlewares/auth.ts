
import { NextFunction, Request, Response } from 'express'
import { jwtService } from '../services/jwtService'
import { userService } from '../services/userService'
import { JwtPayload } from 'jsonwebtoken'
import { UserInstance } from '../models/User'

export interface AuthenticateRequest extends Request {
  user?: UserInstance | null
}

export function ensureAuth(req: AuthenticateRequest, res: Response, next: NextFunction) {
  const authorizationHeader = req.headers.authorization

  if (!authorizationHeader) {
    return res.status(401).json({ message: 'Token não informado' })
  }

  const token = authorizationHeader.replace(/Bearer /, '')

  jwtService.verifyToken(token, (err, decoded) => {
    if(err || typeof decoded === 'undefined') return res.status(401).json({ 
      message: 'Token inválido' 
    })
    
    userService.findByEmail((decoded as JwtPayload).email).then(user => {
      req.user = user
      next()
    })
  })
}
