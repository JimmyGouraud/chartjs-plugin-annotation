(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{520:function(n,t,a){"use strict";a.r(t);var o=a(3),e=Object(o.a)({},(function(){var n=this._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"basic"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic"}},[this._v("#")]),this._v(" Basic")]),this._v(" "),n("chart-editor",{attrs:{code:"// <block:setup:5>\nconst DATA_COUNT = 8;\nconst MIN = 10;\nconst MAX = 100;\n\nUtils.srand(5);\n\nconst labels = [];\nfor (let i = 0; i < DATA_COUNT; ++i) {\n  labels.push('' + i);\n}\n\nconst numberCfg = {count: DATA_COUNT, min: MIN, max: MAX};\n\nconst data = {\n  labels: labels,\n  datasets: [{\n    data: Utils.numbers(numberCfg)\n  }, {\n    data: Utils.numbers(numberCfg)\n  }, {\n    data: Utils.numbers(numberCfg)\n  }]\n};\n// </block:setup>\n\n// <block:annotation1:1>\nconst annotation1 = {\n  type: 'polygon',\n  backgroundColor: 'rgba(0, 255, 255, 0.4)',\n  borderColor: 'black',\n  borderWidth: 3,\n  radius: 25,\n  scaleID: 'y',\n  xValue: (ctx) => value(ctx, 0, 2, 'x'),\n  yValue: (ctx) => value(ctx, 0, 2, 'y')\n};\n// </block:annotation1>\n\n// <block:annotation2:2>\nconst annotation2 = {\n  type: 'polygon',\n  backgroundColor: 'transparent',\n  borderColor: 'red',\n  borderWidth: 5,\n  radius: 25,\n  scaleID: 'y',\n  sides: 5,\n  xValue: (ctx) => value(ctx, 1, 4, 'x'),\n  yValue: (ctx) => value(ctx, 1, 4, 'y')\n};\n// </block:annotation2>\n\n// <block:annotation3:3>\nconst annotation3 = {\n  type: 'polygon',\n  backgroundColor: 'transparent',\n  borderColor: 'gray',\n  borderWidth: 3,\n  radius: 30,\n  sides: 8,\n  scaleID: 'y',\n  xValue: (ctx) => value(ctx, 1, 6, 'x'),\n  yValue: (ctx) => value(ctx, 1, 6, 'y')\n};\n// </block:annotation3>\n\n/* <block:config:0> */\nconst config = {\n  type: 'line',\n  data,\n  options: {\n    plugins: {\n      annotation: {\n        annotations: {\n          annotation1,\n          annotation2,\n          annotation3\n        }\n      }\n    }\n  }\n};\n/* </block:config> */\n\n// <block:utils:4>\nfunction value(ctx, datasetIndex, index, prop) {\n  const meta = ctx.chart.getDatasetMeta(datasetIndex);\n  const parsed = meta.controller.getParsed(index);\n  return parsed ? parsed[prop] : NaN;\n}\n// </block:utils>\n\nconst actions = [\n  {\n    name: 'Randomize',\n    handler: function(chart) {\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data = dataset.data.map(() => Utils.rand(MIN, MAX));\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Add data',\n    handler: function(chart) {\n      chart.data.labels.push(chart.data.labels.length);\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data.push(Utils.rand(MIN, MAX));\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Remove data',\n    handler: function(chart) {\n      chart.data.labels.shift();\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data.shift();\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Add a side to annotation 1',\n    handler: function(chart) {\n      chart.options.plugins.annotation.annotations.annotation1.sides++;\n      chart.update();\n    }\n  },\n  {\n    name: 'Remove a side from annotation 1',\n    handler: function(chart) {\n      chart.options.plugins.annotation.annotations.annotation1.sides--;\n      chart.update();\n    }\n  }\n];\n\nmodule.exports = {\n  actions: actions,\n  config: config\n};\n"}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);