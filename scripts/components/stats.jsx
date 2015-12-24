/**
 * @jsx React.DOM
 */
/*global define:true */
define(['react', 'stats'], function (React, Statistics) {
    'use strict';
    var Stats;
    /**
     * @class Stats
     * @type {Function|*}
     * @description Provides stats component
     */
    Stats = React.createClass({
        /**
         * initial State for players turn
         */
        getInitialState: function () {
            return {
                stats:  Statistics.getStats()
            };
        },
        render: function () {
            return (
                <div>
                    <div>{ this.state.stats.map(function(stat,idx){
                        return (
                            <div key={idx} className="stat-row">
                                {stat.played}:{stat.winner}
                            </div>
                        );
                    }, this) }
                    </div>
                </div>

            );
        }
    });
    return Stats;
});
