/**
 * @jsx React.DOM
 */
define(['react', 'reactDom'], function(React,ReactDom){
    var dimm =3;
    var Board = React.createClass({
        playerMove: function(position){
            this.turn = !this.turn;
            this.state.cells[position].value = this.turn ? "X" : "O";
            this.setState({tiles: this.state.cells});

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
                <div id="board" >{ this.state.cells.map(function(cell){
                    return (
                        <Cell position={cell.id} value={cell.value} playerMove={this.playerMove}/>
                    );
                }, this) }
                </div>
                    <Menu/>
                </div>

            );
        }
    });
    var Cell = React.createClass({
        render: function(){
            return (
                <div className="cell" onClick={this.clickHandler}>{this.props.value}</div>
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
                <div id="menu"></div>
            );
        }
    });
    ReactDom.render(<Board name="Board" />, document.getElementById('mount-point'));

});
