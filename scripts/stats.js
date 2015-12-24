/**
 * Created by ivan on 12/24/15.
 */
/*global define:true*/
define(['text!../stats.json'], function (data) {
    'use strict';
    function Stats() {
        var self = this,
            stats;
        //
        //Initialization of internal stats
        stats = (function () {
            try {
                return JSON.parse(data);
            } catch (e) {
                return [];
            }
        }());
        /**
         * Getter
         */
        self.getStats = function () {
            return stats;
        };
        /**
         * @function addEntry
         * @description Adds endgame entry
         * @param winner
         */
        self.addEntry = function (winner) {
            var d = new Date(),
                datestring = d.getDate()  + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

            stats.push({
                winner: winner || 'Draw',
                played: datestring
            });
        };
    }
    return new Stats();
});