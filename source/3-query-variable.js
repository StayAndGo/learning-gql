import { buildSchema } from "graphql";
import persons from '../data.js';

export const schema = buildSchema(`
type Query {
  person(age: Int): PersonList
}

interface ResponseBody {
  total: Int
}

type Person{
  name: String,
  age: Int,
  hobby: String,
}

type PersonList implements ResponseBody{
  total: Int
  data: [Person],
}
`)

export const rootValue = {
  /**
   * @param {{
   *  age?: int
   * }} args
   */
  person: (args) => {
    const { age } =  args;
    const res = Object.values(args).length ? persons.filter(item => item.age === age) : persons;
    return {
      total: res.length,
      data: res
    };
  }
}