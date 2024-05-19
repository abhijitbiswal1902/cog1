import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
  const { username, email, password, role } = req.body
  const hashedPassword = bcryptjs.hashSync(password, 10)
  const newUser = new User({ username, email, password: hashedPassword, role })
  try {
    await newUser.save()
    res.status(201).json({ message: 'User created successfully' })
  } catch (error) {
    next(error)
  }
}

export const signin = async (req, res, next) => {
  const { email, password } = req.body
  try {
    const validUser = await User.findOne({ email })
    if (!validUser) return next(errorHandler(404, 'User not found'))
    const validPassword = bcryptjs.compareSync(password, validUser.password)
    if (!validPassword) return next(errorHandler(401, 'Wrong credentials'))

    // Determine homepage based on user role
    let homepage
    switch (validUser.role) {
      case 'org':
        homepage = '/HomePageOrg'
        break
      case 'host':
        homepage = '/HomePageHost'
        break
      case 'gamer':
        homepage = '/HomePageGamer'
        break
      default:
        throw new Error('Invalid user role')
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: validUser._id, role: validUser.role },
      process.env.JWT_SECRET
    )

    const { password: hashedPassword, ...rest } = validUser._doc
    const expiryDate = new Date(Date.now() + 3600000) // 1 hour
    res
      .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json({ ...rest, homepage }) // Send homepage along with user data
  } catch (error) {
    next(error)
  }
}

export const signout = (req, res) => {
  res.clearCookie('access_token').status(200).json('Signout success!')
}