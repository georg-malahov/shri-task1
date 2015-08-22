module.exports = function (bh) {
    bh.match('popup__content_main_row', function (ctx, json) {
        if (!json.data) {
            return;
        }

        ctx.cls('popup__content_main').content([
            {
                cls: 'popup__content_main-inner',
                content: [
                    {
                        block: 'grid',
                        elem: 'row',
                        elemMods: {head: true},
                        mode: json.data.mode
                    },
                    {
                        block: 'grid',
                        elem: 'row',
                        elemMods: {content: true},
                        data: json.data
                    }
                ]
            },
        ], true);
    });
};
