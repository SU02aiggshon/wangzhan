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
	console.log(ctx.url);
	if(ctx.url=="/"){
	await ctx.render('sys1', {
        })
	}
	else if(ctx.url=="/product"){
		console.log("123");
			await ctx.render('product', {
        })
	}
		else if(ctx.url=="/sproduct"){
			await ctx.render('sproduct', {
				products:[{"url":" url(../img/newdog.png)","data":'some description about this product to in this product to introduce to the personsome description about this product to in this product to introduce to the person'},
				{url:" url(../img/test3.jpg)",data:'some description about this product to in this product to introduce to the personsome description about this product to in this product to introduce to the person'}]
        })
	}
		else if(ctx.url=="/contact"){
			await ctx.render('contact', {
        })
		}
		else if(ctx.url=="/service"){
			await ctx.render('service', {
        })
		}
			else if(ctx.url=="/partener"){
			await ctx.render('partener', {
        })
		}
})

app.listen(3001)
console.log('[demo] start-quick is starting at port 3000')