const koa = require('koa');
const app = new koa();
const router = require("../src/router/user.route")
app.listen(8080, () => {
    // console.log('[ ctx ] >', 1)
})
const koaBody = require("koa-body");
app.use(koaBody())
app.use(router.routes())
// const db = require('./utils/db');