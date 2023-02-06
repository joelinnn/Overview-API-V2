import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { resolvers, typeDefs } from './graphql'
import express from 'express';
import http from 'http';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()
const app = express()
const httpServer = http.createServer(app)
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
});

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB')
    startServer()
  })

async function startServer() {
  await server.start()
  app.use('/', cors<cors.CorsRequest>(), expressMiddleware(server))
  await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000/`);
}
