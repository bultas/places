/** @jsx React.DOM */
var App = React.createClass({
	getInitialState: function() {
		return {data: []};
	},
	componentWillMount: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	render: function() {
		return (

				<div className="grid">
					<div className="col-1-2 map">
						<Map latitude={49.817492} longitude={15.472962} zoom={7} points={this.state.data} width={"100%"} height={document.body.clientHeight} />
					</div>
					<div className="col-1-2 list">
						<List data={this.state.data} />
					</div>
				</div>

		);
	}
});