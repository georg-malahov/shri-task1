module.exports = function (bh) {
	bh.match('grid__row_head', function(ctx) {
		ctx.content([
			{ elem: 'cell', elemMods: { head: true, name: 'mode' }, content: "Mode" },
			{ elem: 'cell', elemMods: { head: true, name: 'number' }, content: "Flight Number" },
			{ elem: 'cell', elemMods: { head: true, name: 'airport' },
				content: { dep: 'Arrival', arr: 'Departure'}[ctx.param('mode')] + " Airport" },
			{ elem: 'cell', elemMods: { head: true, name: 'airline' }, content: "Airline" },
			{ elem: 'cell', elemMods: { head: true, name: 'airplane' }, content: "Airplane" },
			{ elem: 'cell', elemMods: { head: true, size: 'time', name: 'time' },
				content: { tag: 'span',	cls: 'grid__cell-inner_time', content: "Scheduled Time" } },
			{ elem: 'cell', elemMods: { head: true, name: 'status' }, content: "Status" },
			{ elem: 'cell', elemMods: { head: true, name: 'delays' }, content: "Delays (min)"}
		], true);
	});
};