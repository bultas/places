/** @jsx React.DOM */
var Places = React.createClass({
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
	componentWillReceiveProps: function(props) {
		if (props.id) {
			var place = [];
			place[0] = this.state.data[props.id-1];
			this.replaceState({data: place});
		} else {
			$.ajax({
				url: props.url,
				dataType: 'json',
				success: function(data) {
					this.setState({data: data});				
				}.bind(this),
				error: function(xhr, status, err) {
					console.error(this.props.url, status, err.toString());
				}.bind(this)
			});
		}
	},
	render: function() {
		if (this.state.data.length != 1) {
			return (
				<div className="app">
					<Header />
					<div className="grid">
						<div id="map" className="col-1-2 map">
							<Map latitude={49.817492} longitude={15.472962} zoom={7} points={this.state.data} width={"100%"} height={document.body.clientHeight} gmaps_api_key="AIzaSyDVva2wfbJVw70rPm_2XYLl76WVS9W63Zc" />
						</div>
						<div className="col-1-2 list">
							<List data={this.state.data} />
						</div>
					</div>
				</div>

			);
		} else {
			return(
				<div className="app">
					<Header />
					<div className="grid">
						<div id="map" className="col-1-2 map">
							<Map latitude={this.state.data[0].latitude} longitude={this.state.data[0].longitude} zoom={10} points={this.state.data} width={"100%"} height={document.body.clientHeight} />
						</div>
						<div className="col-1-2 list">
							<Detail data={this.state.data} />
						</div>
					</div>
				</div>
			);
		}
		
	}
});