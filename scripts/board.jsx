/**
 * @jsx React.DOM
 */
define(['react', 'reactDom'], function(React,ReactDom){
    var dimm =3,
        moves = {
            X:'X',
            O:'O'
        };
    var Board = React.createClass({
        playerMove: function(position){
            this.turn = !this.turn;
            this.state.cells[position].value = this.turn ? moves.X : moves.O;
            console.log(this.checkState());
            this.setState({tiles: this.state.cells, turn: this.turn});

        },
        checkState : function(){
            var win = false,
                last,
                beginRow,
                consequetive;
            this.state.cells.forEach(function(cell){
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
        },
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
    var Cell = React.createClass({
        render: function(){
            return (
                <div className={this.props.value === moves.X ? "cell cell-x" : "cell cell-o"} onClick={this.clickHandler}>{this.props.value}</div>
            );
        },
        clickHandler:function(){

            if(!this.props.value){
                this.props.playerMove(this.props.position);
            }

        }
    });
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
