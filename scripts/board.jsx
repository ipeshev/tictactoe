/**
 * @jsx React.DOM
 */
define(['react', 'reactDom', 'logic'], function(React,ReactDom, Logic){
    var dimm =Logic.dimm,
        moves = {
            X:Logic.X,
            O:Logic.O
        },
        Board,
        Cell,
        Menu;
    /**
     * @class Board
     * @type {Function|*}
     * @description Provides main game component
     */
    Board = React.createClass({
        /**
         * @function playerMove
         * @param position
         * @description Handles players move
         */
        playerMove: function(position){
            //
            //If we have win or draw , we stop accepting clicks
            if(this.state.win !== false) {
                return;
            }
            var win;
            this.state.cells[position].value = this.state.turn ? moves.O : moves.X ;
            win = this.checkForWin(this.state.cells);
            //
            //Only change turn when we do not have win

            if(win === false) {
                this.state.turn = !this.state.turn;
            }
            this.state.win = win;
            this.setState({tiles: this.state.cells, turn: this.state.turn, win:this.state.win});


        },
        /**
         * @function checkForWin
         * @param position
         * @description Checks game situation
         */
        checkForWin : Logic.checkForWin,
        /**
         * initial State for players turn
         */
        getInitialState: function() {
            var cells = [],
                i;
            for(i=0;i<dimm*dimm;i++){
                cells.push({id:i});
            }
            return {

                cells:  cells,
                turn: true,
                win: false
            };
        },
        render: function(){
            return (
                <div id="main-container">
                    <Menu turn={this.state.turn} win={this.state.win}/>
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
    Cell = React.createClass({
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
    Menu = React.createClass({
        render: function(){
            return (
                <div id="menu" className={ this.props.win === true ? "win" : "" }>

                    <div className={ this.props.turn ? "player active" : "player" }>O</div>
                    <div className={ this.props.turn ? "player" : "player active" }>X</div>
                    <div className={ this.props.win === undefined ? "shown draw" : "hidden draw" }>DRAW</div>
                </div>
            );
        }
    });
    function render(containerId) {
        return ReactDom.render(<Board name="Board" />, document.getElementById(containerId));

    }
    return render;

});
