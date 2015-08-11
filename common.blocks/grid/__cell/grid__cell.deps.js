({
	shouldDeps: [
		{ elem: 'cell',
			mods: {
				format: ['mode', 'number', 'airport', 'airline', 'airplane', 'time', 'status', 'delays'],
				head: true,
				name: ['mode', 'number', 'airport', 'airline', 'airplane', 'time', 'status', 'delays']
			}
		}
	],
	mustDeps: [
		{ block: 'icon' }
	]
})