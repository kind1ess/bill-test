webpackJsonp([10],{lQj8:function(t,e){},osZi:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("ehIy"),i=(a("bQIR"),a("YaEn"),{data:function(){return{billPreviewList:[],invoiceVo:{commonListGoods:[{amount:0,commodityName:"string",goodsId:0,id:0,specificationName:"string",unit:"string"}],invoiceDto:{billId:"string",createTime:"2020-05-28T06:43:16.122Z",odoId:"string",orderId:"string",staffId:"string",staffName:"string",staffTelephone:"string",statusId:0,statusName:"string",updateTime:"2020-05-28T06:43:16.122Z",userAddress:"string",userTelephone:"string"}},billInvoiceTitle:[],dialogVisible:!1,showDialog:!1,currentPage:1,pageSize:8,total:0}},created:function(){this.getTotal(),this.showTable()},methods:{handleDetailClick:function(t){var e=this;l.a.findInvoiceVoById(t).then(function(t){e.invoiceVo=t.data.data,e.billInvoiceTitle[0]=t.data.data.invoiceDto}).finally(function(){e.dialogVisible=!0})},showTable:function(){var t=this;l.a.findAllInvoicePreviewVoPageBy(this.currentPage-1,this.pageSize).then(function(e){console.log(e),t.billPreviewList=e.data.data.billPreviewList})},getTotal:function(){var t=this;l.a.getCount().then(function(e){t.total=e.data.data})},handleCurrentChange:function(t){this.currentPage=t,this.showTable()},handleSizeChange:function(t){this.pageSize=t,this.showTable()}}}),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.billPreviewList,border:"",height:"93%",stripe:""}},[a("el-table-column",{attrs:{label:"序号",type:"index"}}),t._v(" "),a("el-table-column",{attrs:{label:"发货单编号",width:"380px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-s-order",staticStyle:{"margin-right":"15px"}}),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.handleDetailClick(e.row.billId)}}},[t._v(t._s(e.row.billId))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time",staticStyle:{"margin-right":"15px"}}),t._v(" "),a("span",[t._v(t._s(e.row.createTime))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"更新时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time",staticStyle:{"margin-right":"15px"}}),t._v(" "),a("span",[t._v(t._s(e.row.updateTime))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[5===e.row.statusId?a("el-tag",{attrs:{type:"success"}},[t._v(t._s(e.row.statusName))]):a("el-tag",[t._v(t._s(e.row.statusName))])]}}])})],1),t._v(" "),a("div",{staticClass:"footer"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,layout:"total, prev, pager, next",background:"",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("div",[a("el-dialog",{attrs:{visible:t.dialogVisible,center:""},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-table",{attrs:{data:t.billInvoiceTitle,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"table-expand",attrs:{"label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"单据编号："}},[a("span",[t._v(t._s(e.row.billId))])]),t._v(" "),a("el-form-item",{attrs:{label:"创建时间："}},[a("span",[t._v(t._s(e.row.createTime))])]),t._v(" "),a("el-form-item",{attrs:{label:"修改时间："}},[a("span",[t._v(t._s(e.row.updateTime))])]),t._v(" "),a("el-form-item",{attrs:{label:"出库单编号："}},[a("span",[t._v(t._s(e.row.odoId))])]),t._v(" "),a("el-form-item",{attrs:{label:"订货单编号："}},[a("span",[t._v(t._s(e.row.orderId))])]),t._v(" "),a("el-form-item",{attrs:{label:"员工编号："}},[a("span",[t._v(t._s(e.row.staffId))])]),t._v(" "),a("el-form-item",{attrs:{label:"员工姓名："}},[a("span",[t._v(t._s(e.row.staffName))])]),t._v(" "),a("el-form-item",{attrs:{label:"员工电话："}},[a("span",[t._v(t._s(e.row.staffTelephone))])]),t._v(" "),a("el-form-item",{attrs:{label:"客户电话："}},[a("span",[t._v(t._s(e.row.userTelephone))])]),t._v(" "),a("el-form-item",{attrs:{label:"客户地址："}},[a("span",[t._v(t._s(e.row.userAddress))])]),t._v(" "),a("el-form-item",{attrs:{label:"状态："}},[a("span",[t._v(t._s(e.row.statusName))])])],1)]}}],null,!1,3341311636)}),t._v(" "),a("el-table-column",{attrs:{label:"单据编号",prop:"billId","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"创建时间",prop:"createTime"}}),t._v(" "),a("el-table-column",{attrs:{label:"更新时间",prop:"updateTime"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态",prop:"statusName"}})],1),t._v(" "),a("div",{staticClass:"goods_list"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.invoiceVo.commonListGoods,border:""}},[a("el-table-column",{attrs:{label:"序号",type:"index"}}),t._v(" "),a("el-table-column",{attrs:{prop:"goodsId",label:"产品编号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"commodityName",label:"产品名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"specificationName",label:"产品规格"}}),t._v(" "),a("el-table-column",{attrs:{prop:"unit",label:"单位"}}),t._v(" "),a("el-table-column",{attrs:{prop:"amount",label:"发货数量"}})],1)],1)],1)],1)],1)},staticRenderFns:[]};var o=a("C7Lr")(i,s,!1,function(t){a("lQj8")},"data-v-66aaceec",null);e.default=o.exports}});
//# sourceMappingURL=10.28f288fa8399a5dceff2.js.map