modules.define('api__airport-status', ['jquery', 'inherit', 'events__channels', 'vow', 'objects', 'querystring'],
    function (provide, $, inherit, channels, vow, Objects, querystring) {
        provide(
            inherit({
                __constructor: function (params) {
                    this._params = {};
                    if (Object.prototype.toString.call(params).indexOf('Object') !== -1) {
                        Objects.extend(this._params, params);
                    }
                    this._events = channels(this.name);
                },
                on: function (eventName, handler) {
                    this._events.on(eventName, handler);
                },
                /**
                 *
                 * @param params {Object}
                 * @param {string} params.airport - 'DME' or 'SVO'
                 * @param {string} employee.mode - 'dep' or 'arr'
                 * @returns {Promise}
                 */
                get: function (params) {

                    if (params == null && this._data != null) {
                        return vow.cast(this._data);
                    }

                    if (Object.prototype.toString.call(params).indexOf('Object') !== -1) {
                        Objects.extend(this._params, params);
                    }

                    if (!this._params.airport || !this._params.mode) {
                        return vow.cast();
                    }

                    var _self = this,
                        defer = vow.defer(),
                        promise = defer.promise(),
                        moment = new Date(),
                        url = "https://api.flightstats.com/flex/flightstatus/rest/v2/jsonp/airport/status",
                        params = {
                            appId: "d5e230bb",
                            appKey: "d83a11ada64132698b2b20f4b908762b",
                            includeFlightPlan: false,
                            numHours: 5,
                            maxFlights: 50
                        };

                    if (false && window.airportStatusData != null) { //Try to request ajax. Resolve with saved data on error.
                        _self._events.emit("loading");
                        setTimeout(function () {
                                _self._events.emit("complete");
                                defer.resolve(window.airportStatusData);
                            }, Math.round(Math.random * 2000)
                        );
                    } else {
                        $
                            .ajax({
                                dataType: "jsonp",
                                url: [
                                         url,
                                         this._params.airport,
                                         this._params.mode,
                                         moment.getFullYear(),
                                         moment.getMonth() + 1,
                                         moment.getDate(),
                                         moment.getHours()
                                     ].join("/") + "?" + querystring.stringify(params),
                                beforeSend: function () {
                                    _self._events.emit("loading");
                                }
                            })
                            .done(function (data) {
                                if (data.error) {
                                    return defer.resolve(window.airportStatusData);
                                }
                                defer.resolve(data);
                            })
                            .fail(function (reason) {
                                //If error, resolve with saved data. For demo purposes.
                                //defer.reject(reason);
                                defer.resolve(window.airportStatusData);
                            })
                            .always(function () {
                                _self._events.emit("complete");
                            });
                    }

                    promise.done(function (data) {
                        this._data = data;
                    });

                    return promise;
                },
                getParams: function () {
                    return this._params;
                }
            })
        );
    }
);
