module.exports = function (bh) {
	bh.match('grid__cell_format_time', function(ctx) {
		var data = ctx.param('data');
		if (!data) {
			return;
		}
		ctx.content({
			tag: 'span',
			cls: 'grid__cell-inner_time',
			content: moment(data).format('DD.MM.YY HH:mm')
		});
	});
};