import { Category } from './Category'
import { Course } from './Course'
import { Episode } from './Episode'
import { Favorite } from './Favorite'
import { User } from './User'

Category.hasMany(Course, { as: 'courses' })

Course.belongsTo(Category)
Course.belongsToMany(User, { through: Favorite})
Course.hasMany(Episode, { as: 'episodes' })
Course.hasMany(Favorite, { as: 'favoritesUsers' , foreignKey: 'courseId' })

Episode.belongsTo(Course)

Favorite.belongsTo(Course)
Favorite.belongsTo(User)

User.belongsToMany(Course, { through: Favorite })
User.hasMany(Favorite, { as: 'favoritesCourses', foreignKey: 'userId' })

export {
  Category,
  Course,
  Episode,
  Favorite,
  User
}