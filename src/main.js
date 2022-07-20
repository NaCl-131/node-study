const koa = require('koa');
const app = new koa();
const koaBody = require("koa-body");
app.use(koaBody())
const router = require("../src/router/user.route")

app.listen(8080, () => {
})

app.use(router.routes())