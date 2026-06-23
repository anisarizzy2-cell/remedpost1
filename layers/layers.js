var wms_layers = [];


        var lyr_Positronnolabelsretina_0 = new ol.layer.Tile({
            'title': 'Positron [no labels] (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_BatasAdministrasi_1 = new ol.format.GeoJSON();
var features_BatasAdministrasi_1 = format_BatasAdministrasi_1.readFeatures(json_BatasAdministrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasi_1.addFeatures(features_BatasAdministrasi_1);
var lyr_BatasAdministrasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasi_1, 
                style: style_BatasAdministrasi_1,
                popuplayertitle: 'Batas Administrasi',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasi_1.png" /> Batas Administrasi'
            });
var format_JalanKotaBatu_2 = new ol.format.GeoJSON();
var features_JalanKotaBatu_2 = format_JalanKotaBatu_2.readFeatures(json_JalanKotaBatu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKotaBatu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKotaBatu_2.addFeatures(features_JalanKotaBatu_2);
var lyr_JalanKotaBatu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKotaBatu_2, 
                style: style_JalanKotaBatu_2,
                popuplayertitle: 'Jalan Kota Batu',
                interactive: true,
                title: '<img src="styles/legend/JalanKotaBatu_2.png" /> Jalan Kota Batu'
            });
var format_Jangkauan15km_3 = new ol.format.GeoJSON();
var features_Jangkauan15km_3 = format_Jangkauan15km_3.readFeatures(json_Jangkauan15km_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jangkauan15km_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jangkauan15km_3.addFeatures(features_Jangkauan15km_3);
var lyr_Jangkauan15km_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jangkauan15km_3, 
                style: style_Jangkauan15km_3,
                popuplayertitle: 'Jangkauan 1,5 km',
                interactive: true,
                title: '<img src="styles/legend/Jangkauan15km_3.png" /> Jangkauan 1,5 km'
            });
var format_BatasJangkauan_4 = new ol.format.GeoJSON();
var features_BatasJangkauan_4 = format_BatasJangkauan_4.readFeatures(json_BatasJangkauan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasJangkauan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasJangkauan_4.addFeatures(features_BatasJangkauan_4);
var lyr_BatasJangkauan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasJangkauan_4, 
                style: style_BatasJangkauan_4,
                popuplayertitle: 'Batas Jangkauan',
                interactive: true,
                title: '<img src="styles/legend/BatasJangkauan_4.png" /> Batas Jangkauan'
            });
var format_AreayangTerjangkau_5 = new ol.format.GeoJSON();
var features_AreayangTerjangkau_5 = format_AreayangTerjangkau_5.readFeatures(json_AreayangTerjangkau_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreayangTerjangkau_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreayangTerjangkau_5.addFeatures(features_AreayangTerjangkau_5);
var lyr_AreayangTerjangkau_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreayangTerjangkau_5, 
                style: style_AreayangTerjangkau_5,
                popuplayertitle: 'Area yang Terjangkau',
                interactive: true,
                title: '<img src="styles/legend/AreayangTerjangkau_5.png" /> Area yang Terjangkau'
            });
var format_TitikRumahSakit_6 = new ol.format.GeoJSON();
var features_TitikRumahSakit_6 = format_TitikRumahSakit_6.readFeatures(json_TitikRumahSakit_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikRumahSakit_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikRumahSakit_6.addFeatures(features_TitikRumahSakit_6);
var lyr_TitikRumahSakit_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikRumahSakit_6, 
                style: style_TitikRumahSakit_6,
                popuplayertitle: 'Titik Rumah Sakit',
                interactive: true,
    title: 'Titik Rumah Sakit<br />\
    <img src="styles/legend/TitikRumahSakit_6_0.png" /> RS Baptis Batu<br />\
    <img src="styles/legend/TitikRumahSakit_6_1.png" /> RS Bhayangkara Hasta Brata<br />\
    <img src="styles/legend/TitikRumahSakit_6_2.png" /> RS Punten<br />\
    <img src="styles/legend/TitikRumahSakit_6_3.png" /> RSIA Haji<br />\
    <img src="styles/legend/TitikRumahSakit_6_4.png" /> RSU Dr. Etty Asharto Batu<br />\
    <img src="styles/legend/TitikRumahSakit_6_5.png" /> RSUD Karsa Husada<br />' });

