module.exports = function(bh) {
	bh.match('grid__content', function(ctx, json) {
		ctx.content((json.rows || []).map(function (row) {
				return {
					elem: 'row',
					elemMods: { content: true },
					mix: [{ block: 'i-bem' }],
					attrs: {
						'data-bem': JSON.stringify({
							'grid__row_content': {
								data: row,
								id: 'row'
							},
						})
					},
					data: row
				}
			}).concat([
				{
					block : 'popup',
					mods : { theme : 'islands', target : 'anchor', autoclosable: true },
					mix: { block: 'popup', mods: { main: 'row' } }
				}
			])
		, true);
	});
};