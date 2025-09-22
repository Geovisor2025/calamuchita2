var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ClasificacionNoSupervisada_1 = new ol.format.GeoJSON();
var features_ClasificacionNoSupervisada_1 = format_ClasificacionNoSupervisada_1.readFeatures(json_ClasificacionNoSupervisada_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacionNoSupervisada_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacionNoSupervisada_1.addFeatures(features_ClasificacionNoSupervisada_1);
var lyr_ClasificacionNoSupervisada_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacionNoSupervisada_1, 
                style: style_ClasificacionNoSupervisada_1,
                popuplayertitle: 'Clasificacion No Supervisada',
                interactive: false,
    title: 'Clasificacion No Supervisada<br />\
    <img src="styles/legend/ClasificacionNoSupervisada_1_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/ClasificacionNoSupervisada_1_1.png" /> AREA NO CULTIVADA<br />' });
var format_PoligonosProductor_2 = new ol.format.GeoJSON();
var features_PoligonosProductor_2 = format_PoligonosProductor_2.readFeatures(json_PoligonosProductor_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoligonosProductor_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonosProductor_2.addFeatures(features_PoligonosProductor_2);
var lyr_PoligonosProductor_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonosProductor_2, 
                style: style_PoligonosProductor_2,
                popuplayertitle: 'Poligonos Productor',
                interactive: false,
                title: '<img src="styles/legend/PoligonosProductor_2.png" /> Poligonos Productor'
            });
var format_UbicacionProductor_3 = new ol.format.GeoJSON();
var features_UbicacionProductor_3 = format_UbicacionProductor_3.readFeatures(json_UbicacionProductor_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UbicacionProductor_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UbicacionProductor_3.addFeatures(features_UbicacionProductor_3);
cluster_UbicacionProductor_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_UbicacionProductor_3
});
var lyr_UbicacionProductor_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_UbicacionProductor_3, 
                style: style_UbicacionProductor_3,
                popuplayertitle: 'Ubicacion Productor',
                interactive: true,
    title: 'Ubicacion Productor<br />\
    <img src="styles/legend/UbicacionProductor_3_0.png" /> NO_ENCONTRADO<br />\
    <img src="styles/legend/UbicacionProductor_3_1.png" /> VALIDADO<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_ClasificacionNoSupervisada_1.setVisible(true);lyr_PoligonosProductor_2.setVisible(true);lyr_UbicacionProductor_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ClasificacionNoSupervisada_1,lyr_PoligonosProductor_2,lyr_UbicacionProductor_3];
lyr_ClasificacionNoSupervisada_1.set('fieldAliases', {'cod_clas': 'cod_clas', 'SUPER': 'SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', });
lyr_PoligonosProductor_2.set('fieldAliases', {'rowid': 'rowid', 'id_poligono': 'id_poligono', 'cod_depto': 'cod_depto', 'depto': 'depto', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'cod_cd_com': 'cod_cd_com', 'ciu_com': 'ciu_com', 'ord_mun': 'ord_mun', 'ag_unico': 'ag_unico', 'ae_unico': 'ae_unico', 'aba_unico': 'aba_unico', 'id_productor': 'id_productor', 'estado_validacion': 'estado_validacion', 'registrado_por': 'registrado_por', 'fecha_registro': 'fecha_registro', 'json_modificaciones': 'json_modificaciones', 'modificado_por': 'modificado_por', 'ultima_modificacion': 'ultima_modificacion', 'fecha_sincronizacion': 'fecha_sincronizacion', 'sync_con_marco_lista': 'sync_con_marco_lista', 'observaciones': 'observaciones', 'tipo_de_poligono': 'tipo_de_poligono', });
lyr_UbicacionProductor_3.set('fieldAliases', {'rowid': 'rowid', 'id_product': 'id_product', 'estado_val': 'estado_val', 'prod_estab': 'prod_estab', 'id_ubicaci': 'id_ubicaci', 'id_poligon': 'id_poligon', 'estado_ubi': 'estado_ubi', 'cuestionar': 'cuestionar', 'depto': 'depto', 'mpio': 'mpio', 'ciu_com': 'ciu_com', 'NCompleto': 'NCompleto', });
lyr_ClasificacionNoSupervisada_1.set('fieldImages', {'cod_clas': 'TextEdit', 'SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', });
lyr_PoligonosProductor_2.set('fieldImages', {'rowid': 'TextEdit', 'id_poligono': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'cod_cd_com': 'TextEdit', 'ciu_com': 'TextEdit', 'ord_mun': 'TextEdit', 'ag_unico': 'TextEdit', 'ae_unico': 'TextEdit', 'aba_unico': 'TextEdit', 'id_productor': 'TextEdit', 'estado_validacion': 'TextEdit', 'registrado_por': 'TextEdit', 'fecha_registro': 'DateTime', 'json_modificaciones': 'TextEdit', 'modificado_por': 'TextEdit', 'ultima_modificacion': 'DateTime', 'fecha_sincronizacion': 'DateTime', 'sync_con_marco_lista': 'TextEdit', 'observaciones': 'TextEdit', 'tipo_de_poligono': 'TextEdit', });
lyr_UbicacionProductor_3.set('fieldImages', {'rowid': 'TextEdit', 'id_product': 'TextEdit', 'estado_val': 'TextEdit', 'prod_estab': 'TextEdit', 'id_ubicaci': 'TextEdit', 'id_poligon': 'TextEdit', 'estado_ubi': 'TextEdit', 'cuestionar': 'TextEdit', 'depto': 'TextEdit', 'mpio': 'TextEdit', 'ciu_com': 'TextEdit', 'NCompleto': 'TextEdit', });
lyr_ClasificacionNoSupervisada_1.set('fieldLabels', {'cod_clas': 'no label', 'SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', });
lyr_PoligonosProductor_2.set('fieldLabels', {'rowid': 'no label', 'id_poligono': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'cod_cd_com': 'no label', 'ciu_com': 'no label', 'ord_mun': 'no label', 'ag_unico': 'no label', 'ae_unico': 'no label', 'aba_unico': 'no label', 'id_productor': 'no label', 'estado_validacion': 'no label', 'registrado_por': 'no label', 'fecha_registro': 'no label', 'json_modificaciones': 'no label', 'modificado_por': 'no label', 'ultima_modificacion': 'no label', 'fecha_sincronizacion': 'no label', 'sync_con_marco_lista': 'no label', 'observaciones': 'no label', 'tipo_de_poligono': 'no label', });
lyr_UbicacionProductor_3.set('fieldLabels', {'rowid': 'inline label - always visible', 'id_product': 'inline label - always visible', 'estado_val': 'inline label - always visible', 'prod_estab': 'inline label - always visible', 'id_ubicaci': 'inline label - always visible', 'id_poligon': 'inline label - always visible', 'estado_ubi': 'inline label - always visible', 'cuestionar': 'inline label - always visible', 'depto': 'inline label - always visible', 'mpio': 'inline label - always visible', 'ciu_com': 'inline label - always visible', 'NCompleto': 'inline label - always visible', });
lyr_UbicacionProductor_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});