/** @jsx React.DOM */
var List = React.createClass({
	render: function() {
		var Items = this.props.data.map(function (place) {
			return (
				<Item
					id={place.id}
					name={place.name}
					img={place.img ? place.img : "http://www.duocamp.cz/anything/images/31-kemp-duo-camp-branzez.jpg"}
					www={place.www}
					address={place.address} 
					description={place.description} />
			);
		});
		return (
			<div className="listFrame">
				<div className="places">
					{Items}
				</div>
			</div>
		);
	}
}); 
