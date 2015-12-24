/**
 * @jsx React.DOM
 */
/*global define:true */
define(['react', 'reactDom', 'router', 'jsx!components/board', 'jsx!components/stats'], function (React, ReactDom, ReactRouter, Board, Stats) {
    'use strict';
    var App,
        Route = ReactRouter.Route,
        Link = ReactRouter.Link,
        Router = ReactRouter.Router;
    App = React.createClass({
        render: function () {
            return (
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/board" activeClassName='active'>Board</Link>
                            </li>
                            <li>
                                <Link to="/stats" activeClassName='active' >Stats</Link>
                            </li>
                        </ul>

                    </nav>
                {this.props.children}
                </div>
            )
        }
    });
    function render(containerId) {
        return ReactDom.render(
            <Router>
                <Route name="root" path="/" component={App}>
                    <Route name="board" path="board" component={Board} />
                    <Route name="stats" path="stats" component={Stats} />
                </Route>
            </Router>, document.getElementById(containerId));

    }

    return render;
});