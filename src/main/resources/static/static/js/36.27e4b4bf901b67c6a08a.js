webpackJsonp([36],{"B9/f":function(t,e){},bLCz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("uL8o"),r=(a("FWz8"),a("YaEn")),i=a("fCQo"),n=a("bQIR"),l={name:"BillOrderHistory",components:{Nav:s.a},data:function(){return{returnPreviewList:[]}},created:function(){var t=this;i.a.findReturnPreviewByUserId().then(function(e){t.returnPreviewList=e.data.data.commonBillPreviewList})},methods:{checkBillOrderDetail:function(t){r.a.push({name:"returnDetail",params:{billId:t}})},handleReturn:function(){n.Message.info("请选择已发货订单"),r.a.push({path:"/billOrderHistory"})}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("Nav",{staticStyle:{position:"fixed","z-index":"999"},attrs:{activeIndex:"2-3"}}),t._v(" "),a("div",{staticClass:"bill_order_history_container"},[0===t.returnPreviewList.length?a("div",{staticClass:"non_order"},[t._v("\n      您还没有归还过订单！点击\n      "),a("el-button",{attrs:{type:"text"},on:{click:t.handleReturn}},[t._v("这里")]),t._v("归还\n    ")],1):t._e(),t._v(" "),a("el-row",t._l(t.returnPreviewList,function(e){return a("el-col",{key:e.billId,attrs:{span:12}},[a("el-card",{staticClass:"order_card",attrs:{shadow:"hover"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[2===e.statusId?a("el-tag",{attrs:{type:"danger"}},[t._v(t._s(e.statusName))]):7===e.statusId?a("el-tag",{attrs:{type:"success"}},[t._v(t._s(e.statusName))]):a("el-tag",[t._v(t._s(e.statusName))]),t._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(a){return t.checkBillOrderDetail(e.billId)}}},[t._v("查看详情")])],1),t._v(" "),a("div",{staticClass:"order_id"},[a("span",{staticClass:"el-icon-s-order"}),t._v(" "),a("span",{staticClass:"content"},[t._v(t._s(e.billId))])]),t._v(" "),a("div",{staticClass:"create_time"},[a("span",{staticClass:"el-icon-time"}),t._v(" "),a("span",{staticClass:"content"},[t._v(t._s(e.createTime))])])])],1)}),1)],1),t._v(" "),a("div",{staticClass:"footer"})],1)},staticRenderFns:[]};var o=a("C7Lr")(l,c,!1,function(t){a("B9/f")},"data-v-1c044ae4",null);e.default=o.exports}});
//# sourceMappingURL=36.27e4b4bf901b67c6a08a.js.map