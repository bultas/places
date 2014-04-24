/** @jsx React.DOM */
var Item = React.createClass({
	render: function() {
		return (
			<div className="place">
				<h2><a href={"#places/" + this.props.id}>{this.props.name}</a></h2>
				<div className="grid">
					<div className="image col-1-4">
						<img src={this.props.img} />
					</div>
					<div className="col-3-4">
						<p className="description">{this.props.description}</p>
						<div className="address">{this.props.address}</div>
					</div>	
				</div>			
			</div>
		);
	}
}); 