/**
 * @jsx React.DOM
 */
define(['react', 'reactDom'], function(React,ReactDom){
    var dimm =3,
        moves = {
            X:'X',
            O:'O'
        };
    /**
     * @class Board
     * @type {Function|*}
     * @description Provides main game component
     */
    var Board = React.createClass({
        /**
         * @function playerMove
         * @param position
         * @description Handles players move
         */
        playerMove: function(position){
            this.turn = !this.turn;
            this.state.cells[position].value = this.turn ? moves.X : moves.O;
            console.log(this.checkForWin());
            this.setState({tiles: this.state.cells, turn: this.turn});

        },
        /**
         * @function checkForWin
         * @param position
         * @description Checks game situation
         */
        checkForWin : function(){
            var win;
            function checkHorizontals(cells){
                var win = false,
                    last,
                    beginRow,
                    consequetive = 0;
                cells.forEach(function(cell){
                    if((cell.key % dimm) === 0) {
                        beginRow = true;
                    }
                    if(cell.value && cell.value == last ) {
                        consequetive++;
                    } else {
                        consequetive = 0;
                    }
                    if(consequetive === dimm -1 ){
                        win = true;
                        return false;
                    }
                    if((cell.key % dimm) === dimm-1) {
                        beginRow = false;
                        consequetive = 0 ;
                    }
                    last = cell.value;
                });
                return win;
            }
            function checkVerticals(cells){
                var win = false,
                    last,
                    consequetive = 0,
                    i,
                    j,
                    cell;
                for(i=0;i<dimm;i++){
                    for(j=0;j<dimm;j++){
                        cell = cells[i+j*dimm];
                        if(cell.value && cell.value === last)  {
                            consequetive++;
                        } else {
                            consequetive=0;
                        }
                        last = cell.value;
                    }
                    if(consequetive === dimm -1){
                        win = true;
                        break;
                    }
                }
                return win;

            }
            function checkDiagonals(){
            }
            win = checkVerticals(this.state.cells)||checkHorizontals(this.state.cells);

            return win;
        },
        /**
         * initial State for players turn
         */
        turn:true,
        getInitialState: function() {
            var cells = [],
                i;
            for(i=0;i<dimm*dimm;i++){
                cells.push({id:i});
            }
            return {

                cells:  cells
            };
        },
        render: function(){
            return (
                <div id="main-container">
                    <Menu turn={this.turn}/>
                    <div id="board" >{ this.state.cells.map(function(cell){
                        return (
                            <Cell key={cell.id} position={cell.id} value={cell.value} playerMove={this.playerMove}/>
                        );
                    }, this) }
                    </div>
                </div>

            );
        }
    });
    /**
     * @class Cell
     * @type {Function|*}
     * @descrition Component representing one board cell
     */
    var Cell = React.createClass({
        render: function(){
            return (
                <div className={this.props.value === moves.X ? "cell cell-x" : "cell cell-o"} onClick={this.clickHandler}>{this.props.value}</div>
            );
        },
        /**
         * @function clickHandler
         * @descrition Handles user click on cell
         */
        clickHandler:function(){

            if(!this.props.value){
                this.props.playerMove(this.props.position);
            }

        }
    });
    /**
     * @class Menu
     * @type {Function|*}
     * @descrition Component representing game menu
     */
    var Menu = React.createClass({
        render: function(){
            return (
                <div id="menu">
                    <div className={ this.props.turn ? "player active" : "player" }>O</div>
                    <div className={ this.props.turn ? "player" : "player active" }>X</div>
                </div>
            );
        }
    });
    ReactDom.render(<Board name="Board" />, document.getElementById('mount-point'));

});
