document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -2,
        maxZoom: 2
    });
    
    var bounds = [[0,0], [3456,3456]];
    var image = L.imageOverlay('ssefmap.png', bounds).addTo(map);
    map.fitBounds(bounds);
});