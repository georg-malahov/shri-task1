([{
		mustDeps: [
			{ block: 'popup', mods: { main: 'row' }, js: true },
			{ block: 'popup', elem: 'content', mods: { main: true } },
			{ block: 'popup', elem: 'content', mods: { main: 'row' } }
		]
	},
	{
		tech: 'js',
		mustDeps: [
			{ block: 'popup-content', elem: 'row', tech: 'bemhtml' }
		]
	}
])