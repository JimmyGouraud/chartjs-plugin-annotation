(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{505:function(n,t,a){"use strict";a.r(t);var s=a(3),o=Object(s.a)({},(function(){var n=this._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"using-canvas-as-labels"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-canvas-as-labels"}},[this._v("#")]),this._v(" Using canvas as labels")]),this._v(" "),n("chart-editor",{attrs:{code:"// <block:setup:2>\nconst DATA_COUNT = 8;\nconst MIN = 10;\nconst MAX = 100;\n\nUtils.srand(8);\n\nconst labels = [];\nfor (let i = 0; i < DATA_COUNT; ++i) {\n  labels.push('' + i);\n}\n\nconst numberCfg = {count: DATA_COUNT, min: MIN, max: MAX};\n\nconst data = {\n  labels: labels,\n  datasets: [{\n    data: Utils.numbers(numberCfg)\n  }]\n};\n// </block:setup>\n\n// <block:annotation:1>\nconst annotation = {\n  type: 'line',\n  borderColor: 'black',\n  borderWidth: 3,\n  scaleID: 'y',\n  value: 50,\n  label: {\n    display: true,\n    content: Utils.getHouse(),\n    backgroundColor: 'white',\n    borderWidth: 3,\n    width: '40%',\n    height: '40%',\n    position: 'end'\n  }\n};\n// </block:annotation>\n\n/* <block:config:0> */\nconst config = {\n  type: 'line',\n  data,\n  options: {\n    plugins: {\n      annotation: {\n        annotations: {\n          annotation\n        }\n      }\n    }\n  }\n};\n/* </block:config> */\n\nconst actions = [\n  {\n    name: 'Randomize',\n    handler: function(chart) {\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data = dataset.data.map(() => Utils.rand(MIN, MAX));\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Add data',\n    handler: function(chart) {\n      chart.data.labels.push(chart.data.labels.length);\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data.push(Utils.rand(MIN, MAX));\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Remove data',\n    handler: function(chart) {\n      chart.data.labels.shift();\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data.shift();\n      });\n      chart.update();\n    }\n  }\n];\n\nmodule.exports = {\n  actions: actions,\n  config: config\n};\n"}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);