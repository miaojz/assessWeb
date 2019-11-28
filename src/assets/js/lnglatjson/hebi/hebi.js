import echarts from 'echarts';
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
}(this, function (exports, echarts) {
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
	echarts.registerMap('鹤壁', {
		"type": "FeatureCollection",
		"features": [
			{
				"type": "Feature",
				"id": "410611",
				"properties": {
					"name": "淇滨区",
					"cp": [114.30, 35.73],
					"childNum": 1
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [[
						[114.353348, 35.732759],
						[114.361225, 35.727556],
						[114.372146, 35.713197],
						[114.376922, 35.693303],
						[114.375697, 35.681574],
						[114.363137, 35.662475],
						[114.353043, 35.655378],
						[114.34691, 35.655143],
						[114.340491, 35.662181],
						[114.336093, 35.661231],
						[114.333775, 35.656143],
						[114.320892, 35.655691],
						[114.317643, 35.662704],
						[114.306359, 35.662459],
						[114.30457, 35.66581],
						[114.29317, 35.669078],
						[114.28534, 35.667422],
						[114.278318, 35.682841],
						[114.258734, 35.69363],
						[114.260651, 35.706984],
						[114.271522, 35.711361],
						[114.260774, 35.723773],
						[114.263568, 35.731606],
						[114.258381, 35.733203],
						[114.259839, 35.736565],
						[114.264973, 35.73554],
						[114.26915, 35.746774],
						[114.26209, 35.748444],
						[114.260681, 35.756089],
						[114.245985, 35.765285],
						[114.234845, 35.758575],
						[114.227601, 35.76105],
						[114.227645, 35.777097],
						[114.209621, 35.80225],
						[114.201443, 35.802609],
						[114.19171, 35.798255],
						[114.171159, 35.805678],
						[114.157986, 35.803175],
						[114.142572, 35.804517],
						[114.133312, 35.811002],
						[114.126314, 35.809608],
						[114.120048, 35.81268],
						[114.105352, 35.813369],
						[114.083517, 35.808322],
						[114.073653, 35.810567],
						[114.054966, 35.802804],
						[114.04329, 35.80921],
						[114.029078, 35.803269],
						[114.02644, 35.808189],
						[114.041087, 35.824441],
						[114.041666, 35.829841],
						[114.031092, 35.835163],
						[114.020454, 35.850471],
						[114.019048, 35.857892],
						[114.025082, 35.864557],
						[114.045609, 35.865622],
						[114.062799, 35.876003],
						[114.076101, 35.87907],
						[114.080351, 35.889245],
						[114.080261, 35.909377],
						[114.087309, 35.916602],
						[114.118275, 35.914878],
						[114.138292, 35.917479],
						[114.161623, 35.914434],
						[114.156832, 35.902774],
						[114.15744, 35.886432],
						[114.169234, 35.880794],
						[114.179571, 35.866672],
						[114.196521, 35.862496],
						[114.19615, 35.847624],
						[114.214778, 35.846539],
						[114.229325, 35.855343],
						[114.234786, 35.851728],
						[114.238298, 35.832943],
						[114.251438, 35.802847],
						[114.253086, 35.789122],
						[114.272023, 35.761276],
						[114.278055, 35.764792],
						[114.289561, 35.784748],
						[114.30599, 35.802073],
						[114.332843, 35.808029],
						[114.353266, 35.821621],
						[114.367514, 35.825031],
						[114.402974, 35.822825],
						[114.415474, 35.825907],
						[114.417954, 35.80738],
						[114.408868, 35.804544],
						[114.409174, 35.793818],
						[114.396636, 35.793426],
						[114.391834, 35.777736],
						[114.391226, 35.764653],
						[114.400302, 35.74765],
						[114.388922, 35.740027],
						[114.371551, 35.739105],
						[114.353348, 35.732759]
					]]
				}
			},
			{
				"type": "Feature",
				"id": "410603",
				"properties": {
					"name": "山城区",
					//"cp":[114.18,35.90],
					"cp": [114.234763, 35.908318],
					"childNum": 1
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [[
						[114.229325, 35.855343],
						[114.214778, 35.846539],
						[114.19615, 35.847624],
						[114.196521, 35.862496],
						[114.179571, 35.866672],
						[114.169234, 35.880794],
						[114.15744, 35.886432],
						[114.156832, 35.902774],
						[114.161623, 35.914434],
						[114.193535, 35.943507],
						[114.212625, 35.951113],
						[114.21101, 35.974645],
						[114.195285, 35.993379],
						[114.227673, 35.995266],
						[114.256719, 35.97805],
						[114.271286, 35.97652],
						[114.284471, 35.979114],
						[114.286119, 35.95247],
						[114.289838, 35.952424],
						[114.293029, 35.958189],
						[114.302526, 35.963446],
						[114.314491, 35.961694],
						[114.311325, 35.953308],
						[114.299135, 35.945535],
						[114.298186, 35.936333],
						[114.282379, 35.929807],
						[114.275029, 35.907692],
						[114.286438, 35.897405],
						[114.285957, 35.892609],
						[114.271141, 35.884484],
						[114.251507, 35.880626],
						[114.248949, 35.870616],
						[114.240165, 35.862821],
						[114.234786, 35.851728],
						[114.229325, 35.855343]
					]]
				}
			},

			{
				"type": "Feature",
				"id": "410622",
				"properties": {
					"name": "淇县",
					"cp": [114.17, 35.60],
					"childNum": 1
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [[
						[114.241848, 35.518628],
						[114.220591, 35.522429],
						[114.209399, 35.53013],
						[114.197124, 35.527356],
						[114.17746, 35.529336],
						[114.149571, 35.541258],
						[114.122045, 35.55875],
						[114.097519, 35.560857],
						[114.084688, 35.564993],
						[114.08105, 35.581936],
						[114.06145, 35.600377],
						[114.065661, 35.616802],
						[114.06326, 35.630703],
						[114.069848, 35.641455],
						[114.061367, 35.672518],
						[114.057997, 35.672533],
						[114.056373, 35.680457],
						[114.049188, 35.685204],
						[114.029356, 35.69091],
						[114.02508, 35.701464],
						[114.001159, 35.710878],
						[114.005673, 35.729914],
						[114.023038, 35.732063],
						[114.047847, 35.753414],
						[114.060855, 35.753339],
						[114.071656, 35.763279],
						[114.074835, 35.770041],
						[114.071964, 35.781522],
						[114.076608, 35.78518],
						[114.084444, 35.808826],
						[114.100337, 35.813266],
						[114.119068, 35.812766],
						[114.125454, 35.809706],
						[114.133312, 35.811002],
						[114.142572, 35.804517],
						[114.157986, 35.803175],
						[114.170532, 35.805759],
						[114.19171, 35.798255],
						[114.201443, 35.802609],
						[114.209621, 35.80225],
						[114.227645, 35.777097],
						[114.227601, 35.76105],
						[114.234845, 35.758575],
						[114.245985, 35.765285],
						[114.260681, 35.756089],
						[114.26209, 35.748444],
						[114.26915, 35.746774],
						[114.264973, 35.73554],
						[114.259839, 35.736565],
						[114.258381, 35.733203],
						[114.263568, 35.731606],
						[114.260774, 35.723773],
						[114.271522, 35.711361],
						[114.260651, 35.706984],
						[114.258734, 35.69363],
						[114.278318, 35.682841],
						[114.283752, 35.668301],
						[114.300821, 35.663546],
						[114.297821, 35.64739],
						[114.306247, 35.644652],
						[114.308324, 35.639617],
						[114.307283, 35.635212],
						[114.299565, 35.631644],
						[114.304296, 35.62748],
						[114.295693, 35.62179],
						[114.298149, 35.614047],
						[114.280747, 35.596944],
						[114.278291, 35.589264],
						[114.267048, 35.580859],
						[114.273036, 35.569761],
						[114.270224, 35.563084],
						[114.274452, 35.556003],
						[114.264602, 35.534829],
						[114.272154, 35.522542],
						[114.279714, 35.525143],
						[114.284278, 35.518056],
						[114.292018, 35.519954],
						[114.29605, 35.514055],
						[114.292758, 35.506926],
						[114.284101, 35.506603],
						[114.241848, 35.518628]
					]]
				}
			},

			{
				"type": "Feature",
				"id": "410621",
				"properties": {
					"name": "浚县",
					"cp": [114.54, 35.67],
					"childNum": 1
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [[
						[114.598806, 35.635372],
						[114.581593, 35.622571],
						[114.563827, 35.618911],
						[114.554685, 35.620348],
						[114.548823, 35.607714],
						[114.504082, 35.614437],
						[114.500162, 35.6061],
						[114.505194, 35.599799],
						[114.505325, 35.589697],
						[114.487821, 35.590104],
						[114.491255, 35.579176],
						[114.486982, 35.574202],
						[114.431744, 35.549714],
						[114.421104, 35.538209],
						[114.407102, 35.531142],
						[114.400213, 35.51513],
						[114.415237, 35.491094],
						[114.425545, 35.480923],
						[114.423434, 35.478978],
						[114.400309, 35.481759],
						[114.376519, 35.470128],
						[114.361558, 35.468136],
						[114.33353, 35.450256],
						[114.317058, 35.452873],
						[114.303074, 35.464302],
						[114.287463, 35.467215],
						[114.27846, 35.473348],
						[114.280498, 35.495327],
						[114.290823, 35.498798],
						[114.29605, 35.514055],
						[114.292018, 35.519954],
						[114.284278, 35.518056],
						[114.279714, 35.525143],
						[114.272154, 35.522542],
						[114.271455, 35.527703],
						[114.264953, 35.533532],
						[114.274452, 35.556003],
						[114.270224, 35.563084],
						[114.273036, 35.569761],
						[114.267048, 35.580859],
						[114.278291, 35.589264],
						[114.280747, 35.596944],
						[114.298149, 35.614047],
						[114.295693, 35.62179],
						[114.304296, 35.62748],
						[114.299565, 35.631644],
						[114.307283, 35.635212],
						[114.308324, 35.639617],
						[114.306247, 35.644652],
						[114.297821, 35.64739],
						[114.300821, 35.663546],
						[114.290736, 35.667833],
						[114.30457, 35.66581],
						[114.306359, 35.662459],
						[114.317643, 35.662704],
						[114.320892, 35.655691],
						[114.333775, 35.656143],
						[114.336093, 35.661231],
						[114.340491, 35.662181],
						[114.34691, 35.655143],
						[114.353043, 35.655378],
						[114.363137, 35.662475],
						[114.375697, 35.681574],
						[114.376922, 35.693303],
						[114.372146, 35.713197],
						[114.361225, 35.727556],
						[114.353348, 35.732759],
						[114.371551, 35.739105],
						[114.388922, 35.740027],
						[114.400302, 35.74765],
						[114.391226, 35.764653],
						[114.391834, 35.777736],
						[114.396636, 35.793426],
						[114.409174, 35.793818],
						[114.408868, 35.804544],
						[114.417954, 35.80738],
						[114.415474, 35.825907],
						[114.445133, 35.823235],
						[114.451355, 35.825227],
						[114.457432, 35.834823],
						[114.474632, 35.833244],
						[114.484407, 35.841186],
						[114.509087, 35.843084],
						[114.5581, 35.833682],
						[114.568236, 35.846906],
						[114.575314, 35.849811],
						[114.577873, 35.847745],
						[114.575552, 35.84201],
						[114.592799, 35.84612],
						[114.602573, 35.831484],
						[114.6166, 35.828425],
						[114.619185, 35.813787],
						[114.636969, 35.801382],
						[114.662672, 35.797238],
						[114.67864, 35.787575],
						[114.71406, 35.79362],
						[114.72472, 35.784766],
						[114.761791, 35.767644],
						[114.763105, 35.756601],
						[114.737538, 35.709416],
						[114.732849, 35.70426],
						[114.716141, 35.701648],
						[114.709756, 35.694573],
						[114.69416, 35.690918],
						[114.683429, 35.678227],
						[114.677257, 35.658541],
						[114.666452, 35.65658],
						[114.651434, 35.65989],
						[114.626734, 35.654514],
						[114.62005, 35.641889],
						[114.598806, 35.635372]
					]]
				}
			},
			{
				"type": "Feature",
				"id": "410622",
				"properties": {
					"name": "鹤山区",
					"cp": [114.146226, 35.962557],
					"childNum": 1
				},
				"geometry": {
					"type": "Polygon",
					"coordinates": [[
						[114.17585, 35.92867],
						[114.160945, 35.914179],
						[114.138292, 35.917479],
						[114.118275, 35.914878],
						[114.090905, 35.915846],
						[114.080582, 35.92469],
						[114.046245, 35.941128],
						[114.043824, 35.950465],
						[114.033833, 35.957984],
						[114.035082, 35.977491],
						[114.049237, 35.978043],
						[114.073019, 35.969544],
						[114.081442, 35.981869],
						[114.091029, 35.979856],
						[114.097739, 35.986409],
						[114.113305, 35.987802],
						[114.108464, 36.000349],
						[114.120618, 36.02833],
						[114.127274, 36.034059],
						[114.142714, 36.038494],
						[114.163394, 36.052352],
						[114.172373, 36.054336],
						[114.180874, 36.050758],
						[114.188129, 36.030101],
						[114.194891, 36.022473],
						[114.17982, 36.006529],
						[114.179318, 35.99763],
						[114.184934, 35.993465],
						[114.195285, 35.993379],
						[114.210132, 35.976168],
						[114.212495, 35.967113],
						[114.212625, 35.951113],
						[114.196283, 35.945302],
						[114.17585, 35.92867]
					]]
				}
			},

		]
	});
}));