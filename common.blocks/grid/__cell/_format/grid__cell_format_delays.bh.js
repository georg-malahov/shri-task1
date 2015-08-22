module.exports = function (bh) {
    bh.match('grid__cell_format_delays', function (ctx) {
        var data = ctx.param('data');

        if (!data) {
            ctx.content('–');
            return;
        }

        var content = [];

        ['departure', 'arrival'].forEach(function (mode) {
            if (data[mode + 'GateDelayMinutes']) {
                content.push(
                    {
                        block: 'icon',
                        cls: 'grid__cell_format_mode-link',
                        url: '/common.blocks/grid/__cell/images/' +
                             mode.slice(0, 3) + '.png'
                    },
                    {
                        tag: 'span',
                        cls: 'grid__cell_format_delays-minutes',
                        content: ': ' + data[mode + 'GateDelayMinutes']
                    }
                );
            }
        });

        ctx.content(content);
    });
};
