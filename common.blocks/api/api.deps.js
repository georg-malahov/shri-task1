(
{
    shouldDeps: [
        {
            elem: 'airport-status',
            mod: 'data'
        }
    ],
    mustDeps: [
        {block: 'vow'},
        {block: 'querystring'},
        {
            block: 'events',
            elems: ['channels']
        }
    ]
}
)
