modules.define('grid__cell_format_airline', ['i-bem__dom', 'jquery', 'bh'], function (provide, BEMDOM, $, bh) {

    provide(
        BEMDOM.decl(
            this.name, {
                onSetMod: {
                    'js': {
                        'inited': function () {

                            var block = this.findBlockOutside('grid');

                            if (block == null) {
                                return;
                            }

                            var popup = block.findBlockInside({block: 'popup', modName: 'target', modVal: 'anchor'});

                            this.domElem.bind('mouseenter', function () {

                                var airlineName = $(this).data('bem').grid__cell_format_airline.name;

                                popup.setMod('target', 'anchor');
                                popup.setAnchor($(this));
                                popup.setContent(bh.apply([
                                    {
                                        tag: 'span',
                                        content: airlineName
                                    }
                                ]));

                                popup.setMod('visible', true);
                            });

                            this.domElem.bind('mouseleave', function () {
                                popup.setMod('visible', false);
                            });
                        }
                    }
                }
            }
        )
    );
});
