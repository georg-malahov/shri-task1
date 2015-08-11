module.exports = function (bh) {
	bh.match('controls', function(ctx) {
		ctx.content([
			{
				elem : 'inner',
				content: ctx.content()
			}
		], true);
	});
};