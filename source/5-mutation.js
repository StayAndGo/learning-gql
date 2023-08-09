import { buildSchema } from "graphql";
import persons from '../data.js';

export const schema = buildSchema(`
type Query {
  person(age: Int): [Person]
}

type Mutation {
  updatePersonName(id: Int!, name: String!): Person
}

type Person {
  id: Int,
  name: String,
  age: Int,
  hobby: String
}

`)

export const rootValue = {
  // query
  person: ({ age },args, ctx, info) => {

    return age ? persons.filter(item => item.age === age) : persons
  },

  // mutation
  updatePersonName: ({id, name}) => {
    const index = persons.findIndex(item => item.id === id);
    if(!index) return {};
    
    return {
      ...persons[index],
      name
    };
  }
}