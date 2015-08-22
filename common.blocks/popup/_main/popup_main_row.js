modules.define('popup', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $, Popup) {

        provide(
            Popup.decl({
                    modName: 'main',
                    modVal: 'row'
                }, {
                    onSetMod: {
                        'js': {
                            'inited': function () {
                                this.__base.apply(this, arguments);

                                this.setMod('target', 'position');
                                this.setPosition(0, 0);
                            }
                        },
                        'visible': {
                            'true': function () {
                                this.__base.apply(this, arguments);

                                this.bindTo('click', function (e) {
                                    //Do nothing if popup content clicked.
                                    if (!$(e.target).hasClass('popup_main_row')) {
                                        return;
                                    }
                                    //Close popup if it was clicked.
                                    this.setMod('visible', false);
                                });
                            },
                            '': function () {
                                this.__base.apply(this, arguments);

                                this.unbindFrom('click')
                            }
                        }
                    }
                }
            )
        );

    }
);
