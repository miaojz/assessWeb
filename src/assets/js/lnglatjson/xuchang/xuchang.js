﻿import echarts from 'echarts';
(function (root, factory) {
    // eslint-disable-next-line no-undef
    if (typeof define === 'function' && define.amd) {
        // eslint-disable-next-line no-undef
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        factory(exports, require('echarts'));
    } else {
        factory({}, echarts);
    }
}(this,
    function (exports, echarts) {
        var log = function (msg) {
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
        echarts.registerMap('许昌', {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "id": "410104",
                    "properties": {
                        "name": "建安区",
                        "cp": [113.928613, 34.112951],
                        "childNum": 1
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [[
                            [114.0795, 34.009847], [114.075308, 33.981007], [114.062809, 33.970477], [114.056495, 33.985289], [114.048919, 33.990569], [114.021232, 33.990646], [114.013166, 33.986634], [113.987195, 33.990113], [113.965217, 33.98845], [113.951126, 33.975725], [113.942525, 33.974448], [113.926874, 33.963469], [113.922976, 33.950962], [113.919033, 33.948823], [113.904071, 33.947838], [113.878873, 33.952341], [113.865214, 33.949234], [113.870169, 33.937271], [113.86617, 33.929798], [113.866739, 33.887544], [113.861432, 33.876512], [113.831092, 33.88107], [113.810896, 33.888453], [113.800345, 33.885858], [113.77995, 33.890473], [113.762456, 33.876161], [113.741747, 33.874796], [113.735847, 33.880776], [113.731063, 33.880305], [113.721445, 33.856783], [113.702147, 33.862288], [113.703048, 33.877732], [113.695903, 33.913768], [113.698197, 33.919169], [113.691056, 33.926352], [113.690395, 33.958916], [113.67308, 33.962728], [113.637474, 33.977745], [113.630271, 33.991129], [113.628537, 34.002841], [113.619393, 34.01769], [113.622003, 34.026475], [113.611224, 34.0219], [113.603854, 34.024274], [113.602247, 34.027826], [113.606875, 34.032615], [113.601975, 34.035381], [113.60128, 34.041964], [113.594705, 34.049386], [113.608169, 34.053527], [113.610917, 34.061391], [113.619405, 34.068071], [113.609858, 34.084062], [113.619376, 34.102442], [113.62331, 34.140042], [113.64441, 34.168928], [113.646602, 34.180711], [113.653589, 34.175894], [113.657245, 34.167774], [113.678159, 34.152107], [113.683828, 34.151117], [113.691506, 34.162349], [113.71718, 34.161918], [113.75359, 34.172813], [113.760994, 34.165883], [113.780534, 34.169646], [113.797678, 34.163949], [113.804922, 34.169196], [113.820971, 34.172964], [113.840021, 34.171511], [113.856012, 34.176343], [113.870079, 34.175568], [113.878494, 34.169325], [113.886114, 34.169039], [113.890599, 34.175742], [113.889587, 34.182346], [113.899909, 34.185425], [113.913121, 34.181431], [113.922057, 34.191094], [113.924628, 34.187304], [113.93638, 34.186305], [113.931929, 34.179928], [113.923959, 34.178798], [113.923016, 34.176075], [113.929464, 34.161424], [113.941138, 34.161438], [113.954342, 34.173832], [113.976969, 34.175981], [114.006866, 34.186804], [114.0174, 34.180197], [114.01832, 34.173603], [114.04755, 34.164182], [114.057478, 34.15763], [114.068868, 34.158549], [114.077892, 34.15446], [114.075234, 34.145561], [114.082609, 34.139487], [114.06918, 34.121432], [114.073392, 34.116313], [114.092533, 34.115061], [114.093642, 34.100658], [114.083786, 34.095618], [114.053558, 34.091414], [114.060271, 34.083536], [114.052469, 34.077632], [114.055188, 34.063476], [114.063419, 34.052575], [114.066612, 34.021753], [114.0795, 34.009847]
                        ]]
                    }
                },
                {
                    "type": "Feature",
                    "id": "410108",
                    "properties": {
                        "name": "魏都区",
                        "cp": [113.825128, 34.044059],
                        "childNum": 1
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [[
                            [113.863062, 34.018169], [113.852007, 34.017546], [113.841707, 34.011667], [113.838103, 33.99933], [113.834134, 33.996577], [113.826465, 33.997043], [113.824357, 33.982769], [113.789788, 33.986722], [113.777585, 33.99388], [113.77357, 34.003422], [113.776083, 34.016911], [113.77196, 34.017389], [113.771522, 34.021167], [113.788849, 34.024255], [113.791592, 34.028756], [113.786015, 34.035604], [113.777969, 34.037434], [113.770919, 34.029302], [113.76446, 34.029192], [113.764044, 34.047052], [113.772478, 34.056879], [113.780454, 34.056163], [113.785126, 34.07005], [113.79496, 34.079526], [113.791785, 34.101305], [113.808715, 34.099992], [113.823334, 34.09152], [113.840014, 34.088902], [113.847336, 34.079811], [113.86518, 34.077579], [113.866859, 34.065396], [113.877572, 34.064031], [113.879867, 34.045358], [113.890236, 34.029927], [113.890574, 34.018472], [113.877441, 34.009879], [113.863062, 34.018169]
                        ]]
                    }
                },

                {
                    "type": "Feature",
                    "id": "410105",
                    "properties": {
                        "name": "鄢陵县",
                        "cp": [114.1833, 34.034008],
                        "childNum": 1
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [[
                            [114.317946, 33.847014], [114.328988, 33.837824], [114.330229, 33.821951], [114.321557, 33.813803], [114.314959, 33.786296], [114.29638, 33.777937], [114.283589, 33.777299], [114.273507, 33.781864], [114.25351, 33.784559], [114.246169, 33.798049], [114.237209, 33.794811], [114.223207, 33.796118], [114.209414, 33.806203], [114.203804, 33.802943], [114.19518, 33.808222], [114.185523, 33.804565], [114.183581, 33.811987], [114.180117, 33.806585], [114.176594, 33.808627], [114.167518, 33.805112], [114.160727, 33.811197], [114.16514, 33.821355], [114.151434, 33.847455], [114.132111, 33.86634], [114.123161, 33.869502], [114.119882, 33.875903], [114.121436, 33.880227], [114.134287, 33.888386], [114.129597, 33.899048], [114.133012, 33.909083], [114.122012, 33.92965], [114.11177, 33.934742], [114.110771, 33.943239], [114.086344, 33.954187], [114.065005, 33.957638], [114.059861, 33.962947], [114.061667, 33.969143], [114.075308, 33.981007], [114.0795, 34.009847], [114.066612, 34.021753], [114.063419, 34.052575], [114.055188, 34.063476], [114.052469, 34.077632], [114.060271, 34.083536], [114.053558, 34.091414], [114.083786, 34.095618], [114.093642, 34.100658], [114.094396, 34.103831], [114.092533, 34.115061], [114.073392, 34.116313], [114.06918, 34.121432], [114.082609, 34.139487], [114.076623, 34.14277], [114.075907, 34.151628], [114.077892, 34.15446], [114.09524, 34.156241], [114.097483, 34.161721], [114.094725, 34.170758], [114.097874, 34.172541], [114.112256, 34.17307], [114.128066, 34.165273], [114.13419, 34.165473], [114.145687, 34.183985], [114.136708, 34.194685], [114.134497, 34.204322], [114.161075, 34.207807], [114.168603, 34.220719], [114.203441, 34.222826], [114.207272, 34.23838], [114.21786, 34.24793], [114.259075, 34.247223], [114.284631, 34.233429], [114.278685, 34.185104], [114.293283, 34.135802], [114.277153, 34.106801], [114.266846, 34.102978], [114.280204, 34.056159], [114.293266, 34.042122], [114.294455, 34.008528], [114.296993, 34.004092], [114.306392, 34.002575], [114.311162, 33.990069], [114.311401, 33.973152], [114.305248, 33.958683], [114.311039, 33.89407], [114.318236, 33.862972], [114.312094, 33.855809], [114.317946, 33.847014]
                        ]]
                    }
                },

                {
                    "type": "Feature",
                    "id": "410103",
                    "properties": {
                        "name": "禹州市",
                        "cp": [113.390492, 34.206628],
                        "childNum": 1
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [[
                            [113.649, 34.17938], [113.645548, 34.179119], [113.644899, 34.169783], [113.62331, 34.140042], [113.619376, 34.102442], [113.609858, 34.084062], [113.619405, 34.068071], [113.610917, 34.061391], [113.608169, 34.053527], [113.594705, 34.049386], [113.60128, 34.041964], [113.601975, 34.035381], [113.606875, 34.032615], [113.602247, 34.027826], [113.603617, 34.024671], [113.566284, 34.015587], [113.555704, 34.020153], [113.557763, 34.026789], [113.552388, 34.03535], [113.54652, 34.03395], [113.545536, 34.023159], [113.535948, 34.020208], [113.511494, 34.027302], [113.485513, 34.026425], [113.477575, 34.024102], [113.47477, 34.014884], [113.463327, 34.015245], [113.458538, 34.009289], [113.438999, 34.013296], [113.430703, 33.996764], [113.418842, 33.99066], [113.414794, 33.999116], [113.407153, 33.999792], [113.40359, 34.00448], [113.405937, 34.010326], [113.412474, 34.010958], [113.414222, 34.014202], [113.412583, 34.026702], [113.396788, 34.02985], [113.396247, 34.041009], [113.376735, 34.045551], [113.362603, 34.044739], [113.348912, 34.033501], [113.339867, 34.032809], [113.326308, 34.054295], [113.33603, 34.068173], [113.334409, 34.073292], [113.306384, 34.088201], [113.288305, 34.093124], [113.284054, 34.106427], [113.269614, 34.104751], [113.261278, 34.120009], [113.248454, 34.116911], [113.237811, 34.102103], [113.219894, 34.10445], [113.211671, 34.11339], [113.192568, 34.106529], [113.177656, 34.105559], [113.158779, 34.111646], [113.151026, 34.124897], [113.135918, 34.130045], [113.131784, 34.140581], [113.135044, 34.151675], [113.114208, 34.172484], [113.11029, 34.189599], [113.115042, 34.202622], [113.105797, 34.213154], [113.091515, 34.219872], [113.079219, 34.216595], [113.07356, 34.225005], [113.078538, 34.234878], [113.070759, 34.236287], [113.075971, 34.255093], [113.085609, 34.271175], [113.106718, 34.267736], [113.147765, 34.278941], [113.157205, 34.272642], [113.162579, 34.274138], [113.170538, 34.283144], [113.179314, 34.285833], [113.178991, 34.291399], [113.189535, 34.296291], [113.189009, 34.301745], [113.198931, 34.316532], [113.217006, 34.318698], [113.228749, 34.33068], [113.229916, 34.340365], [113.24089, 34.344752], [113.273103, 34.34403], [113.281477, 34.349103], [113.283264, 34.358161], [113.319905, 34.358217], [113.318366, 34.378178], [113.325742, 34.389196], [113.321915, 34.400096], [113.329179, 34.405178], [113.330606, 34.410706], [113.347072, 34.41255], [113.354108, 34.410379], [113.358061, 34.402728], [113.375652, 34.395885], [113.372285, 34.385702], [113.379631, 34.383057], [113.388455, 34.385341], [113.394979, 34.38224], [113.408724, 34.38395], [113.420057, 34.38117], [113.411947, 34.361529], [113.417184, 34.358773], [113.416724, 34.353161], [113.428147, 34.352088], [113.437394, 34.355197], [113.453024, 34.343898], [113.457871, 34.345192], [113.476782, 34.336511], [113.488204, 34.348707], [113.503974, 34.344719], [113.516064, 34.349006], [113.524086, 34.340552], [113.522031, 34.334888], [113.541389, 34.322131], [113.561875, 34.317372], [113.572049, 34.324069], [113.585044, 34.325525], [113.614178, 34.319132], [113.629263, 34.311097], [113.63806, 34.297442], [113.649141, 34.294768], [113.65253, 34.288492], [113.645759, 34.281679], [113.623858, 34.27273], [113.618144, 34.278458], [113.605176, 34.270822], [113.599868, 34.253219], [113.584709, 34.249302], [113.584748, 34.246499], [113.590454, 34.238725], [113.588725, 34.231291], [113.595875, 34.231221], [113.607232, 34.221594], [113.629331, 34.217465], [113.634064, 34.210785], [113.662639, 34.198029], [113.659998, 34.185473], [113.653589, 34.175894], [113.649, 34.17938]
                        ]]
                    }
                },

                {
                    "type": "Feature",
                    "id": "410102",
                    "properties": {
                        "name": "襄城县",
                        "cp": [113.533071, 33.892683],
                        "childNum": 1
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [[
                            [113.748013, 33.799758], [113.750173, 33.795262], [113.760734, 33.790282], [113.758896, 33.77724], [113.748443, 33.758634], [113.74825, 33.748278], [113.75595, 33.747481], [113.771126, 33.736869], [113.764481, 33.734904], [113.761441, 33.718888], [113.747114, 33.718506], [113.746991, 33.708488], [113.742949, 33.70517], [113.73006, 33.701101], [113.721754, 33.716329], [113.718274, 33.716128], [113.711548, 33.698298], [113.707295, 33.696867], [113.6746, 33.705245], [113.650234, 33.70221], [113.643896, 33.709724], [113.642556, 33.699279], [113.636328, 33.69502], [113.62209, 33.701408], [113.60506, 33.697731], [113.616293, 33.71489], [113.595532, 33.717112], [113.58968, 33.721606], [113.589015, 33.726473], [113.595596, 33.732494], [113.596383, 33.737911], [113.58873, 33.738382], [113.589101, 33.745594], [113.580149, 33.747408], [113.583939, 33.763145], [113.580698, 33.762941], [113.577718, 33.756178], [113.571128, 33.754707], [113.539733, 33.764169], [113.520727, 33.75529], [113.50306, 33.758274], [113.491979, 33.751661], [113.45639, 33.744962], [113.455531, 33.760264], [113.451221, 33.76719], [113.440163, 33.771292], [113.431088, 33.768272], [113.424483, 33.769881], [113.405065, 33.780582], [113.378889, 33.789394], [113.377662, 33.791602], [113.383936, 33.797544], [113.393779, 33.799684], [113.398505, 33.804136], [113.391255, 33.80801], [113.386214, 33.821676], [113.390776, 33.847567], [113.381089, 33.855599], [113.374896, 33.870206], [113.375384, 33.880518], [113.368553, 33.889724], [113.374503, 33.895895], [113.395392, 33.942505], [113.401086, 33.945972], [113.407737, 33.944202], [113.416953, 33.947343], [113.416989, 33.959651], [113.425833, 33.971486], [113.420702, 33.990974], [113.430703, 33.996764], [113.438999, 34.013296], [113.458538, 34.009289], [113.463327, 34.015245], [113.47477, 34.014884], [113.477575, 34.024102], [113.487216, 34.02661], [113.511494, 34.027302], [113.51727, 34.023821], [113.538632, 34.020732], [113.546575, 34.024338], [113.54652, 34.03395], [113.54956, 34.035195], [113.555953, 34.032911], [113.555704, 34.020153], [113.566284, 34.015587], [113.592485, 34.023574], [113.603617, 34.024671], [113.611224, 34.0219], [113.622003, 34.026475], [113.619393, 34.01769], [113.628537, 34.002841], [113.630271, 33.991129], [113.637474, 33.977745], [113.691213, 33.957359], [113.691056, 33.926352], [113.698197, 33.919169], [113.695903, 33.913768], [113.703048, 33.877732], [113.702147, 33.862288], [113.722472, 33.856967], [113.727295, 33.876645], [113.735847, 33.880776], [113.741747, 33.874796], [113.741143, 33.863407], [113.735228, 33.854849], [113.733856, 33.843389], [113.7508, 33.836451], [113.763298, 33.836223], [113.765467, 33.832843], [113.764873, 33.812075], [113.75572, 33.800452], [113.748013, 33.799758]
                        ]]
                    }
                },

                {
                    "type": "Feature",
                    "id": "410122",
                    "properties": {
                        "name": "长葛市",
                        "cp": [113.88032, 34.252473],
                        "childNum": 1
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [[
                            [114.032685, 34.169342], [114.01832, 34.173603], [114.0174, 34.180197], [114.005696, 34.186811], [113.976969, 34.175981], [113.954342, 34.173832], [113.945379, 34.16374], [113.930974, 34.160768], [113.923016, 34.176075], [113.923959, 34.178798], [113.931929, 34.179928], [113.93638, 34.186305], [113.924628, 34.187304], [113.922057, 34.191094], [113.913121, 34.181431], [113.899909, 34.185425], [113.889587, 34.182346], [113.890599, 34.175742], [113.886114, 34.169039], [113.878494, 34.169325], [113.870079, 34.175568], [113.856012, 34.176343], [113.840021, 34.171511], [113.820971, 34.172964], [113.804922, 34.169196], [113.797678, 34.163949], [113.780534, 34.169646], [113.760994, 34.165883], [113.75359, 34.172813], [113.71718, 34.161918], [113.691506, 34.162349], [113.686132, 34.152439], [113.679672, 34.151332], [113.657245, 34.167774], [113.653858, 34.175035], [113.662639, 34.198029], [113.634064, 34.210785], [113.629331, 34.217465], [113.607232, 34.221594], [113.595875, 34.231221], [113.588725, 34.231291], [113.590454, 34.238725], [113.584709, 34.249302], [113.598274, 34.25178], [113.602235, 34.256777], [113.604008, 34.269959], [113.618144, 34.278458], [113.623858, 34.27273], [113.645759, 34.281679], [113.65253, 34.288492], [113.669714, 34.280175], [113.685012, 34.288351], [113.707183, 34.281559], [113.710714, 34.289158], [113.705606, 34.295023], [113.719974, 34.297135], [113.718715, 34.307091], [113.724546, 34.311252], [113.732457, 34.311666], [113.734359, 34.315872], [113.740769, 34.317889], [113.738684, 34.321252], [113.742082, 34.323914], [113.763142, 34.319979], [113.78242, 34.320793], [113.797256, 34.332321], [113.796496, 34.337792], [113.809101, 34.34295], [113.837701, 34.329106], [113.852688, 34.328306], [113.855493, 34.333134], [113.885644, 34.336032], [113.899104, 34.331409], [113.899761, 34.324579], [113.904561, 34.321606], [113.90113, 34.309425], [113.907344, 34.307907], [113.909936, 34.300501], [113.915345, 34.3007], [113.920985, 34.307304], [113.940426, 34.31021], [113.942547, 34.304003], [113.971367, 34.297655], [113.96914, 34.289743], [113.976715, 34.289854], [113.982863, 34.281392], [113.997493, 34.280436], [113.994955, 34.268252], [114.006796, 34.268797], [114.00832, 34.258657], [114.015453, 34.248637], [114.048297, 34.243042], [114.052912, 34.245724], [114.054756, 34.253365], [114.064861, 34.250012], [114.07106, 34.255254], [114.076522, 34.251049], [114.091891, 34.255879], [114.092753, 34.249821], [114.103567, 34.248288], [114.113667, 34.234533], [114.106947, 34.230575], [114.115099, 34.223755], [114.115179, 34.212487], [114.128448, 34.210366], [114.134156, 34.20622], [114.136708, 34.194685], [114.145687, 34.183985], [114.13419, 34.165473], [114.128066, 34.165273], [114.112256, 34.17307], [114.097874, 34.172541], [114.09446, 34.167664], [114.097287, 34.158682], [114.089624, 34.154476], [114.077892, 34.15446], [114.068868, 34.158549], [114.057478, 34.15763], [114.032685, 34.169342]
                        ]]
                    }
                }


            ]
        });
    }));