(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{558:function(n,e,t){"use strict";t.r(e);var o=t(26),l=Object(o.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h1",{attrs:{id:"selecting-annotations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#selecting-annotations"}},[this._v("#")]),this._v(" Selecting annotations")]),this._v(" "),e("chart-editor",{attrs:{code:"// <block:setup:3>\nlet count = 0;\nconst selected = [];\n\nUtils.srand(8);\n\nconst data = {\n  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n  datasets: [{\n    type: 'line',\n    label: 'Dataset 1',\n    borderColor: 'rgb(54, 162, 235)',\n    borderWidth: 2,\n    fill: false,\n    data: Utils.numbers({count: 7, min: 0, max: 100}),\n  }]\n};\n// </block:setup>\n\n// <block:annotation1:1>\nconst annotation1 = {\n  type: 'box',\n  backgroundColor: 'rgba(255, 245, 157, 0.2)',\n  borderColor: 'rgb(255, 245, 157)',\n  borderWidth: 2,\n  click: ({element}) => select(element, 'rgba(255, 245, 157, 0.8)', 'rgba(255, 245, 157, 0.2)'),\n  label: {\n    display: true,\n    content: 'Yellow box annotation',\n    position: {\n      y: 'start'\n    },\n    font: {\n      size: 12\n    }\n  },\n  xMax: 'April',\n  xMin: 'February',\n  xScaleID: 'x',\n  yMax: 90,\n  yMin: 10,\n  yScaleID: 'y'\n};\n// </block:annotation1>\n\n// <block:annotation2:2>\nconst annotation2 = {\n  type: 'box',\n  backgroundColor: 'rgba(165, 214, 167, 0.2)',\n  borderColor: 'rgb(165, 214, 167)',\n  borderWidth: 2,\n  click: ({element}) => select(element, 'rgba(165, 214, 167, 0.8)', 'rgba(165, 214, 167, 0.2)'),\n  label: {\n    display: true,\n    content: 'Green box annotation',\n    position: {\n      y: 'start'\n    },\n    font: {\n      size: 12\n    }\n  },\n  xMax: 'May',\n  xMin: 'March',\n  xScaleID: 'x',\n  yMax: 75,\n  yMin: 25,\n  yScaleID: 'y'\n};\n// </block:annotation2>\n\n// <block:utils:4>\nfunction enter({chart, element}) {\n  console.log(element.label.options.content + ' entered');\n  if (!count) {\n    chart.canvas.style.cursor = 'pointer';\n  }\n  count++;\n}\n\nfunction leave({chart, element}) {\n  console.log(element.label.options.content + ' left');\n  count--;\n  if (!count) {\n    chart.canvas.style.cursor = 'default';\n  }\n}\n\nfunction select(element, selectedColor, unselectedColor) {\n  console.log(element.label.options.content + ' selected');\n  if (selected.includes(element)) {\n    selected.splice(selected.indexOf(element), 1);\n    element.options.backgroundColor = unselectedColor;\n    element.label.options.font.size = 12;\n  } else {\n    selected.push(element);\n    element.options.backgroundColor = selectedColor;\n    element.label.options.font.size = 14;\n  }\n  return true;\n}\n// </block:utils>\n\n/* <block:config:0> */\nconst config = {\n  type: 'line',\n  data,\n  options: {\n    scales: {\n      y: {\n        beginAtZero: true,\n        min: 0,\n        max: 100\n      }\n    },\n    plugins: {\n      annotation: {\n        enter: enter,\n        leave: leave,\n        common: {\n          drawTime: 'beforeDraw'\n        },\n        annotations: {\n          annotation1,\n          annotation2\n        }\n      }\n    }\n  }\n};\n/* </block:config> */\n\nmodule.exports = {\n  config: config,\n  output: 'console.log output is shown here, click one of the annotations'\n};\n"}})],1)}),[],!1,null,null,null);e.default=l.exports}}]);