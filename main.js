const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [0, 0],
    zoom: 2.5,
    pitch: 0, /*Norte arriba*/
    bearing: 0 /*evita inclinación 3D como vista de avión*/
});

map.addControl(new maplibregl.NavigationControl());

map.on('style.load', () => {
    map.setProjection({ type: 'globe' });

    map.dragPan.enable();
    map.scrollZoom.enable();
    map.dragRotate.enable();

    ['geolines-label', 'countries-label'].forEach(id => {
        if (map.getLayer(id)) {
            map.setLayoutProperty(id, 'visibility', 'none');
        }
    });

    map.setPaintProperty('background', 'background-color', '#f19aab');

    map.setPaintProperty('countries-fill', 'fill-color', '#0d0d0d');

    map.setPaintProperty('countries-boundary', 'line-color', '#222222');
    map.setPaintProperty('countries-boundary', 'line-width', 0.5);

    map.setPaintProperty('coastline', 'line-color', '#111111');
    map.setPaintProperty('coastline', 'line-width', 0.5);

    if (map.getLayer('geolines')) {
        map.setLayoutProperty('geolines', 'visibility', 'none');
    }

    if (map.getLayer('crimea-fill')) {
        map.setLayoutProperty('crimea-fill', 'visibility', 'none');
    }
    
});