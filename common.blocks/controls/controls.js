modules.define(
	'controls',
	['i-bem__dom', 'jquery'],
	function(provide, BEMDOM, $) {
		provide(BEMDOM.decl(this.name, {
			onSetMod: {
				'js': {
					'inited': function() {
						var _self = this;
						this.findBlocksInside('radio-group').forEach(function(block) {
							block.on('change', _self._onRadioChange, _self);
						});
					}
				}
			},
			_onRadioChange: function () {
				var _self = this;
				this.emit('change', _self.getValues());
			},
			getValues: function () {
				var values = {
							airport: this.findBlockInside({ block : 'radio-group', modName : 'name', modVal : 'airport' }).getVal(),
							mode: this.findBlockInside({ block : 'radio-group', modName : 'name', modVal : 'mode' }).getVal()
						};
				return values;
			}
		}));
	}
);