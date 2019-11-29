﻿/* eslint-disable no-mixed-spaces-and-tabs */
import echarts from 'echarts';
(function(root, factory) {
    // eslint-disable-next-line no-undef
    if (typeof define === 'function' && define.amd) {
        // eslint-disable-next-line no-undef
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        factory(exports, require('echarts'));
    } else {
        factory({},echarts);
    }
} (this,
function(exports, echarts) {
    var log = function(msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded');
        return;
    }
    echarts.registerMap('济源', {
        "type": "FeatureCollection",
        "features": [
 
        {
            "type": "Feature",
            "id": "410108",
            "properties": {
                "name": "济源市",
            	// eslint-disable-next-line no-mixed-spaces-and-tabs
            	"cp":[112.399116,35.083364],
                "childNum": 1
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
[112.70582, 35.030024],[112.690516, 35.019529],[112.682981, 35.00178],[112.673165, 34.994238],[112.659257, 34.99529],[112.655593, 34.987298],[112.648203, 34.984015],[112.619514, 34.985521],[112.611688, 34.979303],[112.602347, 34.976808],[112.583542, 34.977169],[112.560234, 34.946082],[112.548551, 34.944264],[112.54712, 34.941178],[112.53127, 34.941064],[112.52636, 34.946407],[112.519982, 34.942698],[112.509271, 34.945132],[112.50754, 34.93177],[112.519893, 34.928284],[112.524896, 34.937338],[112.53394, 34.938434],[112.537297, 34.930096],[112.542377, 34.928154],[112.541083, 34.920638],[112.531609, 34.916693],[112.532211, 34.91275],[112.540737, 34.907559],[112.53901, 34.902827],[112.519563, 34.902436],[112.508371, 34.911632],[112.49426, 34.909546],[112.472289, 34.919177],[112.434723, 34.926961],[112.392569, 34.923913],[112.378856, 34.927138],[112.358536, 34.941401],[112.339031, 34.947057],[112.314356, 34.943882],[112.305787, 34.947422],[112.29556, 34.964151],[112.287952, 34.968198],[112.273653, 34.964244],[112.268872, 34.947275],[112.262933, 34.943973],[112.244057, 34.957828],[112.229753, 34.960097],[112.217871, 34.971417],[112.19014, 34.975973],[112.185485, 34.998196],[112.15647, 35.02243],[112.115215, 35.034754],[112.046302, 35.034111],[112.042571, 35.037285],[112.044324, 35.050834],[112.057413, 35.049277],[112.067667, 35.063631],[112.068279, 35.083972],[112.060691, 35.100529],[112.074157, 35.141535],[112.065116, 35.146297],[112.071103, 35.153553],[112.071467, 35.159564],[112.048082, 35.193277],[112.045921, 35.202661],[112.051886, 35.208516],[112.065676, 35.21233],[112.071966, 35.219798],[112.087043, 35.227705],[112.0846, 35.248558],[112.075705, 35.269009],[112.059882, 35.278699],[112.064088, 35.285886],[112.074187, 35.283445],[112.096203, 35.285617],[112.11807, 35.279308],[112.117026, 35.274525],[112.123108, 35.271062],[112.139836, 35.276821],[112.177396, 35.27076],[112.197751, 35.261805],[112.221125, 35.259894],[112.226188, 35.254461],[112.221662, 35.245459],[112.246951, 35.240783],[112.264156, 35.246469],[112.288398, 35.247643],[112.292888, 35.2556],[112.303837, 35.256398],[112.307519, 35.25071],[112.293443, 35.226352],[112.296068, 35.222767],[112.315344, 35.227501],[112.325681, 35.225075],[112.335133, 35.227165],[112.374664, 35.22616],[112.386126, 35.231503],[112.39707, 35.244978],[112.406954, 35.247403],[112.426564, 35.244825],[112.464726, 35.232249],[112.468577, 35.236048],[112.476302, 35.236769],[112.489157, 35.230159],[112.495708, 35.235437],[112.519028, 35.224095],[112.542908, 35.229554],[112.562944, 35.219351],[112.572915, 35.217837],[112.574564, 35.22463],[112.580085, 35.227237],[112.608779, 35.22865],[112.624655, 35.225391],[112.641786, 35.230887],[112.644005, 35.233911],[112.640947, 35.244027],[112.624037, 35.248669],[112.623043, 35.259114],[112.637099, 35.270799],[112.64207, 35.268909],[112.640147, 35.260473],[112.644095, 35.254079],[112.649828, 35.265863],[112.657111, 35.265045],[112.660226, 35.250032],[112.676097, 35.242528],[112.695483, 35.225065],[112.724979, 35.213983],[112.738896, 35.219027],[112.749435, 35.210799],[112.763423, 35.209998],[112.763221, 35.202971],[112.771725, 35.193696],[112.76732, 35.163252],[112.769952, 35.160666],[112.768429, 35.145702],[112.77106, 35.143205],[112.772282, 35.114225],[112.75931, 35.103923],[112.759053, 35.091784],[112.754381, 35.087469],[112.752799, 35.076735],[112.740811, 35.063791],[112.739871, 35.047942],[112.730588, 35.039271],[112.70582, 35.030024]
            ]]
            }
        }       
        
		]
    });
}));