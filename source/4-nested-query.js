import { buildSchema } from "graphql";
import persons from '../data.js';

export const schema = buildSchema(`
type Query {
  person: PersonList
}

interface ResponseBody {
  total: Int
}

type Person{
  name: String,
  age: Int,
  hobby: String,
  friends: [Person]
}

type PersonList implements ResponseBody{
  data: [Person],
  total: Int
}
`)

export const rootValue = {
  person: (obj,args, ctx, info) => {
    return {
      total: persons.length,
      data: persons
    };
  }
}