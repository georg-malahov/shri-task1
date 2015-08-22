module.exports = function (bh) {
    bh.match('grid__cell_format_airport', function (ctx) {
        var data = ctx.param('data');

        if (!data) {
            return;
        }

        ctx.content(data.replace(/Airport/, ''));
    });
};
