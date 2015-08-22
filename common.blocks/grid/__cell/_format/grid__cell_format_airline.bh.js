module.exports = function (bh) {
    bh.match('grid__cell_format_airline', function (ctx) {
        var data = ctx.param('data');

        if (!data) {
            return;
        }

        ctx
            .mix({block: 'i-bem'})
            .attr('data-bem', JSON.stringify({
                grid__cell_format_airline: {
                    name: data.name,
                    id: 'grid__cell_format_airline'
                }
            }))
            .js(true, true)
            .content({
                block: 'icon',
                cls: 'grid__cell_format_airline-logo',
                attrs: {'data-name': data.name},
                url: 'http://0.omg.io/wego/image/upload/c_fit,w_70,h_30/flights/airlines_rectangular/' +
                     data.fs + '.png'
            }
        );
    });
};
