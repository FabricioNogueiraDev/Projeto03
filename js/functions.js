window.onload = function(){
    
    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-27.648598,-48.577423),
            scrollWheel: false,
            zoom: 12,
            mapTypeId:google.maps.MapTypeId.ROADMAP};

        map = new google.maps.Map(document.getElementById("mapa"), mapProp)
    };

    function addMarker(lat,long,icon,content){
            var latlng = {'lat':lat,'lng':long};

            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                icon: icon
            });

            var infoWindow = new google.maps.infoWindow({
                content: ontent,
                maxWidth: 200,
                pixeloffset: new google.maps.Size(0,20)
            });

            infoWindow.open(mano,marker)};
 
    initialize();

}