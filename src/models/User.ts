import bcrypt from 'bcrypt'
import { sequelize } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'

type CheckPasswordCallBack = (error?: Error, isSame?: boolean | null) => void

export interface User {
  id: number
  firstName: string
  lastName: string
  phone: string
  birth: Date
  email: string
  password: string
  role: 'admin' | 'user'
}

export interface UserCreationAttributes
  extends Optional<User, 'id'> {}

export interface UserInstance
  extends Model<User, UserCreationAttributes>, User {
    checkPassword: (password: string, callbackfn: CheckPasswordCallBack) => void
  }

export const User = sequelize.define<UserInstance, User>('users', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING
  },
  birth: {
    allowNull: false,
    type: DataTypes.DATE
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING
  }
  }, {
  hooks: {
    beforeSave: async (user) => {
      if (user.isNewRecord || user.changed('password')) {
        user.password = await bcrypt.hash(user.password.toString(), 10);
      }
    }
  }
  })

  User.prototype.checkPassword = function (password: string, callbackfn: CheckPasswordCallBack) {
    bcrypt.compare(password, this.password, (err, isSame) => {
      if (err) {
        return callbackfn(err)
      }
      callbackfn(err, isSame)
    })
  }

 