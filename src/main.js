const router = require("../src/router/user.route");
const tokenCheck = require('./router/token.check');
const session = require('koa-session');
const CONFIG = require('../src/config/Cookie.config')
const koa = require('koa');
const app = new koa();
app.keys = ['KEYFORSESSION'];

const koaBody = require("koa-body");
app.use(koaBody())
// app.use(tokenCheck)
app.use(session(CONFIG, app));

app.listen(8080, () => {})

app.use(router.routes())