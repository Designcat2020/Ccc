 var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}
var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}
function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
}

var story = document.getElementById('story');
var features = document.createElement('div');
features.setAttribute('id', 'features');
var header = document.createElement('div');
var wrapper = document.createElement('div');
wrapper.setAttribute("id", "wrapper");
header.appendChild(wrapper);
if (config.toptitle) {
    var toptitle = document.createElement('h4');
    toptitle.innerText = config.toptitle;
    wrapper.appendChild(toptitle);
}
if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    wrapper.appendChild(titleText);
}
if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.classList.add("byline");
    bylineText.innerText = config.byline;
    wrapper.appendChild(bylineText);
}
if (config.image) {
    var image = new Image();
    image.src = config.image;
    wrapper.appendChild(image);
}

if (config.description) {
    var descriptionText = document.createElement('p');
    descriptionText.innerHTML = config.description;
    wrapper.appendChild(descriptionText);
}
if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
   }

config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    var chapter = document.createElement('div');
        if (record.title) {
        var title = document.createElement('h3');
        title.innerHTML = record.title;
        chapter.appendChild(title);
    }
        if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }
        if (record.imageCredit) {
        var imageCredit = document.createElement('p');
        imageCredit.classList.add('imageCredit');
        imageCredit.innerHTML = 'Image credit: ' + record.imageCredit;
        chapter.appendChild(imageCredit);
    }
        if (record.image2) {
        var image2 = new Image();
        image2.src = record.image2;
        chapter.appendChild(image2);    
        }   
        if (record.imageCredit2) {      
            var imageCredit2 = document.createElement("p");
            imageCredit2.classList.add("imageCredit");
            imageCredit2.innerHTML = "Image credit: " + record.imageCredit2;
            chapter.appendChild(imageCredit2);
        }  
       if (record.source) {
        var source = document.createElement('p');
        source.classList.add('source');
        source.innerHTML = 'Source: ' + record.source;
        chapter.appendChild(source);
    }
        if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }
       if (record.quote) {
        var story = document.createElement('p1');
        story.innerHTML = record.quote;
        chapter.appendChild(story);
    }
        if (record.audio) {
        var story = document.createElement('p');
        story.innerHTML = record.audio;
        chapter.appendChild(story);
    }
        container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }
        chapter.classList.add(config.theme);
        container.appendChild(chapter);
    container.classList.add(alignments[record.alignment]);
    features.appendChild(container);
});
story.appendChild(features);
var footer = document.createElement('div');
if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer + '<br>' + config.footerAttribution;
    footer.appendChild(footerText);
}
if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}
mapboxgl.accessToken = config.accessToken;
const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
    return {
        url: url + suffix
    }
}
var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    scrollZoom: false,
    transformRequest: transformRequest
});
var scroller = scrollama();
map.on('load', function(){
     var layers = map.getStyle().layers;
    var firstSymbolId;
        for (var i = 0; i < layers.length; i++) {
        console.log(layers[i].id);
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            break;
        }
    } 
           map.addLayer({
        'id': '2012result',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/NYS_County_Election_2012.geojson'
        },
            'paint': {
            'fill-color': [
                'match', ['get', 'Winner'],
                'Romney', '#cf635d',
                'Obama', '#6193c7',
                'Other', '#91b66e',
                '#ffffff'
            ],
            'fill-outline-color': '#ffffff',
            'fill-opacity': [
                'step', ['get', 'WnrPerc'],
                0.3, 0.4,
                0.5, 0.5,
                0.7, 0.6,
                0.9
            ]
        }
    });
