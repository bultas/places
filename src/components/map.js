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

	  var infowindow = new google.maps.InfoWindow();

	  // add new markers
	  points.forEach( (function( point ) {

	    var location = new google.maps.LatLng( point.latitude , point.longitude );

	    var marker = new google.maps.Marker({
	      position: location,
	      map: map,
	      // animation: google.maps.Animation.DROP,
	      title: point.name
	    });

	    var contentString = "<h3><a href='#places/" + point.id + "'>" + point.name + "</a></h3><img width='200px' src='" + point.img + "'></span>";

	    // Map Window events
	    Map.makeInfoWindowEvent(map, infowindow, contentString, marker);

	    markers.push( marker );

	  }) );

	  this.setState( { markers : markers });
	},
	statics: {
		makeInfoWindowEvent: function(map, infowindow, contentString, marker) {
			google.maps.event.addListener(marker, 'click', function() {
			    infowindow.setContent(contentString);
			    infowindow.open(map, marker);
			});
		}
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