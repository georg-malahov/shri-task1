module.exports = function (bh) {
	bh.match('grid__row_content', function(ctx, json) {
		if (!json.data) {
			return;
		}
		ctx.content([
			{
				elem: 'cell',
				elemMods: { format: 'mode', name: 'mode', content: true },
				data: json.data.mode
			},
			{
				elem: 'cell',
				elemMods: { format: 'number', name: 'number', content: true },
				content: json.data.flightNumber
			},
			{
				elem: 'cell',
				elemMods: { format: 'airport', content: true, name: 'airport' },
				data: json.data[{ dep: 'arr', arr: 'dep'}[json.data.mode] + 'Airport']
			},
			{
				elem: 'cell',
				elemMods: { format: 'airline', content: true, name: 'airline' },
				data: json.data.airline
			},
			{
				elem: 'cell',
				elemMods: { format: 'airplane', content: true, name: 'airplane' },
				content: json.data.equipment
			},
			{
				elem: 'cell',
				elemMods: { format: 'time', content: true, name: 'time' },
				data: json.data[json.data.mode + 'Time']
			},
			{
				elem: 'cell',
				elemMods: { format: 'status', content: true, name: 'status' },
				content: json.data.status
			},
			{
				elem: 'cell',
				elemMods: { format: 'delays', content: true, name: 'delays' },
				data: json.data.delays
			}
		], true);
	});
};