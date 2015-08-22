module.exports = function (bh) {
    bh.match('grid__head', function (ctx) {
        ctx.content([
            {
                elem: 'row',
                elemMods: {head: true},
                mode: ctx.param('mode')
            }
        ], true);
    });
};
