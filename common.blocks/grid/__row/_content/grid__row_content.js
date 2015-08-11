modules.define('grid__row_content', ['i-bem__dom', 'jquery', 'bh'], function(provide, BEMDOM, $, bh) {

	provide(BEMDOM.decl(this.name, {
		onSetMod : {
			'js' : {
				'inited' : function() {
					var block = this.findBlockOutside('grid'),
						popup = block.findBlockInside({ block: 'popup' });

					this.domElem.bind('click', function () {
						var rowData = JSON.parse($(this).attr('data-bem')).grid__row_content.data;
						popup.setContent(bh.apply({
							block: 'popup',
							elem: 'content',
							mods: { main: 'row' },
							data: rowData
						}));
						popup.setMod('visible', true);
					});
				}
			}
		}
	}));

});
