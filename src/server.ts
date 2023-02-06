import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers, typeDefs } from './graphql'
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB')
    startServer()
  })

async function startServer() {
  const { url } = await startStandaloneServer(server)
  console.log(`🚀 Server ready at ${url}`)
}
