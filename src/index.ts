import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import passport from 'passport'
import { routes } from './settings/routes.js'
import { AppDataSource } from './infrastructure/DataBase/DataSource.js'
import 'reflect-metadata'

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