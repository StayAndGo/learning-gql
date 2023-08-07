import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Query {
    person: Person
  }

  type Person{
    name: String,
    age: Int,
    hobby: String,
    gender: Gender
  }

  enum Gender {
    MALE
    FEMALE
  }
`)

const getPerson = () => {
  return {
    name: "Jane Doe",
    age: 24,
    hobby: "cooking",
    gender: "FEMALE"
  }
}

export const rootValue = {
  person: getPerson
}

