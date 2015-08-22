module.exports = function (bh) {
    bh.match('grid__cell_format_mode', function (ctx) {
        var data = ctx.param('data');

        if (!data) {
            return;
        }

        ctx.content({
            block: 'icon',
            cls: 'grid__cell_format_mode-link',
            url: '/common.blocks/grid/__cell/images/' + data + '.png'
        });
    });
};
