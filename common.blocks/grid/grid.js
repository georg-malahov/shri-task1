modules.define(
	'grid',
	['i-bem__dom', 'jquery', 'bh', 'controls', 'loader_type_js'],
	function(provide, BEMDOM, $, BH, Controls, loader) {
		provide(BEMDOM.decl(this.name, {
			onSetMod: {
				'js': {
					'inited': function() {
						Controls.on("dataLoaded", this.update, this);
					}
				}
			},
			update: function (e, data) {
				this._data = data;
				var processedData = this.processData(data);
				this.setData(processedData);
			},
			processData: function (data) {
				var rows = [],
					row = {},
					statusMap = {
						A: 'Active',
						C: 'Canceled',
						D: 'Diverted',
						DN:	'Data source needed',
						L: 'Landed',
						NO:	'Not Operational',
						R:	'Redirected',
						S:	'Scheduled',
						U:	'Unknown'
					};
				function getAirline (fsCode) {
					var airline = {};
					data.appendix.airlines.forEach(function (item) {
						if (item.fs != fsCode) {
							return;
						}
						airline = item;
					});
					return airline;
				}
				function getAirport (fsCode) {
					var airport = {};
					data.appendix.airports.forEach(function (item) {
						if (item.fs != fsCode) {
							return;
						}
						airport = item;
					});
					return airport;
				}
				function getEquipment (iata) {
					var equipment = {};
					data.appendix.equipments.forEach(function (item) {
						if (item.iata != iata) {
							return;
						}
						equipment = item;
					});
					return equipment;
				}
				data.flightStatuses.forEach(function (item) {
					row = {};
					row.mode = data.mode;
					row.flightNumber = item.flightNumber;
					row.depAirport = getAirport(item.departureAirportFsCode).name;
					row.arrAirport = getAirport(item.arrivalAirportFsCode).name;
					row.airline = getAirline(item.carrierFsCode);
					if (item.flightEquipment) {
						row.equipment = getEquipment(item.flightEquipment.scheduledEquipmentIataCode).name;
					}
					row.depTime = item.departureDate.dateLocal;
					row.arrTime = item.arrivalDate.dateLocal;
					row.status = statusMap[item.status];
					row.delays = item.delays;
					rows.push(row);
				});
				return rows;
			},
			setData: function (data) {
				var _self = this,
					boardBlock = this.findBlockOutside('board');
				boardBlock.unbindFromDocScroll();
				BEMDOM.update(this.domElem,
					BH.apply([
						{
							block: 'grid',
							elem: 'head',
							mode: _self._data.mode
						},
						{
							block: 'grid',
							elem: 'content',
							rows: data
						}
					])
				);
				_self.toggleMod('empty', 'no', 'yes', data.length > 0);
				boardBlock.bindToDocScroll();
			}
		}));
	}
);