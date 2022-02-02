const dontenv = require('dotenv');

dontenv.config();


// const dir = NODE_ENV === 'production' ? 'build' : 'src';

module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'test_password12A',
    database: 'succed_your_courses',
    entities: [`src/database/entity/**/*.ts`],
}