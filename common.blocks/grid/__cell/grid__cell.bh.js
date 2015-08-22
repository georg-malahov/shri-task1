module.exports = function (bh) {
    bh.match('grid__cell', function (ctx) {
        ctx.content({
            tag: 'div',
            cls: 'grid__cell-inner',
            content: ctx.content()
        }, true);
    });
};
