/**
 * @jsx React.DOM
 */
define(['react','text!../stats.json'], function(React,stats){
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
            console.log(JSON.parse(stats));
            return {

                stats:  JSON.parse(stats)
            };
        },
        render: function(){
            return (
                <div id="stats">
                    <div id="board" >{ this.state.stats.map(function(stat,idx){
                        return (
                            <div key={idx}>
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
