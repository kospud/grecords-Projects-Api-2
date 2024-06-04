import { DataSourceOptions } from "typeorm";


export const dataSourceOptions :DataSourceOptions={
    "name": "default",
    "type": "mysql",
    "host": "localhost",
    "port": 0,
    "username": "",
    "password": "",
    "database": "",
    "synchronize": false,
    "entities": ["./src/domain/entities/*.{ts,js}"]
};