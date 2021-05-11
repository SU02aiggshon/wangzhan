const Koa = require('koa')
const views = require('koa-views')
const static = require('koa-static')
const path = require('path')
const app = new Koa()

const staticPath = './static'

app.use(static(
  path.join( __dirname,  staticPath)
))


app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

app.use( async ( ctx ) => {
	await ctx.render('sys1', {
        })
})

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')