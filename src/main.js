const koa = require('koa');
const app = new koa();
const koaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');
const router = koaRouter()
app.listen(8080, () => {
    // console.log('[ ctx ] >', 1)
})
//简单get请求
router.get('/', async (ctx) => {
    console.log(ctx.query) //获得对象
    console.log(ctx.queryString) //获得字符串
    ctx.response.body = [{ //简写：ctx.body
        "data": {
            'meg': "成功"
        }
    }]
})
app.use(bodyParser());

router.post('/post', async (ctx) => {
    console.log(toString.call((ctx.request)));
    console.log('%c [ ctx.request.body ]-23', 'font-size:13px; background:pink; color:#bf2c9f;', ctx.request)
    // console.log(ctx.queryString) //获得字符串
    ctx.response.body = [{ //简写：ctx.body
        "data": {
            'meg': "成功"
        }
    }]
})
//启动路由
app.use(router.routes());
app.use(router.allowedMethods())


const db = require('./utils/db');