const Sequelize = require('sequelize');

const Name = require('../app/models/Name');

const databaseConfig = require('../config/database');

const models = [Name];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();
