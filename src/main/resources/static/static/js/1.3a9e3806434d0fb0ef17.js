webpackJsonp([1],{"5jHI":function(t,e,a){"use strict";var l=a("YXSm"),o=(a("bQIR"),a("YaEn"),{props:["statusId"],data:function(){return{billPreviewList:[],odoVo:{goodsWithoutPriceList:[{amount:0,commodityName:"string",goodsId:0,id:0,refBillId:"string",specificationName:"string",unit:"string"}],odoDto:{billId:"string",createTime:"2020-05-26T10:26:03.993Z",staffId:"string",staffName:"string",staffTelephone:"string",statusId:0,statusName:"string",updateTime:"2020-05-26T10:26:03.993Z"}},dialogVisible:!1,showDialog:!1,billOdoTitle:[],currentPage:1,pageSize:8,total:0}},created:function(){this.getTotal(),this.showTable(this.statusId,this.currentPage-1,this.pageSize)},methods:{handleDetailClick:function(t){var e=this;l.a.findOdoVoById(t).then(function(t){e.odoVo=t.data.data,e.billOdoTitle[0]=t.data.data.odoDto,e.showDialog=!0,e.dialogVisible=!0})},handleRowClick:function(t,e,a){},handleEdit:function(t,e){console.log(e),console.log(this.odoVo.goodsWithoutPriceList[t])},showTable:function(t,e,a){var o=this;l.a.findOdoPreviewByStatusIdPageBy(t,e,a).then(function(t){o.billPreviewList=t.data.data.billPreviewList})},getTotal:function(){var t=this;l.a.getCountBy(this.statusId).then(function(e){t.total=e.data.data})},handleCurrentChange:function(t){this.currentPage=t,this.showTable(this.statusId,this.currentPage-1,this.pageSize)},handleSizeChange:function(t){this.pageSize=t,this.showTable(this.statusId,this.currentPage-1,this.pageSize)}}}),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.billPreviewList,border:"",height:"93%",stripe:""}},[a("el-table-column",{attrs:{label:"序号",type:"index"}}),t._v(" "),a("el-table-column",{attrs:{label:"出库单编号",width:"380px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-s-order",staticStyle:{"margin-right":"15px"}}),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.handleDetailClick(e.row.billId)}}},[t._v(t._s(e.row.billId))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time",staticStyle:{"margin-right":"15px"}}),t._v(" "),a("span",[t._v(t._s(e.row.createTime))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"更新时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time",staticStyle:{"margin-right":"15px"}}),t._v(" "),a("span",[t._v(t._s(e.row.updateTime))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[5===e.row.statusId?a("el-tag",{attrs:{type:"success"}},[t._v(t._s(e.row.statusName))]):a("el-tag",[t._v(t._s(e.row.statusName))])]}}])})],1),t._v(" "),a("div",{staticClass:"footer"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,layout:"total, prev, pager, next",background:"",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("div",[a("el-dialog",{attrs:{visible:t.dialogVisible,center:""},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-table",{attrs:{data:t.billOdoTitle,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"table-expand",attrs:{"label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"单据编号："}},[a("span",[t._v(t._s(e.row.billId))])]),t._v(" "),a("el-form-item",{attrs:{label:"创建时间："}},[a("span",[t._v(t._s(e.row.createTime))])]),t._v(" "),a("el-form-item",{attrs:{label:"修改时间："}},[a("span",[t._v(t._s(e.row.updateTime))])]),t._v(" "),a("el-form-item",{attrs:{label:"员工编号："}},[a("span",[t._v(t._s(e.row.staffId))])]),t._v(" "),a("el-form-item",{attrs:{label:"员工姓名："}},[a("span",[t._v(t._s(e.row.staffName))])]),t._v(" "),a("el-form-item",{attrs:{label:"员工电话："}},[a("span",[t._v(t._s(e.row.staffTelephone))])]),t._v(" "),a("el-form-item",{attrs:{label:"状态："}},[a("span",[t._v(t._s(e.row.statusName))])])],1)]}}],null,!1,3134300344)}),t._v(" "),a("el-table-column",{attrs:{label:"单据编号",prop:"billId","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"创建时间",prop:"createTime"}}),t._v(" "),a("el-table-column",{attrs:{label:"更新时间",prop:"updateTime"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态",prop:"statusName"}})],1),t._v(" "),a("div",{staticClass:"goods_list"},[a("el-table",{staticClass:"tb-edit",staticStyle:{width:"100%"},attrs:{data:t.odoVo.goodsWithoutPriceList,border:"","highlight-current-row":""},on:{"row-click":t.handleRowClick}},[a("el-table-column",{attrs:{label:"序号",type:"index"}}),t._v(" "),a("el-table-column",{attrs:{prop:"refBillId",label:"关联订单编号","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"goodsId",label:"产品编号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"commodityName",label:"产品名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"specificationName",label:"产品规格"}}),t._v(" "),a("el-table-column",{attrs:{prop:"unit",label:"单位"}}),t._v(" "),a("el-table-column",{attrs:{label:"出库数量"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{size:"small",placeholder:"请输入出库数量"},on:{change:function(a){return t.handleEdit(e.$index,e.row)}},model:{value:e.row.amount,callback:function(a){t.$set(e.row,"amount",a)},expression:"scope.row.amount"}}),t._v(" "),a("span",[t._v(t._s(e.row.amount))])]}}],null,!1,2407951916)})],1)],1)],1)],1)],1)},staticRenderFns:[]};var s=a("C7Lr")(o,i,!1,function(t){a("mANP")},"data-v-20601659",null);e.a=s.exports},"9/JA":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={components:{commonOdoPreivew:a("5jHI").a}},o={render:function(){var t=this.$createElement;return(this._self._c||t)("commonOdoPreivew",{attrs:{statusId:5}})},staticRenderFns:[]};var i=a("C7Lr")(l,o,!1,function(t){a("NpYC")},null,null);e.default=i.exports},NpYC:function(t,e){},mANP:function(t,e){}});
//# sourceMappingURL=1.3a9e3806434d0fb0ef17.js.map