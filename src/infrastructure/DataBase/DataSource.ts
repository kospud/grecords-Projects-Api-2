import { DataSource } from "typeorm";
import { dataSourceOptions } from "../../settings/DataSourceOptions.js";

export const AppDataSource = new DataSource(dataSourceOptions)

