const express = require('express')
const schema = require('./Schema/schema')
const app = express();
const expressGraphQL = require("express-graphql").graphqlHTTP;

app.use('/graphql',expressGraphQL({
    schema,
    graphiql:true
}))

app.listen(4000,()=>{
    console.log('listining')
})