mapboxgl.accessToken = 'pk.eyJ1IjoieWFuc3VuMjAyMCIsImEiOiJjazg4dmFsbGcwMGcwM2xxc2Zla21zZG91In0.Kkqjs0MWxmSEeqe7yO-k5g';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/yansun2020/ckf2kxi8x4l7a19mu0nvu69qm',
    zoom: 10,
    center: [118.786, 32.044],
    maxZoom:15,
    minZoom:10, 
    maxBounds: [[118.46,31.86], [119.09,32.20]]
});



map.on('load', function () {
    var layers = map.getStyle().layers;
    var firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            break;
        }
    }
    map.addLayer({
        'id': 'NJmemory',
        'type': 'circle', 
        'source': {
            'type': 'geojson',
            'data': 'data/NJmemory.geojson'
        },
        'paint': {
            'circle-color': ['match',['get', 'Type1'],
            'B','#44e9b0',
            'S','#e95d44',
            'F','#e9d944',
            'M','#447de9',
            /* other */ '#e95d44'
             ],
            'circle-stroke-color': '#4d4d4d',
            'circle-stroke-width': 0.5,
            'circle-radius': 7
            }
    }, firstSymbolId);
});

map.on ('click','NJmemory',function (e){
    var Name = e.features[0].properties.Name;
    var Type = e.features[0].properties.Type;
    var District = e.features[0].properties.District;
    var Location = e.features[0].properties.Location;
    var Link = e.features[0].properties.Link;
        new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<h4><b>' + Name + '</b></h4>'
            + '<b>Type:</b> ' + Type + '<br>'
            + '<b>District:</b> ' + District + '<br>'
            + '<b>Location:</b> ' + Location+ '<br>' 
            + '<b>Link:</b> ' + Link+ '<br>' )
        .addTo(map);
});
map.on('mouseenter', 'NJmemory', function () {
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'NJmemory', function () {
    map.getCanvas().style.cursor = '';
});

function setImg(w, h){
    var imgList = document.getElementsByName("img");
    for(var i=0;i<imgList.lenght;i++){
         if(imgList[i].width>w || imgList[i].height>h){
            imgList[i].width = w;
            imgList[i].height = h;
        }
    }
}
setImg(100,50);

var toggleableLayerIds = ['Produce in NYC By SunYan'];

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

    link.onclick = function(e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}
