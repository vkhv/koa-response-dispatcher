const koaResponseDispatcher = async (ctx, options) => {
	try {
		ctx.body = await options.body;
        options.logger && options.logger(options.logLabel).log(ctx, options.succesLogMessage); 
	} catch (error) {	
        ctx.throw(500, options.errorStatusDescription)
        options.logger && options.logger(options.logLabel).error(ctx, options.errorLogMessage, error); 
	}
};

module.exports = koaResponseDispatcher;
