/** @jsx React.DOM */
Map = React.createClass({
	getInitialState: function() {
	  return {
	    map : null,
	    markers: []
	  };
	},
	getDefaultProps: function() {
	  return {
	    latitude: 0,
	    longitude: 0,
	    zoom: 4,
	    width: 400,
	    height: 400,
	    points: [],
	  }
	},
	updateMarkers : function(points) {

	  var markers = this.state.markers;
	  var map = this.state.map;

	  // remove everything
	  markers.forEach( function(marker) {
	    marker.setMap(null);
	  } );

	  this.state.markers = [];

	  // add new markers
	  points.forEach( (function( point ) {

	    var location = new google.maps.LatLng( point.latitude , point.longitude );

	    var marker = new google.maps.Marker({
	      position: location,
	      map: map,
	      animation: google.maps.Animation.DROP,
	      title: point.name
	    });

	    markers.push( marker );

	  }) );

	  this.setState( { markers : markers });

	  // add bounced effect
	  // markers.forEach( function(marker) {
	  //   google.maps.event.addListener(marker, 'click', toggleBounce);
	  // } );

	},
	componentDidMount: function() {
		var mapOptions = {
		  center: new google.maps.LatLng(this.props.latitude, this.props.longitude),
		  zoom: this.props.zoom
		};
		var map = new google.maps.Map(this.getDOMNode(), mapOptions);

		this.setState({map: map});
	},
	componentDidUpdate: function() {
		var center = new google.maps.LatLng(this.props.latitude, this.props.longitude);
		var map = this.state.map;
		map.panTo(center);
		map.setZoom(this.props.zoom);
	},
	componentWillReceiveProps: function(props) {
		if( props.points ) this.updateMarkers(props.points);
	},
    render: function () {
    	var style = {
    		width: this.props.width,
    		height: this.props.height
    	};
    	return (
    	    <div id="map-canvas" style={style}></div>
    	);
    }
});