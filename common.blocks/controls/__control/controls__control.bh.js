module.exports = function (bh) {
    bh.match('controls__control', function (ctx) {
        ctx.content([
            {
                tag: 'span',
                cls: 'controls__control-label controls__control-label_' + ctx.param('name'),
                content: ctx.param('label')
            },
            {
                block: 'radio-group',
                mods: {
                    theme: 'islands',
                    size: 'm',
                    type: 'button',
                    name: ctx.param('name')
                },
                name: 'radio-button',
                val: ctx.param('val'),
                options: ctx.param('options')
            }
        ], true);
    });
};
