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

class common{
    test(){
        console.log(121212)
    }
    echartsBar(data){
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
            yAxis:{
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
           legend:{
               show:true,
                top:'2%',
           },
           grid:{
                bottom:'12%',
                left:'8%',
                right:'8%',
           },
            series: [ {
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
                            borderWidth:'1',
                            borderColor:'rgba(204, 53, 91, 1)',
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
                            borderWidth:1,
                            borderColor:'rgba(204, 53, 91, 1)'
                        }
                    },
                    symbolRotate:0,
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
                            borderWidth:1,
                            borderColor:'rgba(204, 53, 91, 1)'
                        }
                    },
        
                    symbolRotate: 0,
                    symbolSize: [16, 6],
                    symbolOffset: ['-12', '-2'],
                    symbolPosition: 'end',
                    data: data.datanow,
                    z: 3
                },{
                    type: 'bar',
                    // stack: 1,
                    name:'同类项目平均/整体项目平均',
                    barWidth: 16, //柱子宽度
                    barGap: 0.5, //柱子之间间距
                    emphasis: {
                        itemStyle: {//左侧未填充部分鼠标移上去颜色
                            color: 'rgba(29, 102, 176, 0.45)', 
                            barBorderColor:'rgba(29, 102, 176, 1)',
                            borderWidth:'1',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(29, 102, 176, 0.25)',
                            barBorderColor:'rgba(29, 102, 176, 1)',
                            borderWidth:'1',
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
                            borderWidth:1,
                            borderColor:'rgba(29, 102, 176, 0.45)'
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
                            borderWidth:1,
                            borderColor:'rgba(29, 102, 176, 1)'
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
    diskdata(data){
    return {
        tooltip: {
            formatter: function (info) {
               // console.log(info)
                var treePathInfo=info.treePathInfo;
                var html=``;
                treePathInfo.forEach((item) => {
                    html+=item.name+':'+item.value+'<br/>'
                  });
                  return html
            }
        },
        legend: {
            data: ['建设投入','运营投入'],
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
            left:'4%',
            top:'8%',
            leafDepth: 2, //呈现层级，若为1加载时仅展开一层，接下来的每一层通过单击进入，如上面的效果图所示，  
            //每一层级呈现的样式  
            label: {
                show: true,
                formatter: "{b}: {c}"
            },
            breadcrumb:{
                bottom:'100',
                show:true
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
                    color:'#333',
                    backgroundColor:'#fff'
                },
                emphasis:{
                    color:'#666'
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
            },{
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
    chartLine(){
        var option = {
            tooltip : {
                trigger: 'axis',
            },
            legend: {
                data:['当前项目', '同类项目/整体项目平均'],
                selectedMode:false
            },
            grid:{
                bottom:'12%',
                left:'8%',
                right:'8%',
           },

            xAxis: {
                type : 'category',
                data : ['2015','2016','2017','2018','2019','2020'],
                axisLine: {
                    lineStyle: {
                      color: '#666'
                    }
                  },
                  axisTick: {
                    show: false,
                  },
            },
            yAxis:{
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
            series : [
                {
                    name:'当前项目',
                    type:'line',
                    data:[400, 374, 251, 300, 420, 400],
                    lineStyle:{
                        normal:{
                            color:'rgba(255, 0, 0, 0.6)'
                        }
                    }
                },
                {
                    name:'同类项目/整体项目平均',
                    type:'line',
                    symbol:'none',
                    itemStyle:{
                        normal:{
                          lineStyle: {
                            width:1,
                            type:'dashed',
                            //color:'#1d66b0'
                          }
                        }
                    },
                    lineStyle:{
                        normal:{
                            color:'#1d66b0'
                        }
                    },
                    data:[320, 332, 301, 334, 360, 330]
                },
                {
                    name:'',
                    type:'bar',
                    stack: '1',
                    barWidth: 6,
                    itemStyle:{
                        normal:{
                            color:'rgba(0,0,0,0)'
                        },
                        emphasis:{
                            color:'rgba(0,0,0,0)'
                        }
                    },
                    data:[320, 332, 251, 300, 360, 330]
                },
                {
                    name:'差值',
                    type:'bar',
                    stack: '1',
                    data:[
                      80, 42, 
                      {value : 50, itemStyle:{ normal:{color:'#CC355B'}}},
                      {value : 34, itemStyle:{ normal:{color:'#CC355B'}}}, 
                      60, 70
                    ]
                }
            ]
        };
           return option                 
    }
    chartMap(mapData){
        var option = {
            tooltip: {
                show: true,
            },
            visualMap: {
                type: "continuous",
                text: ["高", "低"],
                showLabel: true,
                seriesIndex: [0],
                min: 0,
                max: 100,
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
                map: "郑州",
                layoutCenter: ["50%", "50%"],
                layoutSize: "100%",
                label: {
                    emphasis: {
                        show: false
                    }
                },
                scaleLimit: {
                    min: 1.2,
                    max: 10,
                },
                itemStyle: {
                    emphasis: {
                        areaColor: "#fff464"
                    }
                },
      
            },
            series: [{
                name: "mapSer",
                type: "map",
                roam: false,
                geoIndex: 0,
                label: {
                    show: false
                },
                data: mapData
            }, ]
        }
        return option
    }
    
   
}
export default new common()
 
