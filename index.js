import { graphql } from "graphql"
import express from 'express';
const app = express();

import {
  schema,
  rootValue
} from './source/3-query-variable.js';

// 将 GraphQL API 暴露为一个路由
app.use('/g', express.json(), (req, res) => {
  graphql({
    schema,
    // for httpie
    // source: req.query.q,
    rootValue,
    
    // for altaire
    source: req.body.query,
    graphiql: true,
  })
    .then((result) => res.send(result))
    .catch((error) => res.status(500).send(error));
});

app.listen(3000, () => console.log('Server started on port 3000'));