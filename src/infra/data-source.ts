import { DataSource } from "typeorm"
import "reflect-metadata";
import { StellarSystem } from "../entity/StellarSystem"
import { Character } from "../entity/Characters"
import { Planet } from "../entity/Planets"
import { Spaceship } from "../entity/Spaceships"
import dotenv from 'dotenv';

dotenv.config()

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: [StellarSystem, Character, Planet, Spaceship],
    migrations: ["src/migrations/*"],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


export default AppDataSource;
