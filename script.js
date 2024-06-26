document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -2,
        maxZoom: 3
    });
    
    var bounds = [[0,0], [3456,3456]];
    var image = L.svgOverlay(document.querySelector("#svgmap"), bounds).addTo(map);
    map.fitBounds(bounds);
});