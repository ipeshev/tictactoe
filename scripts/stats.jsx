/**
 * @jsx React.DOM
 */
define(['react'], function(React,stats){
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
        getInitialState: function() {
            return {
                stats:  JSON.parse(stats)
            };
        },
        render: function(){
            return (
                <div id="stats">
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