map.addLayer({
    'id': '2016result',
    'type': 'fill',
    'source': {
        'type': 'geojson',
        'data': 'data/NYS_County_Election_2016_2020.geojson'
    },
        'paint': {
        'fill-color': [
            'match', ['get', 'CHANGE'],
            'R', '#cf635d',
            'DtoR', '#fdbe85',
            'Dd', '#6baed6',
            'Dp', '#08519c',
            '#ffffff' ],
        'fill-outline-color': '#ffffff',
        'fill-opacity': [
            'step', ['get', 'WnrPercr'],
            0.3, 0.4,
            0.5, 0.5,
            0.7, 0.6,
            0.9
        ],'fill-opacity': 0
    }
});
map.addLayer({
    'id': 'Population',
    'type': 'circle',
    'source': {
        'type': 'geojson',
        'data': 'data/NYS_Countries_Density.geojson'
    },
    'paint': {
        'circle-color': ['interpolate', ['linear'], ['get', 'population'],
            50000, '#ffffff',
            450000, '#ffba31',
            3000000, '#ff4400'
        ],
        'circle-stroke-color': '#4d4d4d',
        'circle-stroke-width': 0.5,
        'circle-radius': ['interpolate', ['linear'], ['get', 'population'],
            50000, 3,
            450000, 9,
            3000000,15
        ], 
         'circle-opacity':0,
         'circle-stroke-opacity':0

         },
         });
map.addLayer({
    'id': '2020result',
    'type': 'fill',
    'source': {
        'type': 'geojson',
        'data': 'data/NYS_County_Election_2016_2020.geojson'
    },
        'paint': {
        'fill-color': [
            'match', ['get', 'CHANGE2'],
            'R', '#cf635d',
            'RtoD', '#6baed6',
            'D', '#08519c',
            '#ffffff' ],
        'fill-outline-color': '#ffffff',
        'fill-opacity': [
            'step', ['get', 'WnrPercr'],
            0.3, 0.4,
            0.5, 0.5,
            0.7, 0.6,
            0.9
        ],'fill-opacity': 0
    }
});
map.addLayer({
    'id': 'electionname',
    'type': 'symbol',
    'source': {
        'type': 'geojson',
        'data': 'data/NYS_Countries_Density.geojson'
    },
    'layout': {
        'text-field': ['get', 'NAME'],
        'text-allow-overlap': true,
        'text-anchor': 'top',
        'text-size': 11.5,
         },
    'paint': {
        'text-color': ['match',['get', 'NAME'],
        'Essex','#252525',
        'Rensselaer','#252525',
        'Broome','#252525',
        'Saratoga','#252525',
         /* other */ '#fdbe85'],
        'text-opacity':0
    },
});

  map.addLayer({
    'id': '2020NYC',
    'type': 'fill',
    'source': {
        'type': 'geojson',
        'data': 'data/NYC_election_2020.geojson'
    },
        'paint': {
        'fill-color': [
            'step', ['get', 'pr'],
            '#ffffff',
            0.01,'#cf635d',
            0.15,'#cf635d',
            0.25,'#e66e61',
            0.4, '#f5c1a9',
            0.5, '#b4d6e7',
            0.7,'#63a9cf',
            0.85, '#0571b0',  
        ],
        'fill-opacity': 0}
    },firstSymbolId);

map.addLayer({
    'id': 'ethnity',
    'type': 'fill',
    'source': {
        'type': 'geojson',
        'data': 'data/NYC_census_ethnicity.geojson'
    },
        'paint': {
        'fill-color': ['match',['get','MjrGrp_min'],
            'AfcAme','#8dd3c7',
            'Asian','#bebada',
            'Hisp','#fb8072',
            'White','#ffffb3',
            'OthAln','#0eb5be',
            'TwoMore','#21d0d3',
            '#ffffb3'
        ],'fill-opacity': 0 }
    },"water-shadow");
});

scroller
.setup({
    step: '.step',
    offset: 0.5,
    progress: true
})
.onStepEnter(response => {
    var chapter = config.chapters.find(chap => chap.id === response.element.id);
    response.element.classList.add('active');
    map.flyTo(chapter.location);
    if (config.showMarkers) {
        marker.setLngLat(chapter.location.center);
    }
    if (chapter.onChapterEnter.length > 0) {
        chapter.onChapterEnter.forEach(setLayerOpacity);
    }
})
.onStepExit(response => {
    var chapter = config.chapters.find(chap => chap.id === response.element.id);
    response.element.classList.remove('active');
    if (chapter.onChapterExit.length > 0) {
        chapter.onChapterExit.forEach(setLayerOpacity);
    }

});

window.addEventListener('resize', scroller.resize);