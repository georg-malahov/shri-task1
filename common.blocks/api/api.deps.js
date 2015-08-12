({
	shouldDeps: [
		{ elem: 'airport-status', mod1: 'data' }
	],
	mustDeps: [
		{ block: 'vow' },
		{ block: 'querystring' },
		{ block: 'events', elems: ['channels'] }
	]
})