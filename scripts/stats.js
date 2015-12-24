/**
 * Created by ivan on 12/24/15.
 */
define(['text!../stats.json'],function(data){
    function Stats(){
        var self = this,
            subscribers = [],
            stats;

        stats = (function(){
            try{
                return JSON.parse(data);
            }
            catch(e){
                return [];
            }
        }());

        self.getStats = function(){
            return stats;
        };

        self.addEntry = function(winner){
            var date = new Date(),
                datestring = d.getDate()  + "/" + (d.getMonth()+1) + "/" + d.getYear();
                stats.push({
                    winner:winner,
                    played:datestring
                });
                notifySubscribers(stats);
        };

        function notifySubscribers(stats) {
            subscribers.forEach(function(callback){
               callback.call(null,stats);
            });
        }

        self.subscribeForChange = function(callback){
            if(subscribers.indexOf(callback) === -1) {
                subscribers.push(callback);
            }
        };
    }
    return new Stats();
});