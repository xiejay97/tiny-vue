export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'tree-base',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE 9/10/11，Chrome，Firefox，Safari 等）底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。</p>\n',
        'en-US':
          '<p> can run smoothly on PCs and mobile devices and is compatible with most browsers. (Internet Explorer 9/10/11, Chrome, Firefox, Safari, etc.) The bottom layer relies on the lightweight Canvas class library ZRender to provide intuitive, vivid, interactive, and highly personalized data visualization charts. </p>\n'
      },
      'codeFiles': ['tree/base.vue']
    },
    {
      'demoId': 'tree-demo2',
      'name': { 'zh-CN': '多树图', 'en-US': 'Multi-Tree' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['tree/demo2.vue']
    },
    {
      'demoId': 'tree-demo3',
      'name': { 'zh-CN': '径向树图', 'en-US': 'Radial Tree' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['tree/demo3.vue']
    },
    {
      'demoId': 'tree-demo4',
      'name': { 'zh-CN': '纵向树图', 'en-US': 'Longitudinal tree view' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['tree/demo4.vue']
    },
    {
      'demoId': 'tree-demo5',
      'name': { 'zh-CN': '自定义提示框内容', 'en-US': 'Customized dialog box content' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['tree/demo5.vue']
    }
  ],
  apis: [{ 'name': 'chart-tree', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
