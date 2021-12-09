(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{516:function(n,t,a){"use strict";a.r(t);var o=a(22),e=Object(o.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"stop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stop"}},[this._v("#")]),this._v(" Stop")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:6>\nconst DATA_COUNT = 8;\nconst MIN = 10;\nconst MAX = 100;\n\nUtils.srand(5);\n\nconst labels = [];\nfor (let i = 0; i < DATA_COUNT; ++i) {\n  labels.push('' + i);\n}\n\nconst numberCfg = {count: DATA_COUNT, min: MIN, max: MAX};\n\nconst data = {\n  labels: labels,\n  datasets: [{\n    data: Utils.numbers(numberCfg)\n  }, {\n    data: Utils.numbers(numberCfg)\n  }, {\n    data: Utils.numbers(numberCfg)\n  }]\n};\n// </block:setup>\n\n// <block:annotation1:1>\nconst annotation1 = {\n  type: 'polygon',\n  backgroundColor: 'white',\n  borderColor: 'red',\n  borderWidth: 7,\n  radius: 40,\n  rotation: 180,\n  xValue: (ctx) => value(ctx, 0, 2, 'x'),\n  yValue: (ctx) => value(ctx, 0, 2, 'y')\n};\n// </block:annotation1>\n\n// <block:annotation2:2>\nconst annotation2 = {\n  type: 'polygon',\n  backgroundColor: 'white',\n  borderColor: 'red',\n  borderWidth: 7,\n  radius: 40,\n  xValue: (ctx) => value(ctx, 0, 4, 'x'),\n  yValue: (ctx) => value(ctx, 0, 4, 'y')\n};\n// </block:annotation2>\n\n// <block:annotation3:3>\nconst annotation3 = {\n  type: 'label',\n  color: 'black',\n  content: '!',\n  font: {\n    size: 40,\n    family: 'Arial',\n    weight: 'bold'\n  },\n  xValue: (ctx) => value(ctx, 0, 4, 'x'),\n  yValue: (ctx) => value(ctx, 0, 4, 'y')\n};\n// </block:annotation5>\n\n// <block:annotation4:4>\nconst annotation4 = {\n  type: 'polygon',\n  backgroundColor: 'red',\n  borderColor: 'white',\n  borderWidth: 4,\n  radius: 40,\n  rotation: 22.5,\n  sides: 8,\n  xValue: (ctx) => value(ctx, 0, 6, 'x'),\n  yValue: (ctx) => value(ctx, 0, 6, 'y')\n};\n// </block:annotation4>\n\n// <block:annotation5:5>\nconst annotation5 = {\n  type: 'label',\n  color: 'white',\n  content: 'STOP',\n  font: {\n    size: 24\n  },\n  xValue: (ctx) => value(ctx, 0, 6, 'x'),\n  yValue: (ctx) => value(ctx, 0, 6, 'y')\n};\n// </block:annotation5>\n\n/* <block:config:0> */\nconst config = {\n  type: 'line',\n  data,\n  options: {\n    scales: {\n      y: {\n        beginAtZero: true,\n        max: 120,\n        min: 0\n      }\n    },\n    plugins: {\n      annotation: {\n        annotations: {\n          annotation1,\n          annotation2,\n          annotation3,\n          annotation4,\n          annotation5\n        }\n      }\n    }\n  }\n};\n/* </block:config> */\n\n// <block:utils:7>\nfunction value(ctx, datasetIndex, index, prop) {\n  const meta = ctx.chart.getDatasetMeta(datasetIndex);\n  const parsed = meta.controller.getParsed(index);\n  return parsed ? parsed[prop] : NaN;\n}\n// </block:utils>\n\nvar actions = [\n  {\n    name: 'Randomize',\n    handler: function(chart) {\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data = dataset.data.map(() => Utils.rand(MIN, MAX));\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Add data',\n    handler: function(chart) {\n      chart.data.labels.push(chart.data.labels.length);\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data.push(Utils.rand(MIN, MAX));\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Remove data',\n    handler: function(chart) {\n      chart.data.labels.shift();\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data.shift();\n      });\n      chart.update();\n    }\n  }\n];\n\nmodule.exports = {\n  actions: actions,\n  config: config\n};\n"}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);