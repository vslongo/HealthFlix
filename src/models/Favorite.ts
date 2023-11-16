import { Model } from 'sequelize'
import { CourseInstance } from './Course'
import { UserInstance } from './User'
import { sequelize } from '../database'
import { DataTypes } from 'sequelize'

export interface Favorite {
  userId: number
  courseId: number
}

export interface FavoriteInstance extends Model<Favorite>, Favorite {
  Course?: CourseInstance
  User?: UserInstance
}

export const Favorite = sequelize.define<FavoriteInstance, Favorite>('Favorite', {
  userId : {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  courseId : {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'course',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
})