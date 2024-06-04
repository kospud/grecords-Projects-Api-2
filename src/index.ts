import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import bodyParser from 'body-parser'
import { createConnection } from 'typeorm'
import passport from 'passport'
import { User } from './domain/entities/User.js'
import { Task } from './domain/entities/Task.js'
import { Project } from './domain/entities/Project.js'
import { routes } from './settings/routes.js'
import { UserService } from './application/services/UserService.js'
import { UserRepository } from './infrastructure/DataBase/repositories/UserRepository.js'
import { AppDataSource } from './infrastructure/DataBase/DataSource.js'


async function main(){

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
  origin: '*', 
}));

app.use(passport.initialize());

await AppDataSource.initialize()
await routes(app)

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
})
}

main().catch(err=>{
  console.log(err)
})