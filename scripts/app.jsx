define(['react','reactDom','router','jsx!board','jsx!stats'],function(React,ReactDom,Router,Board,Stats){
    var App = React.createClass({
        render:function(){
            console.log(this.props);
            return (
                <nav>
                    <ul>
                        <li><Router.Link to="/board">Board</Router.Link></li>
                        <li><Router.Link to="/stats">Inbox</Router.Link></li>
                    </ul>
                {this.props.children}
                </nav>
            )
        }
    });
    function render(containerId) {
        return ReactDom.render(<Router.Router>
            <Router.Route path="/" component={App}>
                <Router.Route path="board" component={Board} />
                <Router.Route path="stats" component={Stats} />
            </Router.Route>
        </Router.Router>, document.getElementById(containerId));

    }
    return render;
});