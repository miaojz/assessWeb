module.exports = [{
  name: '投资收益评估',
  id: 'basic',
  icon:'el-icon-location',
  sub:[{
    name: '概览',
    id: 'basic',
    icon:'el-icon-location',
    componentName: 'index',
    isKeepAlive:false,
  },
    {//投资收益评估
      name: '无线网',
      id: 'basic',
      icon:'el-icon-location',
      sub: [ {
        name: '概览',
        componentName: 'index',
        isKeepAlive:false,
        icon:'el-icon-location',
      },{
        name: '宏站',
        componentName: 'index',
        isKeepAlive:false,
        icon:'el-icon-location',
        sub:[{
          name: '概览',
          componentName: 'index',
          isKeepAlive:false,
          icon:'el-icon-location',
        }]
      }, {
        name: '室分',
        componentName: 'home',
        isKeepAlive:false,
        icon:'el-icon-location',
        sub:[{
          name: '概览',
          componentName: 'index',
          isKeepAlive:false,
          icon:'el-icon-location',
        }]
      }]
    }, {
      name: '政企',
      id: 'form',
      icon:'el-icon-menu',
      sub: [{
        name: '概览',
        componentName: 'index',
        isKeepAlive:false,
        icon:'el-icon-location',
      },{
        name: '专线',
        componentName: 'index1',
        isKeepAlive:false,
        icon:'el-icon-location',
        sub:[{
          name: '概览',
          componentName: 'index',
          isKeepAlive:false,
          icon:'el-icon-location',
        }]
      }, {
        name: '校园',
        componentName: 'school',
        isKeepAlive:false,
        icon:'el-icon-location',
        sub:[{
          name: '概览',
          componentName: 'index',
          isKeepAlive:false,
          icon:'el-icon-location',
        }]
      },{
        name: 'DICI',
        componentName: 'demo',
        isKeepAlive:false,
        icon:'el-icon-location',
        sub:[{
          name: '概览',
          componentName: 'index',
          isKeepAlive:false,
          icon:'el-icon-location',
        }]
      }]
    },{
      name: '接入网',
      id: 'net',
      icon:'el-icon-s-goods',
      sub: [ {
        name: '概览',
        componentName: 'index',
        isKeepAlive:false,
        icon:'el-icon-location',
      },{
        name: '接入网',
        componentName: 'empty',
        isKeepAlive:false,
        icon:'el-icon-location',
        sub:[{
          name: '概览',
          componentName: 'index',
          isKeepAlive:false,
          icon:'el-icon-location',
        }]
      }]
    }
  ]
}]