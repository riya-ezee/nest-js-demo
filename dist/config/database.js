"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../src/users/entities/user.entity");
const con = typeorm_1.createConnection({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "sample",
    entities: [user_entity_1.User],
    synchronize: true,
    logging: false,
});
con.then(async (connection) => {
    console.log("Database connected: " +
        (connection.isConnected ? connection.isConnected : false));
});
exports.default = con;
//# sourceMappingURL=database.js.map