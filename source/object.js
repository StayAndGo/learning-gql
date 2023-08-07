import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type User {
    name: String,
    age: Int,
  
  }
  
  type Query {
    user: [User]  
  }
`)

const users = [
  {
    name: 'Jane Doe',
    age: 24,
    gender: 'FEMALE'
  },
  {
    name: 'John Doe',
    age: 24,
    gender: 'MALE',
  },
]
const queryUser = () => {
  return users;
}

export const rootValue = {
  user: queryUser,
}