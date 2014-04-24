/** @jsx React.DOM */
var Header = React.createClass({
	render: function() {
		return (
			<div className="header">
				<ul className="unstyled inline">
					<li><a href="#places"><img src="src/img/logo.png" /></a></li>
					<li className="description">Kempy pro karavany v ČR</li>
				</ul>
			</div>
		);
	}
}); 