/** @jsx React.DOM */
var List = React.createClass({
	render: function() {
		var Items = this.props.data.map(function (place) {
			return (
				<Item 
					name={place.name}
					www={place.www}
					address={place.address} 
					description={place.description} />
			);
		});
		return (
			<div className="places">
				{Items}
			</div>
		);
	}
}); 

var Item = React.createClass({
	render: function() {
		return (
			<div className="place">
				<h2>{this.props.name}</h2>
				<div className="description">{this.props.description}</div>
				<div className="www"><a href="#">{this.props.www}</a></div>
				<div className="adress">{this.props.address}</div>
			</div>
		);
	}
}); 