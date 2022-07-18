const koa = require('koa');
const app = new koa();
const koaBody = require("koa-body");
app.use(koaBody())
const router = require("../src/router/user.route")
app.listen(8080, () => {
    // console.log('[ ctx ] >', 1)
})

app.use(router.routes())
// const db = require('./utils/db');
// const db=require('../src/sequelize/model/user')