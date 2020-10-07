import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    // would usually use async await but since its data import and not a data form i'll use hash sync
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Mark Doe',
    email: 'mark@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mindy Doe',
    email: 'mindy@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
