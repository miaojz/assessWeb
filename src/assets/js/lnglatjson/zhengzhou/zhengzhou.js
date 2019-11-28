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
		echarts.registerMap('郑州', {
			"type": "FeatureCollection",
			"features": [
				{
					"type": "Feature",
					"id": "410104",
					"properties": {
						"name": "登封",
						"cp": [113.059786, 34.462527],
						"childNum": 1
					},
					"geometry": {
						"type": "Polygon",
						"coordinates": [[
							[113.131517, 34.27554
							], [113.10865, 34.270651
							], [113.080607, 34.270929
							], [113.073644, 34.288455
							], [113.039421, 34.288675
							], [113.018418, 34.305066
							], [113.002076, 34.307643
							], [112.915391, 34.298253
							], [112.877387, 34.307088
							], [112.853339, 34.305535
							], [112.846404, 34.307695
							], [112.852497, 34.336934
							], [112.848606, 34.345242
							], [112.781896, 34.342587
							], [112.761764, 34.351625
							], [112.758424, 34.363723
							], [112.749576, 34.364103
							], [112.739049, 34.359291
							], [112.730667, 34.368515
							], [112.729777, 34.388908
							], [112.749081, 34.459863
							], [112.749568, 34.485987
							], [112.74649, 34.497201
							], [112.779361, 34.507719
							], [112.795381, 34.503377
							], [112.808408, 34.49106
							], [112.825368, 34.482194
							], [112.891901, 34.485075
							], [112.915356, 34.481772
							], [112.921165, 34.486397
							], [112.927537, 34.501075
							], [112.931675, 34.5352
							], [112.944777, 34.538519
							], [112.976924, 34.538317
							], [112.973238, 34.543248
							], [112.993109, 34.541558
							], [113.000867, 34.528116
							], [113.01223, 34.526027
							], [113.020268, 34.531456
							], [113.048945, 34.567536
							], [113.057871, 34.568181
							], [113.072399, 34.563633
							], [113.093953, 34.574758
							], [113.137181, 34.575432
							], [113.145739, 34.578765
							], [113.161273, 34.597906
							], [113.168486, 34.602015
							], [113.174583, 34.600133
							], [113.189026, 34.58844
							], [113.192049, 34.580358
							], [113.187502, 34.557529
							], [113.194131, 34.540203
							], [113.185158, 34.507393
							], [113.186248, 34.49867
							], [113.191798, 34.492372
							], [113.199857, 34.48991
							], [113.211852, 34.500448
							], [113.230159, 34.503958
							], [113.271507, 34.487915
							], [113.284823, 34.487075
							], [113.293141, 34.480628
							], [113.297523, 34.464317
							], [113.312188, 34.440022
							], [113.328856, 34.425744
							], [113.334668, 34.414437
							], [113.324303, 34.407029
							], [113.320262, 34.367483
							], [113.316888, 34.362277
							], [113.30712, 34.358563
							], [113.288467, 34.358084
							], [113.271804, 34.341983
							], [113.24443, 34.341376
							], [113.232367, 34.337923
							], [113.189551, 34.30226
							], [113.178128, 34.285049
							], [113.166498, 34.276224
							], [113.131517, 34.27554]
						]]
					}
				},
				{
					"type": "Feature",
					"id": "410108",
					"properties": {
						"name": "巩义",
						"cp": [113.044838, 34.75559],
						"childNum": 1
					},
					"geometry": {
						"type": "Polygon",
						"coordinates": [[
							[113.154573, 34.589612
							], [113.145739, 34.578765
							], [113.137181, 34.575432
							], [113.093953, 34.574758
							], [113.072399, 34.563633
							], [113.057871, 34.568181
							], [113.048945, 34.567536
							], [113.020268, 34.531456
							], [113.01223, 34.526027
							], [113.000867, 34.528116
							], [112.993109, 34.541558
							], [112.973238, 34.543248
							], [112.978891, 34.550226
							], [112.953726, 34.548241
							], [112.925001, 34.550785
							], [112.894823, 34.563041
							], [112.882448, 34.576124
							], [112.868059, 34.586341
							], [112.855787, 34.590772
							], [112.844679, 34.612312
							], [112.846895, 34.637087
							], [112.834521, 34.663058
							], [112.836738, 34.685582
							], [112.832781, 34.70374
							], [112.83732, 34.708753
							], [112.847253, 34.712068
							], [112.877315, 34.713388
							], [112.886206, 34.703594
							], [112.899763, 34.70215
							], [112.918364, 34.716714
							], [112.9391, 34.719469
							], [112.945696, 34.729135
							], [112.915516, 34.743261
							], [112.90919, 34.75134
							], [112.910783, 34.771122
							], [112.903571, 34.787746
							], [112.894167, 34.789645
							], [112.822947, 34.781714
							], [112.812622, 34.794428
							], [112.812349, 34.810652
							], [112.841216, 34.814582
							], [112.867876, 34.829805
							], [112.887983, 34.835992
							], [112.922172, 34.836127
							], [112.932495, 34.840676
							], [112.987341, 34.84763
							], [113.023384, 34.840631
							], [113.092655, 34.845598
							], [113.121403, 34.852407
							], [113.139758, 34.86559
							], [113.163585, 34.845033
							], [113.173791, 34.822428
							], [113.173163, 34.803866
							], [113.16088, 34.788788
							], [113.16696, 34.777776
							], [113.176415, 34.775862
							], [113.18503, 34.763811
							], [113.229345, 34.75831
							], [113.250136, 34.762365
							], [113.267313, 34.769719
							], [113.278681, 34.766844
							], [113.282272, 34.759753
							], [113.274537, 34.740046
							], [113.269066, 34.710168
							], [113.271729, 34.691183
							], [113.266162, 34.68079
							], [113.264692, 34.659911
							], [113.260791, 34.653209
							], [113.245558, 34.644054
							], [113.221721, 34.638033
							], [113.209757, 34.63819
							], [113.204455, 34.635079
							], [113.202496, 34.627104
							], [113.205424, 34.619701
							], [113.161273, 34.597906
							], [113.154573, 34.589612]
						]]
					}
				},

				{
					"type": "Feature",
					"id": "410105",
					"properties": {
						"name": "文化",
						"cp": [113.639588, 34.875792],
						"childNum": 1
					},
					"geometry": {
						"type": "Polygon",
						"coordinates": [[
							[113.532151, 34.968564
							], [113.529492, 34.955784
							], [113.529743, 34.9525
							], [113.535924, 34.942381
							], [113.54099, 34.934125
							], [113.548033, 34.920038
							], [113.55177, 34.912402
							], [113.560501, 34.899584
							], [113.57067, 34.88478
							], [113.597979, 34.857059
							], [113.613645, 34.833004
							], [113.632042, 34.805266
							], [113.655758, 34.769454
							], [113.659063, 34.770344
							], [113.675988, 34.770344
							], [113.680767, 34.770136
							], [113.688708, 34.769602
							], [113.688528, 34.782678
							], [113.688384, 34.792313
							], [113.688456, 34.806985
							], [113.688025, 34.821507
							], [113.6886, 34.831404
							], [113.684971, 34.842633
							], [113.685761, 34.852676
							], [113.686695, 34.863131
							], [113.686731, 34.865708
							], [113.684, 34.872964
							], [113.680731, 34.880219
							], [113.678251, 34.886112
							], [113.675772, 34.894328
							], [113.678072, 34.911617
							], [113.668801, 34.919787
							], [113.665208, 34.920911
							], [113.658812, 34.920852
							], [113.635384, 34.932927
							], [113.615981, 34.93849
							], [113.599164, 34.946065
							], [113.57933, 34.954823
							], [113.569269, 34.956834
							], [113.554896, 34.959438
							], [113.548428, 34.964881
							], [113.533193, 34.968549]
						]]
					}
				},

				{
					"type": "Feature",
					"id": "410103",
					"properties": {
						"name": "未来",
						"cp": [113.70945, 34.754254],
						"childNum": 1
					},
					"geometry": {
						"type": "Polygon",
						"coordinates": [[
							[113.65892, 34.770062
							], [113.663771, 34.770181
							], [113.673544, 34.770181
							], [113.688887, 34.769499
							], [113.700745, 34.768876
							], [113.711021, 34.768609
							], [113.721442, 34.768075
							], [113.724766, 34.768001
							], [113.72976, 34.768179        /*未来区新的边界点*/
							], [113.733526, 34.761796
							], [113.733305, 34.757116
							], [113.733035, 34.753335
							], [113.732966, 34.751273
							], [113.732946, 34.748397
							], [113.732856, 34.743859
							], [113.732838, 34.744986
							], [113.732676, 34.742479
							], [113.732631, 34.742231
							], [113.732618, 34.74136
							], [113.732613, 34.74027
							], [113.732501, 34.739369
							], [113.732398, 34.738293
							], [113.732227, 34.737503
							], [113.722871, 34.72745
							], [113.717284, 34.721672
							], [113.713151, 34.707638
							], [113.711283, 34.70372
							], [113.709522, 34.700263
							], [113.679186, 34.726091
							], [113.670131, 34.743415
							], [113.665388, 34.754804
							], [113.658201, 34.765599
							], [113.65892, 34.770062]
						]]
					}
				},

				// 经开
				{
					"type": "Feature",
					"id": "410185",
					"properties": {
						"name": "经开",
						"cp": [113.775447, 34.73991],
						"childNum": 1
					},
					"geometry": {
						"type": "Polygon",
						"coordinates": [[
							[113.72976, 34.768179
							], [113.737504, 34.76726
							], [113.74239, 34.766504
							], [113.751212, 34.768846
							], [113.761524, 34.771545
							], [113.784413, 34.776719
							], [113.806727, 34.780158
							], [113.81898, 34.781818
							], [113.841689, 34.781966
							], [113.860122, 34.780514
							], [113.858721, 34.757177
							], [113.858739, 34.757088
							], [113.865027, 34.748013
							], [113.864111, 34.726091
							], [113.855128, 34.704074
							], [113.832418, 34.687276
							], [113.832059, 34.687335
							], [113.827639, 34.681042
							], [113.827819, 34.680656
							], [113.824334, 34.66124
							], [113.801732, 34.65548
							], [113.79981, 34.644582
							], [113.803583, 34.638226
							], [113.785114, 34.630326
							], [113.75608, 34.657351
							], [113.726041, 34.684782
							], [113.709522, 34.700263
							], [113.711283, 34.70372
							], [113.713151, 34.707638
							], [113.717284, 34.721672
							], [113.722871, 34.72745
							], [113.732227, 34.737503
							], [113.732398, 34.738293
							], [113.732501, 34.739369
							], [113.732613, 34.74027
							], [113.732618, 34.74136
							], [113.732631, 34.742231
							], [113.732676, 34.742479
							], [113.732838, 34.744986
							], [113.732856, 34.743859
							], [113.732946, 34.748397
							], [113.732966, 34.751273
							], [113.733035, 34.753335
							], [113.733305, 34.757116
							], [113.733526, 34.761796
							], [113.72976, 34.768179]
						]]
					}
				},

				{
					"type": "Feature",
					"id": "410102",
					"properties": {
						"name": "东区",
						"cp": [113.776706, 34.860155],
						"childNum": 1
					},
					"geometry": {
						"type": "Polygon",
						"coordinates": [[
							[113.87119, 34.895279
							], [113.872269, 34.879376
							], [113.869424, 34.871803
							], [113.856298, 34.858416
							], [113.849208, 34.840027
							], [113.84844, 34.795552
							], [113.860095, 34.780596
							], [113.84354, 34.7821
							], [113.819537, 34.7821
							], [113.787629, 34.777593
							], [113.761398, 34.771604
							], [113.750978, 34.768876
							], [113.742426, 34.766563
							], [113.736821, 34.767452
							], [113.729742, 34.768223
							], [113.724927, 34.768046
							], [113.710698, 34.768728
							], [113.697798, 34.769083
							], [113.688797, 34.769602
							], [113.688761, 34.769602
							], [113.688708, 34.773375
							], [113.688672, 34.775851
							], [113.6886, 34.781114
							], [113.688474, 34.788163
							], [113.688429, 34.791008
							], [113.688429, 34.794514
							], [113.688456, 34.79796
							], [113.688465, 34.801428
							], [113.688348, 34.81275
							], [113.688115, 34.821033
							], [113.688052, 34.821514
							], [113.688285, 34.825367
							], [113.688438, 34.827804
							], [113.688627, 34.830997
							], [113.688618, 34.831397
							], [113.687692, 34.834323
							], [113.686067, 34.839315
							], [113.685016, 34.842603
							], [113.685249, 34.845455
							], [113.685438, 34.848047
							], [113.685671, 34.851172
							], [113.685932, 34.854038
							], [113.686749, 34.862961
							], [113.686785, 34.865671
							], [113.684072, 34.873016
							], [113.678377, 34.886016
							], [113.675934, 34.894158
							], [113.67791, 34.909345
							], [113.678269, 34.911506
							], [113.685025, 34.910322
							], [113.699613, 34.91121
							], [113.710824, 34.914111
							], [113.727568, 34.914466
							], [113.731736, 34.915117
							], [113.744313, 34.919557
							], [113.751427, 34.919853
							], [113.765513, 34.919794
							], [113.77349, 34.916656
							], [113.782042, 34.912335
							], [113.794402, 34.888414
							], [113.817974, 34.881071
							], [113.839533, 34.881545
							], [113.855631, 34.888177]
						]]
					}
				},

				{
					"type": "Feature",
					"id": "410122",
					"properties": {
						"name": "新密",
						"cp": [113.454178, 34.542968],
						"childNum": 1
					},
					"geometry": {
						"type": "Polygon",
						"coordinates": [[
							[113.506466, 34.349209
							], [113.468697, 34.339481
							], [113.419416, 34.358215
							], [113.413359, 34.367222
							], [113.416474, 34.383221
							], [113.411502, 34.386021
							], [113.388788, 34.382301
							], [113.347166, 34.410919
							], [113.334668, 34.414437
							], [113.328856, 34.425744
							], [113.312188, 34.440022
							], [113.297523, 34.464317
							], [113.293141, 34.480628
							], [113.284823, 34.487075
							], [113.271507, 34.487915
							], [113.230159, 34.503958
							], [113.211852, 34.500448
							], [113.199857, 34.48991
							], [113.191798, 34.492372
							], [113.186248, 34.49867
							], [113.185158, 34.507393
							], [113.193168, 34.528562
							], [113.194131, 34.540203
							], [113.187502, 34.557529
							], [113.192049, 34.580358
							], [113.183744, 34.593582
							], [113.168486, 34.602015
							], [113.205424, 34.619701
							], [113.217507, 34.617458
							], [113.256319, 34.627875
							], [113.287058, 34.63234
							], [113.311605, 34.632182
							], [113.329378, 34.637893
							], [113.342376, 34.63496
							], [113.361285, 34.620633
							], [113.36755, 34.620612
							], [113.385275, 34.632474
							], [113.389292, 34.632088
							], [113.399701, 34.620135
							], [113.410306, 34.614387
							], [113.435566, 34.616539
							], [113.450325, 34.620462
							], [113.477239, 34.655656
							], [113.510704, 34.672204
							], [113.518675, 34.669014
							], [113.523873, 34.661208
							], [113.523236, 34.648837
							], [113.538647, 34.631706
							], [113.547534, 34.630605
							], [113.566799, 34.637701
							], [113.574311, 34.637318
							], [113.583051, 34.614292
							], [113.592059, 34.606215
							], [113.603589, 34.584043
							], [113.614292, 34.575221
							], [113.62501, 34.569853
							], [113.665773, 34.561456
							], [113.673833, 34.556938
							], [113.679366, 34.51832
							], [113.685418, 34.505596
							], [113.68238, 34.498361
							], [113.661745, 34.479511
							], [113.656833, 34.459648
							], [113.649846, 34.455138
							], [113.62596, 34.452062
							], [113.596808, 34.425867
							], [113.578533, 34.421178
							], [113.574609, 34.416199
							], [113.573085, 34.397212
							], [113.568044, 34.38933
							], [113.524665, 34.36541
							], [113.516837, 34.348707
							], [113.506466, 34.349209]
						]]
					}
				},

				{
					"type": "Feature",
					"id": "410183",
					"properties": {
						"name": "新郑",
						"cp": [113.733587, 34.449192],
						"childNum": 1
					},
					"geometry": {
						"type": "Polygon",
						"coordinates": [[
							[113.881409, 34.335066
							], [113.863357, 34.333497
							], [113.840355, 34.339288
							], [113.810812, 34.34095
							], [113.792709, 34.33544
							], [113.774541, 34.323904
							], [113.749966, 34.325808
							], [113.740298, 34.323421
							], [113.705216, 34.292025
							], [113.679803, 34.280273
							], [113.671726, 34.279989
							], [113.654527, 34.286928
							], [113.644366, 34.299596
							], [113.626531, 34.312569
							], [113.602956, 34.323985
							], [113.583637, 34.324217
							], [113.558663, 34.3201
							], [113.537351, 34.324707
							], [113.528544, 34.330556
							], [113.516837, 34.348707
							], [113.524665, 34.36541
							], [113.568044, 34.38933
							], [113.573085, 34.397212
							], [113.574609, 34.416199
							], [113.578533, 34.421178
							], [113.596808, 34.425867
							], [113.62596, 34.452062
							], [113.649846, 34.455138
							], [113.656833, 34.459648
							], [113.661745, 34.479511
							], [113.68238, 34.498361
							], [113.685418, 34.505596
							], [113.679366, 34.51832
							], [113.673833, 34.556938
							], [113.665773, 34.561456
							], [113.62501, 34.569853
							], [113.603589, 34.584043
							], [113.620025, 34.581365
							], [113.63986, 34.579225
							], [113.662569, 34.580652
							], [113.689015, 34.581127
							], [113.726672, 34.584931
							], [113.753406, 34.588973
							], [113.761454, 34.594203
							], [113.75973, 34.61108
							], [113.751681, 34.616547
							], [113.739033, 34.61821
							], [113.730122, 34.626052
							], [113.739042, 34.633639
							], [113.756514, 34.625435
							], [113.775529, 34.623355
							], [113.803524, 34.637605
							], [113.810338, 34.626776
							], [113.811201, 34.630816
							], [113.820112, 34.620835
							], [113.827586, 34.613468
							], [113.835059, 34.607763
							], [113.831897, 34.572935
							], [113.826148, 34.558191
							], [113.819249, 34.537735
							], [113.811775, 34.521081
							], [113.81235, 34.50252
							], [113.81465, 34.47586
							], [113.81465, 34.454908
							], [113.824424, 34.442048
							], [113.866392, 34.463004
							], [113.888704, 34.482875
							], [113.894641, 34.468817
							], [113.908372, 34.454783
							], [113.90223, 34.452631
							], [113.883336, 34.426313
							], [113.882914, 34.413025
							], [113.889881, 34.391433
							], [113.883331, 34.372482
							], [113.893968, 34.335022
							], [113.881409, 34.335066]
						]]
					}
				},

				{
					"type": "Feature",
					"id": "410184",
					"properties": {
						"name": "中牟",
						"cp": [114.003222, 34.788563],
						"childNum": 1
					},
					"geometry": {
						"type": "Polygon",
						"coordinates": [[
							[114.100897, 34.506079
							], [114.099139, 34.495103
							], [114.090468, 34.490603
							], [114.071476, 34.496102
							], [114.044526, 34.510748
							], [114.034551, 34.508593
							], [114.022712, 34.496064
							], [114.018099, 34.484514
							], [114.019861, 34.4579
							], [114.012367, 34.44525
							], [113.987568, 34.443302
							], [113.934277, 34.454172
							], [113.908372, 34.454783
							], [113.894641, 34.468817
							], [113.888704, 34.482875
							], [113.900887, 34.489191
							], [113.91526, 34.498236
							], [113.923884, 34.505851
							], [113.924459, 34.533928
							], [113.912386, 34.547725
							], [113.889964, 34.560569
							], [113.888239, 34.576739
							], [113.88134, 34.593382
							], [113.854319, 34.622855
							], [113.836497, 34.624756
							], [113.827873, 34.615725
							], [113.8158, 34.629034
							], [113.808326, 34.636162
							], [113.809574, 34.629443
							], [113.79997, 34.64457
							], [113.801743, 34.655523
							], [113.824427, 34.661189
							], [113.827876, 34.680719
							], [113.832106, 34.687344
							], [113.855211, 34.70394
							], [113.864269, 34.72602
							], [113.865047, 34.74802
							], [113.85879, 34.757135
							], [113.860095, 34.780596
							], [113.84844, 34.795552
							], [113.849208, 34.840027
							], [113.856298, 34.858416
							], [113.869424, 34.871803
							], [113.872269, 34.879376
							], [113.87119, 34.895279
							], [113.933784, 34.898305
							], [113.955286, 34.90368
							], [114.017234, 34.957159
							], [114.051405, 34.976447
							], [114.085961, 34.982469
							], [114.12249, 34.978448
							], [114.15798, 34.94596
							], [114.173814, 34.93862
							], [114.205809, 34.936159
							], [114.210131, 34.922073
							], [114.213112, 34.88061
							], [114.204835, 34.838269
							], [114.196619, 34.837042
							], [114.15423, 34.84607
							], [114.141721, 34.839018
							], [114.143464, 34.817908
							], [114.167809, 34.776367
							], [114.163431, 34.768042
							], [114.147368, 34.753163
							], [114.1439, 34.742691
							], [114.167579, 34.709411
							], [114.156237, 34.681863
							], [114.162354, 34.672781
							], [114.153416, 34.665834
							], [114.154796, 34.649725
							], [114.168385, 34.623812
							], [114.146975, 34.621253
							], [114.136685, 34.613351
							], [114.132727, 34.590784
							], [114.106907, 34.550763
							], [114.100897, 34.506079]
						]]
					}
				},

				{
					"type": "Feature",
					"id": "410182",
					"properties": {
						"name": "龙湖",
						"cp": [113.656548, 34.624281],
						"childNum": 1
					},
					"geometry": {
						"type": "Polygon",
						"coordinates": [[
							[113.52288, 34.662918
							], [113.523994, 34.661166
							], [113.523383, 34.648843
							], [113.536427, 34.634321
							], [113.538726, 34.631736
							], [113.547386, 34.630667
							], [113.56679, 34.637736
							], [113.574371, 34.63735
							], [113.583246, 34.61427
							], [113.59223, 34.606248
							], [113.603728, 34.584199
							], [113.639516, 34.579266
							], [113.663016, 34.580752
							], [113.689247, 34.581108
							], [113.727478, 34.585031
							], [113.753206, 34.588835
							], [113.761111, 34.594006
							], [113.759458, 34.610942
							], [113.75184, 34.61629
							], [113.738905, 34.618013
							], [113.730209, 34.625796
							], [113.720651, 34.637023
							], [113.661435, 34.64035
							], [113.639013, 34.639993
							], [113.600781, 34.646824
							], [113.568299, 34.652763
							], [113.525252, 34.663096]
						]]
					}
				},

				{
					"type": "Feature",
					"id": "410185",
					"properties": {
						"name": "港区",
						"cp": [113.865817, 34.546774],
						"childNum": 1
					},
					"geometry": {
						"type": "Polygon",
						"coordinates": [[
							[113.827945, 34.615681
							], [113.836569, 34.624652
							], [113.854319, 34.622751
							], [113.881089, 34.593486
							], [113.887988, 34.576724
							], [113.889712, 34.560613
							], [113.912206, 34.547532
							], [113.924135, 34.533735
							], [113.923561, 34.505777
							], [113.888778, 34.483047
							], [113.8665, 34.463525
							], [113.824675, 34.442331
							], [113.815045, 34.454774
							], [113.814902, 34.475964
							], [113.812458, 34.502088
							], [113.811883, 34.520887
							], [113.819573, 34.538136
							], [113.832221, 34.572682
							], [113.835239, 34.607808
							], [113.826975, 34.614285]]]
					}
				},

				{
					"type": "Feature",
					"id": "410181",
					"properties": {
						"name": "建设",
						"cp": [113.547889, 34.825078],
						"childNum": 1
					},
					"geometry": {
						"type": "Polygon",
						"coordinates": [[
							[113.513951, 34.969673
							], [113.517526, 34.919283
							], [113.51034, 34.878309
							], [113.511921, 34.856215
							], [113.507825, 34.847625
							], [113.498842, 34.843063
							], [113.46485, 34.837552
							], [113.460682, 34.83376
							], [113.45752, 34.819892
							], [113.4637, 34.801695
							], [113.494961, 34.7896
							], [113.492805, 34.78379
							], [113.479007, 34.777267
							], [113.481163, 34.76339
							], [113.488637, 34.754849
							], [113.533337, 34.754078
							], [113.577677, 34.753307
							], [113.655362, 34.753425
							], [113.664813, 34.754968
							], [113.64293, 34.788592
							], [113.62367, 34.817403
							], [113.597512, 34.856985
							], [113.570634, 34.884409
							], [113.551662, 34.912357
							], [113.540882, 34.93414
							], [113.5296, 34.952485
							], [113.529384, 34.955858
							], [113.532115, 34.968638]]]
					}
				},

				{
					"type": "Feature",
					"id": "410181",
					"properties": {
						"name": "中原",
						"cp": [113.594457, 34.728776],
						"childNum": 1
					},
					"geometry": {
						"type": "Polygon",
						"coordinates": [[
							[113.488457, 34.754345
							], [113.490901, 34.746277
							], [113.488026, 34.737201
							], [113.49047, 34.732336
							], [113.519, 34.727945
							], [113.520868, 34.719934
							], [113.509514, 34.700587
							], [113.511023, 34.672211
							], [113.518856, 34.669182
							], [113.525108, 34.663304
							], [113.571676, 34.652139
							], [113.638798, 34.640261
							], [113.661507, 34.640617
							], [113.720579, 34.637172
							], [113.729059, 34.628618
							], [113.739552, 34.634796
							], [113.758811, 34.626717
							], [113.774909, 34.624934
							], [113.785257, 34.630162
							], [113.760105, 34.653208
							], [113.731215, 34.679929
							], [113.695714, 34.711745
							], [113.678754, 34.725987
							], [113.670706, 34.741294
							], [113.665172, 34.754641
							], [113.664597, 34.75479
							], [113.655758, 34.753277
							], [113.638474, 34.753307
							], [113.567544, 34.752921
							], [113.532187, 34.753752
							], [113.494099, 34.754345]
						]]
					}
				},

				{
					"type": "Feature",
					"id": "410181",
					"properties": {
						"name": "荥阳",
						"cp": [113.377714, 34.814647],
						"childNum": 1
					},
					"geometry": {
						"type": "Polygon",
						"coordinates": [[
							[113.280392, 34.763597
							], [113.278681, 34.766844
							], [113.267313, 34.769719
							], [113.250136, 34.762365
							], [113.229345, 34.75831
							], [113.18503, 34.763811
							], [113.176415, 34.775862
							], [113.16696, 34.777776
							], [113.16088, 34.788788
							], [113.173163, 34.803866
							], [113.173791, 34.822428
							], [113.163585, 34.845033
							], [113.139758, 34.86559
							], [113.164933, 34.876023
							], [113.209849, 34.885388
							], [113.246206, 34.912568
							], [113.288488, 34.936797
							], [113.335449, 34.95452
							], [113.361481, 34.970877
							], [113.391983, 34.98234
							], [113.411729, 34.983573
							], [113.439827, 34.970946
							], [113.459709, 34.966104
							], [113.48793, 34.963878
							], [113.5138, 34.969702
							], [113.51705, 34.919052
							], [113.509867, 34.878543
							], [113.511669, 34.856247
							], [113.507469, 34.847739
							], [113.498585, 34.843354
							], [113.464551, 34.837662
							], [113.460357, 34.833808
							], [113.4572, 34.819868
							], [113.463466, 34.801684
							], [113.494639, 34.789624
							], [113.492118, 34.783866
							], [113.478292, 34.777485
							], [113.480682, 34.763379
							], [113.48809, 34.755183
							], [113.490516, 34.746044
							], [113.487718, 34.73731
							], [113.490171, 34.732292
							], [113.518822, 34.727922
							], [113.520713, 34.719899
							], [113.509255, 34.700619
							], [113.510704, 34.672204
							], [113.477239, 34.655656
							], [113.450325, 34.620462
							], [113.410306, 34.614387
							], [113.399701, 34.620135
							], [113.389292, 34.632088
							], [113.385275, 34.632474
							], [113.36755, 34.620612
							], [113.361285, 34.620633
							], [113.342376, 34.63496
							], [113.329378, 34.637893
							], [113.311605, 34.632182
							], [113.287058, 34.63234
							], [113.256319, 34.627875
							], [113.217507, 34.617458
							], [113.205424, 34.619701
							], [113.202496, 34.627104
							], [113.204455, 34.635079
							], [113.209757, 34.63819
							], [113.221721, 34.638033
							], [113.245558, 34.644054
							], [113.260791, 34.653209
							], [113.264692, 34.659911
							], [113.264601, 34.674202
							], [113.271729, 34.691183
							], [113.269066, 34.710168
							], [113.274537, 34.740046
							], [113.282386, 34.759742]
						]]
					}
				}
			]
		});
	}));