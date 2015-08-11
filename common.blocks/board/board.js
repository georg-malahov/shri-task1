modules.define(
	'board',
	['i-bem__dom', 'jquery', 'api__airport-status', 'objects'],
	function(provide, BEMDOM, $, AirportStatusClass, Objects) {
		provide(BEMDOM.decl(this.name, {
			onSetMod: {
				'js': {
					'inited': function() {
						var _self = this,
							controlsBlock = this.findBlockInside('controls'),
							params = controlsBlock.getValues(),
							spinBlock = this.findBlockInside('spin'),
							gridBlock = this.findBlockInside('grid'),
							AirportStatus = new AirportStatusClass(params);

						AirportStatus.on("loading", function () {
							spinBlock.setMod('visible', true);
							gridBlock.setMod('loading', true);
						});

						AirportStatus.on("complete", function () {
							spinBlock.setMod('visible', false);
							gridBlock.setMod('loading', false);
						});

						function getAirportStatus (params) {
							AirportStatus.get(params).done(function (data) {
								gridBlock.update(null, Objects.extend(data, AirportStatus.getParams()));
							});
						}

						getAirportStatus();

						controlsBlock.on('change', function (e, params) {
							_self.scrollToDocStart(function () {
								getAirportStatus(params);
							});
						});
					}
				}
			},
			scrollToDocStart: function (onComplete) {
				this.findBlockOutside('page').domElem.animate({ scrollTop: 0 }, {
					duration: 600,
					complete: onComplete
				});
			},
			bindToDocScroll: function () {
				var controlsBlock = this.findBlockInside('controls').domElem,
					gridHead = this.findBlockInside('grid').findElem('head'),
					gridContent = this.findBlockInside('grid').findElem('content');
				this.bindToDoc('scroll', function (e) {
					var documentScrollTop = $(e.target).scrollTop(),
						scrollDist = 30;
					gridHead.toggleClass('grid__head_scrolled', documentScrollTop > scrollDist);
					gridContent.toggleClass('grid__content_scrolled', documentScrollTop > scrollDist);
					gridContent.toggleClass('grid__content_scrolled', documentScrollTop > scrollDist);
					controlsBlock.toggleClass('controls_scrolled', documentScrollTop > scrollDist);
				});
			},
			unbindFromDocScroll: function () {
				this.unbindFromDoc('scroll');
			}
		}));
	}
);