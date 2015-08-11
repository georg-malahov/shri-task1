modules.define('grid__cell_format_airline', ['i-bem__dom', 'jquery', 'bh'], function(provide, BEMDOM, $, bh) {

	provide(BEMDOM.decl(this.name, {
		onSetMod : {
			'js' : {
				'inited' : function() {
					var block = this.findBlockOutside('grid'),
						popup = block.findBlockInside({ block: 'popup' });

					this.domElem.bind('click', function () {
						var rowData = JSON.parse($(this).attr('data-bem')).grid__row_content.data;
						popup.setMod('target', 'position');
						popup.setMod('row', true);
						popup.setPosition(0, 0);
						popup.bindTo('click', function (e) {
							if ($(e.target).parents('.popup-content').length) {
								return;
							}
							popup.setMod('visible', false);
						});
						popup.setContent(bh.apply({
							block: 'popup-content',
							mods: { main: true },
							data: rowData
						}));
						popup.setMod('visible', true);
					});
				}
			}
		}
	}));

});
