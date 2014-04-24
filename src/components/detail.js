/** @jsx React.DOM */
var Detail = React.createClass({
	render: function() {
		return (
			<div className="listFrame">
				<div className="places">
					<div className="detail">
						<a href="#places">Zpet</a>
						<h1>{this.props.data[0].name}</h1>
						<img src="http://www.duocamp.cz/anything/images/31-kemp-duo-camp-branzez.jpg" />
						<p className="description">{this.props.data[0].description}</p>
						<div className="www"><a href="#">{this.props.data[0].www}</a></div>
						<div className="address">{this.props.data[0].address}</div>
					</div>
				</div>
			</div>
		);
	}
}); 