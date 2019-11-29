// let utils = {
//     toPath (name) {
//         alert(0)
//     }
// };
// let utils1 = {
//     toPath (name) {
//         alert(1)
//     }
// };
// export {
//     utils,utils1
// }
import echarts from 'echarts';
class common {
    test() {
        console.log(121212)
    }
    echartsBar(data) {
        var option = {
            xAxis: {
                //show: false,
                data: data.xdata,
                axisLine: {
                    lineStyle: {
                        color: '#666'
                    }
                },
                axisTick: {
                    show: false,
                },
            },
            yAxis: {
                splitLine: { show: false },
                axisLine: {
                    lineStyle: {
                        color: '#666',
                    }
                },
                axisLabel: {
                    formatter: '{value} ',
                }
            },
            legend: {
                show: true,
                top: '2%',
            },
            grid: {
                bottom: '12%',
                left: '8%',
                right: '8%',
            },
            series: [{
                name: '当前项目',
                tooltip: {
                    show: false
                },
                type: 'bar',
                barWidth: 16, //柱子宽度
                barGap: 0.5, //柱子之间间距
                emphasis: {
                    itemStyle: {//填充部分鼠标移上去颜色
                        color: 'rgba(204, 53, 91, 0.4)'
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(204, 53, 91, 0.4)',
                        borderWidth: '1',
                        borderColor: 'rgba(204, 53, 91, 1)',
                    }
                },
                data: data.datanow,
                // 'barGap': 0,
                legendHoverLink: false,
            }, {
                name: '',
                tooltip: {
                    show: false
                },
                type: 'pictorialBar',
                itemStyle: {
                    normal: {//未填充部分鼠标移上去颜色
                        color: 'rgba(204, 53, 91, 0.4)',
                        borderWidth: 1,
                        borderColor: 'rgba(204, 53, 91, 1)'
                    }
                },
                symbolRotate: 0,
                symbolSize: [16, 6],
                symbolOffset: [-12, 2],
                symbolPosition: 'start',
                data: data.datanow,
                z: 3
            },
            {
                name: '',
                tooltip: {
                    show: false
                },
                type: 'pictorialBar',
                itemStyle: {
                    normal: {
                        color: 'rgba(204, 53, 91, 0.4)',
                        borderWidth: 1,
                        borderColor: 'rgba(204, 53, 91, 1)'
                    }
                },

                symbolRotate: 0,
                symbolSize: [16, 6],
                symbolOffset: ['-12', '-2'],
                symbolPosition: 'end',
                data: data.datanow,
                z: 3
            }, {
                type: 'bar',
                // stack: 1,
                name: '同类项目平均/整体项目平均',
                barWidth: 16, //柱子宽度
                barGap: 0.5, //柱子之间间距
                emphasis: {
                    itemStyle: {//左侧未填充部分鼠标移上去颜色
                        color: 'rgba(29, 102, 176, 0.45)',
                        barBorderColor: 'rgba(29, 102, 176, 1)',
                        borderWidth: '1',
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(29, 102, 176, 0.25)',
                        barBorderColor: 'rgba(29, 102, 176, 1)',
                        borderWidth: '1',
                    }
                },
                data: data.dataold,
            }, {
                name: '同类项目平均/整体项目平均',
                tooltip: {
                    show: false
                },
                type: 'pictorialBar',

                itemStyle: {
                    normal: {
                        color: 'rgba(29, 102, 176, 0.45)',
                        borderWidth: 1,
                        borderColor: 'rgba(29, 102, 176, 0.45)'
                    }
                },
                symbolRotate: 0,
                symbolSize: [16, 6],
                symbolOffset: [12, 2],
                symbolPosition: 'start',
                data: data.dataold,
                z: 7
            },
            {
                name: '同类项目平均/整体项目平均',
                tooltip: {
                    show: false
                },
                type: 'pictorialBar',
                itemStyle: {
                    normal: {
                        color: 'rgba(29, 102, 176, 0.45)',
                        borderWidth: 1,
                        borderColor: 'rgba(29, 102, 176, 1)'
                    }
                },
                symbolRotate: 0,
                symbolSize: [16, 6],
                symbolOffset: ['12', '-2'],
                symbolPosition: 'end',
                data: data.dataold,
                z: 7
            }
            ]
        };
        return option
    }
    diskdata(data) {
        return {
            tooltip: {
                formatter: function (info) {
                    // console.log(info)
                    var treePathInfo = info.treePathInfo;
                    var html = ``;
                    treePathInfo.forEach((item) => {
                        html += item.name + ':' + item.value + '<br/>'
                    });
                    return html
                }
            },
            legend: {
                data: ['建设投入', '运营投入'],
            },
            series: [{
                name: '全部',
                type: 'treemap',
                visibleMin: 300,
                data: data,
                // bottom:'16%',
                // left:'4%',
                // right:'10%',
                // top:'10%',
                left: '4%',
                top: '8%',
                leafDepth: 2, //呈现层级，若为1加载时仅展开一层，接下来的每一层通过单击进入，如上面的效果图所示，  
                //每一层级呈现的样式  
                label: {
                    show: true,
                    formatter: "{b}: {c}"
                },
                breadcrumb: {
                    bottom: '100',
                    show: true
                },
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1,
                        //borderColor: '#ccc'
                    }
                },
                upperLabel: {
                    normal: {
                        show: true,
                        height: 30,
                        color: '#333',
                        backgroundColor: '#fff'
                    },
                    emphasis: {
                        color: '#666'
                    }
                },
                levels: [{
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 1,
                            gapWidth: 1,
                        }
                    },
                    upperLabel: {
                        normal: {
                            show: false
                        }
                    }
                }, {
                    colorSaturation: [0.2, 0.8],
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 1,
                            gapWidth: 1
                        }
                    }
                },
                {
                    colorSaturation: [0.3, 0.7],
                    colorMappingBy: 'id',
                    itemStyle: {
                        normal: {
                            // borderColorSaturation: 0.7,
                            gapWidth: 2,
                            borderWidth: 2
                        }
                    }
                },
                ]
            }]
        };
    }
    chartLine() {
        var option = {
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                data: ['当前项目', '同类项目/整体项目平均'],
                selectedMode: false
            },
            grid: {
                bottom: '12%',
                left: '8%',
                right: '8%',
            },

            xAxis: {
                type: 'category',
                data: ['2015', '2016', '2017', '2018', '2019', '2020'],
                axisLine: {
                    lineStyle: {
                        color: '#666'
                    }
                },
                axisTick: {
                    show: false,
                },
            },
            yAxis: {
                splitLine: { show: false },
                axisLine: {
                    lineStyle: {
                        color: '#666',
                    }
                },
                axisLabel: {
                    formatter: '{value} ',
                }
            },
            series: [
                {
                    name: '当前项目',
                    type: 'line',
                    data: [400, 374, 251, 300, 420, 400],
                    lineStyle: {
                        normal: {
                            color: 'rgba(255, 0, 0, 0.6)'
                        }
                    }
                },
                {
                    name: '同类项目/整体项目平均',
                    type: 'line',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                width: 1,
                                type: 'dashed',
                                //color:'#1d66b0'
                            }
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: '#1d66b0'
                        }
                    },
                    data: [320, 332, 301, 334, 360, 330]
                },
                {
                    name: '',
                    type: 'bar',
                    stack: '1',
                    barWidth: 6,
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,0,0,0)'
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)'
                        }
                    },
                    data: [320, 332, 251, 300, 360, 330]
                },
                {
                    name: '差值',
                    type: 'bar',
                    stack: '1',
                    data: [
                        80, 42,
                        { value: 50, itemStyle: { normal: { color: '#CC355B' } } },
                        { value: 34, itemStyle: { normal: { color: '#CC355B' } } },
                        60, 70
                    ]
                }
            ]
        };
        return option
    }
    chartMap(mapData, max, min) {
        var option = {
            tooltip: {
                show: true,
            },
            visualMap: {
                type: "continuous",
                text: ["高", "低"],
                showLabel: true,
                seriesIndex: [0],
                min: min,
                max: max,
                inRange: {
                    color: ['#E6FFFF', '#3ab8f2', '#6990D5'] // 蓝绿
                },
                textStyle: {
                    color: "#000"
                },
                bottom: '-5',
                left: 0
            },
            geo: {
                roam: true,
                map: "河南",
                layoutCenter: ["40%", "50%"],
                layoutSize: "90%",
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#666'
                        }
                    },
                    emphasis: {
                        show: false,
                    }
                },
                scaleLimit: {
                    min: 1,
                    max: 10,
                },
                itemStyle: {
                    normal: {
                        areaColor: '#023677',
                        borderColor: '#1180c7',
                    },
                    emphasis: {
                        areaColor: '#4499d0',
                    }
                },

            },
            series: [{
                name: "室分",
                type: "map",
                roam: false,
                geoIndex: 0,
                label: {
                    show: true
                },
                data: mapData
            },]
        }
        return option
    }
    sfChartLine(obj) {
        var option = {
            tooltip: {},
            legend: {
                data: obj.xdata,
                x: 'center'
            },
            grid: {
                left: '4%',
                right: '4%',
                bottom: '10%',
                top: '14%',
                containLabel: true,
                borderWidth: '0'
            },
            xAxis: {
                data: ["2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月"],
                boundaryGap: true,
                axisLine: {
                    lineStyle: {
                        color: '#666',
                    }
                },
            },
            yAxis: {
                boundaryGap: true,
                splitLine: {
                    lineStyle: {
                        type: 'dotted',
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#666',
                    }
                },
                splitArea: {//背景条纹
                    show: true,
                    areaStyle: {
                        color: [
                            'rgba(255,255,255,0)',
                            'rgba(242,243,248,1)'
                        ]
                    }
                },
            },
            series: [
                {
                    name: obj.xdata[0],
                    type: 'line',
                    data: obj.data0,
                    smooth: true,
                    symbolSize: 5,
                    symbol: 'circle',
                    itemStyle: {
                        color: '#5fbdff',
                        borderColor: '#5fbdff',
                        borderWidth: 1,
                    }
                },
                {
                    name: obj.xdata[1],
                    type: 'line',
                    data: obj.data1,
                    smooth: true,
                    symbolSize: 5,
                    symbol: 'circle',
                    itemStyle: {
                        color: '#FABF77',
                        borderColor: '#FABF77',
                        borderWidth: 1,
                    }
                },
                {
                    name: obj.xdata[2],
                    type: 'line',
                    data: obj.data2,
                    smooth: true,
                    symbolSize: 5,
                    symbol: 'circle',
                    itemStyle: {
                        color: '#3CC0BA',

                        borderColor: '#3CC0BA',
                        borderWidth: 1,
                    }
                },
                {
                    name: obj.xdata[3],
                    type: 'line',
                    data: obj.data3,
                    smooth: true,
                    symbolSize: 5,
                    symbol: 'circle',
                    itemStyle: {
                        color: '#8D7FEC',
                        borderColor: '#8D7FEC',
                        borderWidth: 1,
                    }
                },

            ]
        }
        return option
    }
    sfChartPhone(xdata, num) {
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '2%',
                right: '4%',
                bottom: '14%',
                top: '16%',
                containLabel: true
            },
            legend: {
                data: ['手机数量'],
                x: 'center',
                textStyle: {
                    color: "#666"
                },
                itemWidth: 12,
                itemHeight: 10,
            },
            xAxis: {
                type: 'category',
                data: xdata,
                axisLine: {
                    lineStyle: {
                        color: '#666',

                    }
                },
                axisLabel: {
                    textStyle: {
                        fontFamily: 'Microsoft YaHei'
                    }
                },
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#666'
                    }
                },
                splitLine: {
                    show: true,
                },
                axisLabel: {}
            },
            "dataZoom": [{
                "show": true,
                "height": 12,
                "xAxisIndex": [
                    0
                ],
                bottom: '8%',
                "start": 10,
                "end": 90,
                handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                handleSize: '110%',
                handleStyle: {
                    color: "#d3dee5",
                },
                textStyle: {
                    color: "#666"
                },
                borderColor: "#90979c"
            }, {
                "type": "inside",
                "show": true,
                "height": 15,
                "start": 1,
                "end": 35
            }],
            series: [
                {
                    name: '手机数量',
                    type: 'bar',
                    barWidth: '15%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#3CC0BA'
                            }, {
                                offset: 1,
                                color: '#09bcb7'
                            }]),
                            barBorderRadius: 11,
                        }

                    },
                    //data: [400, 500, 500, 500, 500, 400,400, 500, 500]
                    data: num
                },
            ]
        };
        return option
    }
    sfChartRate(data) {
        var dianXinYongHu = data
        var option = {
            tooltip: {},
            legend: {
                data: ['投诉用户数'],
                x: 'center'
            },
            grid: {
                left: '4%',
                right: '4%',
                bottom: '10%',
                top: '14%',
                containLabel: true,
                borderWidth: '0'
            },
            xAxis: {
                data: ["2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月"],
                boundaryGap: true,
                axisLine: {
                    lineStyle: {
                        color: '#666',
                    }
                },
            },
            yAxis: {
                boundaryGap: true,
                splitLine: {
                    lineStyle: {
                        type: 'dotted',
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#666',
                    }
                },
                splitArea: {//背景条纹
                    show: true,
                    areaStyle: {
                        color: [
                            'rgba(255,255,255,0)',
                            'rgba(242,243,248,1)'
                        ]
                    }
                },
            },
            series: [
                {
                    name: "投诉用户数",
                    type: 'line',
                    data: dianXinYongHu,
                    smooth: true,
                    itemStyle: {
                        normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: '#1a75bb' // 0% 处的颜色
                            }, {
                                offset: 0.5,
                                color: '#1a75bb' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#04122a' // 100% 处的颜色
                            }]), //背景渐变色
                            lineStyle: { // 系列级个性化折线样式
                                width: 0.5,
                                type: 'solid',
                                color: "#02675f"
                            }
                        },
                        emphasis: {
                            color: '#02675f',
                            lineStyle: { // 系列级个性化折线样式
                                width: 0.5,
                                type: 'dotted',
                                color: "#02675f" //折线的颜色
                            }
                        }
                    }, //线条样式
                    symbolSize: 5, //折线点的大小
                    areaStyle: {
                        normal: {}
                    },

                }
            ]
        }
        return option
    }
    sfChartPie(yewu) {
        var color = ["#8d7fec", "#5085f2", "#41C4BE", "#6A89CC", "#6F43BF", "#82CCDD", "#f59a8f", "#FABF77", "#5FBDFF", "#cf9ef1"];
        var xdata = []
        yewu.map(item => {
            xdata.push(item.name)
        })
        var option = {
            color: color,
            legend: {
                orient: "vartical",
                //x: "right",
                top: "center",
                right: "20%",
                bottom: "0%",
                data: xdata,
                itemWidth: 8,
                itemHeight: 8,
                itemGap: 16,
                formatter: function (name) {
                    return '' + name
                }
            },
            series: [{
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 2, //最小的扇区角度（0 ~ 360）
                radius: ["40%", "70%"],
                center: ["30%", "50%"],
                avoidLabelOverlap: false,
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#ffffff',
                        borderWidth: 6,
                    },
                },
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: '{text|{b}}\n({d}%)',
                        rich: {
                            text: {
                                color: "#666",
                                fontSize: 14,
                                align: 'center',
                                verticalAlign: 'middle',
                                padding: 8
                            },
                            value: {
                                color: "#8693F3",
                                fontSize: 16,
                                align: 'center',
                                verticalAlign: 'middle',
                            },
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: 16,
                        }
                    }
                },
                data: yewu
            }]
        };
        return option
    }
    jmchartBar(obj) {
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '2%',
                right: '4%',
                bottom: '14%',
                top: '16%',
                containLabel: true
            },
            legend: {
                data: ['8月', '9月', '10月'],
                right: 10,
                top: 12,
                textStyle: {
                    color: "black"
                },
                itemWidth: 12,
                itemHeight: 10,
            },
            xAxis: {
                type: 'category',
                data: obj.xdata,
                axisLine: {
                    lineStyle: {
                        color: '#666'

                    }
                },
                axisLabel: {
                    textStyle: {
                        fontFamily: 'Microsoft YaHei'
                    }
                },
            },

            yAxis: {
                type: 'value',
                max: '1200',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'black'
                    }
                },
                splitLine: {
                    show: true,

                },
                axisLabel: {}
            },
            "dataZoom": [{
                "show": true,
                "height": 12,
                "xAxisIndex": [
                    0
                ],
                bottom: '8%',
                "start": 10,
                "end": 90,
                handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                handleSize: '110%',
                handleStyle: {
                    color: "#666",

                },
                textStyle: {
                    color: "#666"
                },
                borderColor: "#90979c"
            }, {
                "type": "inside",
                "show": true,
                "height": 15,
                "start": 1,
                "end": 35
            }],
            series: [{
                name: '8月',
                type: 'bar',
                barWidth: '15%',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#FABF77'
                        }, {
                            offset: 1,
                            color: '#f5804d'
                        }]),
                        barBorderRadius: 12,
                    },
                },
                data: obj.month1,
            },
            {
                name: '9月',
                type: 'bar',
                barWidth: '15%',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#3CC0BA'
                        }, {
                            offset: 1,
                            color: '#09bcb7'
                        }]),
                        barBorderRadius: 11,
                    }

                },
                data: obj.month2
            },
            {
                name: '10月',
                type: 'bar',
                barWidth: '15%',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#5FBDFF'
                        }, {
                            offset: 1,
                            color: '#6851f1'
                        }]),
                        barBorderRadius: 11,
                    }
                },
                data: obj.month3,
            }]
        };
        return option
    }
}
export default new common()

