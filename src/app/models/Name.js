const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Name extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
            },
            {
                sequelize
            }
        );
        return this;
    }
}

export default Name;
