var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_my_data_1 = new ol.format.GeoJSON();
var features_my_data_1 = format_my_data_1.readFeatures(json_my_data_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_my_data_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_my_data_1.addFeatures(features_my_data_1);
var lyr_my_data_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_my_data_1, 
                style: style_my_data_1,
                interactive: true,
                title: '<img src="styles/legend/my_data_1.png" /> my_data'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_my_data_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_my_data_1];
lyr_my_data_1.set('fieldAliases', {'Id': 'Id', 'RasterVal': 'RasterVal', 'RasterVal_': 'RasterVal_', 'Species': 'Species', });
lyr_my_data_1.set('fieldImages', {'Id': 'Range', 'RasterVal': 'Range', 'RasterVal_': 'Range', 'Species': 'TextEdit', });
lyr_my_data_1.set('fieldLabels', {'Id': 'no label', 'RasterVal': 'no label', 'RasterVal_': 'no label', 'Species': 'no label', });
lyr_my_data_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});