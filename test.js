const koaResponseDispatcher = require('./src/');
const request = require('supertest');
const koa = require('koa');
const app = new koa();
const router = require('koa-router')();

app.use(router.routes())
	.use(router.allowedMethods());

router.get('/test', async(ctx, next) => {
	await koaResponseDispatcher(ctx, {
		url: '/test',
		method: '/GET',
		body: 'Hello world',
		succesLogMessage: 'Data succesfuly sent',
		errorLogMessage: 'Can not send data',
		loggerLabel: 'Test',
		errorStatusDescription: 'Error by test'
	})
})

test('koa response dipatcher', (done) => {

	request(app.callback())
		.get('/test')
		.expect(200, 'Hello world')
		.end((error) => {
			if (error) {
				throw error;
			}
			done();
		});
	
});