lyr_Positronnolabelsretina_0.setVisible(true);lyr_BatasAdministrasi_1.setVisible(true);lyr_JalanKotaBatu_2.setVisible(true);lyr_Jangkauan15km_3.setVisible(true);lyr_BatasJangkauan_4.setVisible(true);lyr_AreayangTerjangkau_5.setVisible(true);lyr_TitikRumahSakit_6.setVisible(true);
var layersList = [lyr_Positronnolabelsretina_0,lyr_BatasAdministrasi_1,lyr_JalanKotaBatu_2,lyr_Jangkauan15km_3,lyr_BatasJangkauan_4,lyr_AreayangTerjangkau_5,lyr_TitikRumahSakit_6];
lyr_BatasAdministrasi_1.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_JalanKotaBatu_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'crossing_m': 'crossing_m', 'crossing': 'crossing', 'sport': 'sport', 'indoor': 'indoor', 'destinatio': 'destinatio', 'toilets': 'toilets', 'parking_la': 'parking_la', 'footway': 'footway', 'est_width': 'est_width', 'surface_no': 'surface_no', 'name_id': 'name_id', 'junction_r': 'junction_r', 'structure': 'structure', 'descriptio': 'descriptio', 'barrier': 'barrier', 'tunnel': 'tunnel', 'covered': 'covered', 'sidewalk': 'sidewalk', 'not_name': 'not_name', 'motorroad': 'motorroad', 'ford': 'ford', 'noname': 'noname', 'moped': 'moped', 'mofa': 'mofa', 'ramp_wheel': 'ramp_wheel', 'ramp_lugga': 'ramp_lugga', 'handrail': 'handrail', 'wheelchair': 'wheelchair', 'incline': 'incline', 'lit': 'lit', 'smoothness': 'smoothness', 'oneway_mot': 'oneway_mot', 'toll': 'toll', 'operator': 'operator', 'minspeed': 'minspeed', 'int_ref': 'int_ref', 'short_name': 'short_name', 'comment': 'comment', 'noexit': 'noexit', 'import': 'import', 'truck': 'truck', 'junction': 'junction', 'destinat_1': 'destinat_1', 'destinat_2': 'destinat_2', 'service': 'service', 'amenity': 'amenity', 'shoulder': 'shoulder', 'motorcycle': 'motorcycle', 'motorcar': 'motorcar', 'maxspeed': 'maxspeed', 'alt_name': 'alt_name', 'foot': 'foot', 'bicycle': 'bicycle', 'motor_vehi': 'motor_vehi', 'width': 'width', 'man_made': 'man_made', 'oneway_con': 'oneway_con', 'horse': 'horse', 'access': 'access', 'lane_marki': 'lane_marki', 'reg_ref': 'reg_ref', 'designatio': 'designatio', 'layer': 'layer', 'bridge': 'bridge', 'name_etymo': 'name_etymo', 'name_ety_1': 'name_ety_1', 'tracktype': 'tracktype', 'lanes': 'lanes', 'surface': 'surface', 'ref': 'ref', 'oneway': 'oneway', 'name': 'name', });
lyr_Jangkauan15km_3.set('fieldAliases', {'Rumah Saki': 'Rumah Saki', 'Alamat': 'Alamat', 'x': 'x', 'y': 'y', 'type': 'type', 'start': 'start', 'area': 'area', 'perimeter': 'perimeter', });
lyr_BatasJangkauan_4.set('fieldAliases', {'Rumah Saki': 'Rumah Saki', 'Alamat': 'Alamat', 'x': 'x', 'y': 'y', 'type': 'type', 'start': 'start', 'area': 'area', 'perimeter': 'perimeter', });
lyr_AreayangTerjangkau_5.set('fieldAliases', {'Rumah Saki': 'Rumah Saki', 'Alamat': 'Alamat', 'x': 'x', 'y': 'y', 'type': 'type', 'start': 'start', });
lyr_TitikRumahSakit_6.set('fieldAliases', {'Rumah Saki': 'Rumah Saki', 'Alamat': 'Alamat', 'x': 'x', 'y': 'y', 'Foto': 'Foto', });
lyr_BatasAdministrasi_1.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_JalanKotaBatu_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'crossing_m': 'TextEdit', 'crossing': 'TextEdit', 'sport': 'TextEdit', 'indoor': 'TextEdit', 'destinatio': 'TextEdit', 'toilets': 'TextEdit', 'parking_la': 'TextEdit', 'footway': 'TextEdit', 'est_width': 'TextEdit', 'surface_no': 'TextEdit', 'name_id': 'TextEdit', 'junction_r': 'TextEdit', 'structure': 'TextEdit', 'descriptio': 'TextEdit', 'barrier': 'TextEdit', 'tunnel': 'TextEdit', 'covered': 'TextEdit', 'sidewalk': 'TextEdit', 'not_name': 'TextEdit', 'motorroad': 'TextEdit', 'ford': 'TextEdit', 'noname': 'TextEdit', 'moped': 'TextEdit', 'mofa': 'TextEdit', 'ramp_wheel': 'TextEdit', 'ramp_lugga': 'TextEdit', 'handrail': 'TextEdit', 'wheelchair': 'TextEdit', 'incline': 'TextEdit', 'lit': 'TextEdit', 'smoothness': 'TextEdit', 'oneway_mot': 'TextEdit', 'toll': 'TextEdit', 'operator': 'TextEdit', 'minspeed': 'TextEdit', 'int_ref': 'TextEdit', 'short_name': 'TextEdit', 'comment': 'TextEdit', 'noexit': 'TextEdit', 'import': 'TextEdit', 'truck': 'TextEdit', 'junction': 'TextEdit', 'destinat_1': 'TextEdit', 'destinat_2': 'TextEdit', 'service': 'TextEdit', 'amenity': 'TextEdit', 'shoulder': 'TextEdit', 'motorcycle': 'TextEdit', 'motorcar': 'TextEdit', 'maxspeed': 'TextEdit', 'alt_name': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'motor_vehi': 'TextEdit', 'width': 'TextEdit', 'man_made': 'TextEdit', 'oneway_con': 'TextEdit', 'horse': 'TextEdit', 'access': 'TextEdit', 'lane_marki': 'TextEdit', 'reg_ref': 'TextEdit', 'designatio': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'name_etymo': 'TextEdit', 'name_ety_1': 'TextEdit', 'tracktype': 'TextEdit', 'lanes': 'TextEdit', 'surface': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', });
lyr_Jangkauan15km_3.set('fieldImages', {'Rumah Saki': 'TextEdit', 'Alamat': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_BatasJangkauan_4.set('fieldImages', {'Rumah Saki': 'TextEdit', 'Alamat': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_AreayangTerjangkau_5.set('fieldImages', {'Rumah Saki': 'TextEdit', 'Alamat': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_TitikRumahSakit_6.set('fieldImages', {'Rumah Saki': 'TextEdit', 'Alamat': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_BatasAdministrasi_1.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', });
lyr_JalanKotaBatu_2.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'crossing_m': 'hidden field', 'crossing': 'hidden field', 'sport': 'hidden field', 'indoor': 'hidden field', 'destinatio': 'hidden field', 'toilets': 'hidden field', 'parking_la': 'hidden field', 'footway': 'hidden field', 'est_width': 'hidden field', 'surface_no': 'hidden field', 'name_id': 'hidden field', 'junction_r': 'hidden field', 'structure': 'hidden field', 'descriptio': 'hidden field', 'barrier': 'hidden field', 'tunnel': 'hidden field', 'covered': 'hidden field', 'sidewalk': 'hidden field', 'not_name': 'hidden field', 'motorroad': 'hidden field', 'ford': 'hidden field', 'noname': 'hidden field', 'moped': 'hidden field', 'mofa': 'hidden field', 'ramp_wheel': 'hidden field', 'ramp_lugga': 'hidden field', 'handrail': 'hidden field', 'wheelchair': 'hidden field', 'incline': 'hidden field', 'lit': 'hidden field', 'smoothness': 'hidden field', 'oneway_mot': 'hidden field', 'toll': 'hidden field', 'operator': 'hidden field', 'minspeed': 'hidden field', 'int_ref': 'hidden field', 'short_name': 'hidden field', 'comment': 'hidden field', 'noexit': 'hidden field', 'import': 'hidden field', 'truck': 'hidden field', 'junction': 'hidden field', 'destinat_1': 'hidden field', 'destinat_2': 'hidden field', 'service': 'hidden field', 'amenity': 'hidden field', 'shoulder': 'hidden field', 'motorcycle': 'hidden field', 'motorcar': 'hidden field', 'maxspeed': 'hidden field', 'alt_name': 'hidden field', 'foot': 'hidden field', 'bicycle': 'hidden field', 'motor_vehi': 'hidden field', 'width': 'hidden field', 'man_made': 'hidden field', 'oneway_con': 'hidden field', 'horse': 'hidden field', 'access': 'hidden field', 'lane_marki': 'hidden field', 'reg_ref': 'hidden field', 'designatio': 'hidden field', 'layer': 'hidden field', 'bridge': 'hidden field', 'name_etymo': 'hidden field', 'name_ety_1': 'hidden field', 'tracktype': 'hidden field', 'lanes': 'hidden field', 'surface': 'hidden field', 'ref': 'hidden field', 'oneway': 'hidden field', 'name': 'hidden field', });
lyr_Jangkauan15km_3.set('fieldLabels', {'Rumah Saki': 'hidden field', 'Alamat': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', 'area': 'hidden field', 'perimeter': 'hidden field', });
lyr_BatasJangkauan_4.set('fieldLabels', {'Rumah Saki': 'hidden field', 'Alamat': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', 'area': 'hidden field', 'perimeter': 'hidden field', });
lyr_AreayangTerjangkau_5.set('fieldLabels', {'Rumah Saki': 'hidden field', 'Alamat': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', });
lyr_TitikRumahSakit_6.set('fieldLabels', {'Rumah Saki': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'x': 'hidden field', 'y': 'hidden field', 'Foto': 'inline label - always visible', });
lyr_TitikRumahSakit_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});