(
    [
        {
            shouldDeps: [
                {
                    block: 'grid',
                    mods: {
                        empty: 'no',
                        size: ['md', 'sm']
                    },
                    elems: [
                        {
                            elem: 'head',
                            mods: {scrolled: 'out'}
                        },
                        {
                            elem: 'content',
                            mods: {scrolled: 'out'}
                        },
                        {
                            elem: 'row',
                            mods: {
                                head: true,
                                content: true
                            }
                        },
                        {elem: 'cell'}
                    ]
                }
            ]
        },
        {
            tech: 'js',
            mustDeps: [
                {
                    block: 'grid',
                    elems: [
                        {elem: 'head'},
                        {elem: 'content'},
                        {
                            elem: 'row',
                            mods: {
                                head: true,
                                content: true
                            }
                        },
                        {elem: 'cell'}
                    ],
                    tech: 'bemhtml'
                }
            ]
        }
    ]
)
