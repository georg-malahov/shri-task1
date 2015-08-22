//noinspection BadExpressionStatementJS
module.exports = {
    block: 'page',
    title: 'Онлайн-табло авиарейсов',
    styles: [
        { elem: 'css', url: 'task1.css' }
    ],
    scripts: [
        { elem: 'js', url: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js' },
        { elem: 'js', url: 'task1.js' }
    ],
    content: [
        {
            block: 'header',
            content: [
                {
                    elem: 'title',
                    tag: 'h1',
                    content: 'Онлайн-табло авиарейсов'
                },
                {
                    elem: 'description',
                    tag: 'p',
                    content: 'Тестовое задание №1 для поступления в Школу разработчкив интерфейсов в Москве.'
                },
                {
                    block: 'banner',
                    mods: { 'github': true }
                }
            ]
        },
        {
            block: 'content',
            content: [
                {
                    block: 'board',
                    js: true,
                    content: [
                        {
                            block: 'controls',
                            mods: { size: true },
                            js: true,
                            content: [
                                {
                                    elem: 'control',
                                    label: 'Аэропорт:',
                                    name: 'airport',
                                    val : 'SVO',
                                    options: [{ val: 'SVO', text: 'Шереметьево' }, { val: 'DME', text: 'Домодедово' }]
                                },
                                {
                                    elem: 'control',
                                    name: 'mode',
                                    label: 'Расписание:',
                                    val : "dep",
                                    options : [{ val : "dep", text : 'Вылеты' }, { val : "arr", text : 'Прилеты' }]
                                },
                                {
                                    block : 'spin',
                                    mods : { theme : 'islands', size : 'm', visible : false }
                                }
                            ]
                        },
                        {
                            block: 'grid',
                            mods: { empty: 'yes' },
                            mix: [
                                { block: 'grid', mods: { size: 'md' } },
                                { block: 'grid', mods: { size: 'sm' } }
                            ],
                            js: true
                        }
                    ]
                }
            ]
        }
    ]
};
