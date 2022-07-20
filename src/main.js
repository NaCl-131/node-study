const router = require("../src/router/user.route");
const tokenCheck = require('./router/token.check');
const koa = require('koa');
const app = new koa();
const koaBody = require("koa-body");
app.use(koaBody())
app.use(tokenCheck)


app.listen(8080, () => {})

app.use(router.routes())