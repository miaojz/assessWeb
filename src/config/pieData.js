const pieData = {
  sumdata: [
    { value: 1, name: '建安投资', check: true, secondName: 'jianan' },
    { value: 3, name: '设备投资', check: true, secondName: 'shebei' },
    { value: 2.2, name: '待摊投资', check: true, secondName: 'daitan' }],
  jianan: [
    { value: 17, name: '材料费', check: false, secondName: '' },
    { value: 23, name: '施工费', check: false, secondName: '' },
  ],
  daitan: [
    { value: 17, name: '建设单位管理费', check: false, secondName: '' },
    { value: 23, name: '征地及补偿费', check: false, secondName: '' },
    { value: 27, name: '可行性研究费', check: false, secondName: '' },
    { value: 23, name: '勘察设计费', check: false, secondName: '' },
    { value: 27, name: '合同公证及监理费', check: false, secondName: '' },
    { value: 23, name: '资本化借款利息', check: false, secondName: '' },
    { value: 27, name: '中介机构审计费', check: false, secondName: '' },
    { value: 23, name: '汇兑损益', check: false, secondName: '' },
    { value: 27, name: '税金', check: false, secondName: '' },
    { value: 23, name: '工程损失', check: false, secondName: '' },
    { value: 27, name: '系统集成费', check: false, secondName: '' },
    { value: 23, name: '安全生产费', check: false, secondName: '' },
    { value: 27, name: '工程招标代理费', check: false, secondName: '' },
    { value: 23, name: '环境影响评价费', check: false, secondName: '' },
    { value: 27, name: '其他', check: false, secondName: '' },
  ],
  shebei: [
    { value: 27, name: 'LTE主设备1.8G', check: false, secondName: '' },
    { value: 23, name: 'LTE主设备2.1G', check: false, secondName: '' },
    { value: 27, name: 'LTE主设备800M', check: false, secondName: '' },
    { value: 23, name: '室内分布系统', check: false, secondName: '' },
    { value: 27, name: '无线网配套及其他', check: false, secondName: '' },
  ],
  network: [{ value: 22, name: '4G年度资本开支', check: true, secondName: 'year' },
  { value: 22, name: '本年付现成本', check: true, secondName: 'ben' }],
  year: [{ value: 22, name: '4G基站', check: false, secondName: '' },
  { value: 22, name: 'IPRAN', check: false, secondName: '' },
  { value: 22, name: '传输', check: false, secondName: '' },
  { value: 22, name: 'CN2', check: false, secondName: '' },
  { value: 22, name: '4G核心网', check: false, secondName: '' },
  { value: 22, name: '4G相关平台', check: false, secondName: '' },
  ],
  ben: [
    { value: 22, name: '铁塔租赁费', check: false, secondName: '' },
    { value: 22, name: '电费', check: false, secondName: '' },
    { value: 22, name: '油机发电服务费', check: false, secondName: '' },
    { value: 22, name: '维护费', check: false, secondName: '' },
  ],
  governmentSchoolSum: {
    '河南': [
      { name: '建设投入', value: 54121444.94, check: true, secondName: 'schooljianshe' },
      { name: '运营投入', value: 0, check: true, secondName: 'schoolyuying' }
    ],
    '信阳': [
      { name: '建设投入', value: 14224694.05, check: true, secondName: 'schooljianshe' },
      { name: '运营投入', value: 0, check: true, secondName: 'schoolyuying' }
    ]
  },
  schooljianshe: {
    '河南': [
      { name: '接入以上投入', value: 0, check: true, secondName: 'jieruyishang' },
      { name: '接入投入', value: 0, check: true, secondName: 'jieru' },
      { name: '平台投入', value: 0, check: true, secondName: 'pingtai' }
    ],
    '信阳': [
      { name: '接入以上投入', value: 0, check: true, secondName: 'jieruyishang' },
      { name: '接入投入', value: 0, check: true, secondName: 'jieru' },
      { name: '平台投入', value: 0, check: true, secondName: 'pingtai' }
    ]
  },
  jieruyishang: {
    '河南': [
      { name: '接入以上投入', value: 0, check: false, secondName: '' },
    ],
    '信阳': [
      { name: '接入以上投入', value: 0, check: false, secondName: '' },
    ]
  },
  jieru: {
    '河南': [
      { name: '接入光缆长度', value: 0, check: false, secondName: '' },
      { name: '接入光缆投资', value: 0, check: false, secondName: '' },
      { name: 'OUN设备数量', value: 0, check: false, secondName: '' },
      { name: 'OUN设备型号', value: 0, check: false, secondName: '' },
      { name: 'OUN投资', value: 0, check: false, secondName: '' },
    ],
    '信阳': [
      { name: '接入光缆长度', value: 0, check: false, secondName: '' },
      { name: '接入光缆投资', value: 0, check: false, secondName: '' },
      { name: 'OUN设备数量', value: 0, check: false, secondName: '' },
      { name: 'OUN设备型号', value: 0, check: false, secondName: '' },
      { name: 'OUN投资', value: 0, check: false, secondName: '' },
    ],
  },
  pingtai: {
    '河南': [
      { name: '信息化平台', value: 0, check: false, secondName: '' },
      { name: '集聚类设备投资', value: 0, check: false, secondName: '' },
      { name: '其他', value: 0, check: false, secondName: '' },
    ],
    '信阳': [
      { name: '信息化平台', value: 0, check: false, secondName: '' },
      { name: '集聚类设备投资', value: 0, check: false, secondName: '' },
      { name: '其他', value: 0, check: false, secondName: '' },
    ]
  },
  schoolyuying: {
    '信阳': [
      { name: '年度人力投资', value: 0, check: true, secondName: 'jiandu' },
      { name: '配套投资', value: 0, check: true, secondName: 'peitao' },
    ],
    '河南': [
      { name: '年度人力投资', value: 0, check: true, secondName: 'jiandu' },
      { name: '配套投资', value: 0, check: true, secondName: 'peitao' },
    ]
  },
  jiandu: {
    '河南':[
      { name: '人工费', value: 0, check: false, secondName: '' },
    ],
    '信阳':[
      { name: '人工费', value: 0, check: false, secondName: '' },
    ]
  },
  peitao: {
    '河南':[
      { name: '光缆维护', value: 0, check: false, secondName: '' },
      { name: '机房维护', value: 0, check: false, secondName: '' },
      { name: '电力消耗', value: 0, check: false, secondName: '' },
    ],
    '信阳':[
      { name: '光缆维护', value: 0, check: false, secondName: '' },
      { name: '机房维护', value: 0, check: false, secondName: '' },
      { name: '电力消耗', value: 0, check: false, secondName: '' },
    ]
  }
}
export default pieData