webpackJsonp([21],{LHz6:function(e,t){},W90S:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("3cXf"),s=a.n(l),i=a("bQIR"),r=a("YaEn"),n=a("IcnI"),o=a("FSFQ"),c=(a("ehIy"),a("cJyC")),u={data:function(){return{admin:{},billPreviewList:[],shortageVo:{adminBillTitle:{billId:"string",createTime:"2020-06-04T02:03:25.495Z",staffId:"string",staffName:"string",staffTelephone:"string",statusId:0,statusName:"string",updateTime:"2020-06-04T02:03:25.495Z"},listGoods:[{amount:0,commodityName:"string",goodsId:0,id:0,specificationName:"string",unit:"string"}]},billShortageTitle:[],dialogVisible:!1,purchaseParams:{billIdList:[],billPurchase:{address:"",sendTime:""}},pickerOptions:{shortcuts:[{text:"一周后",onClick:function(e){var t=new Date;t.setTime(t.getTime()+6048e5),e.$emit("pick",t)}}]}}},created:function(){var e=this;this.admin=n.a.getters.admin,o.a.findAllShortagePreviewVoByStatusId(11).then(function(t){e.billPreviewList=t.data.data.billPreviewList,i.Message.info("请选择缺货单采购")})},methods:{handleDetailClick:function(e){var t=this;o.a.findShortageVoById(e).then(function(e){t.shortageVo=e.data.data,t.billShortageTitle[0]=e.data.data.adminBillTitle}).finally(function(){t.dialogVisible=!0})},handleSubmit:function(){var e=new Date(this.purchaseParams.billPurchase.sendTime);this.purchaseParams.billPurchase.sendTime=e.getFullYear()+"-"+this.formatZero(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),console.log(s()(this.purchaseParams)),c.a.generatePurchase(this.purchaseParams).then(function(e){r.a.push({name:"addToPurchaseSuccess",params:{billId:e.data.data}})})},formatZero:function(e){return e<10?"0"+e:e},handleSelectionChange:function(e){var t=[];e.forEach(function(e){t.push(e.billId)}),this.purchaseParams.billIdList=t}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"edit"},[a("el-input",{attrs:{placeholder:"请输入收货地址","prefix-icon":"el-icon-location-information"},model:{value:e.purchaseParams.billPurchase.address,callback:function(t){e.$set(e.purchaseParams.billPurchase,"address",t)},expression:"purchaseParams.billPurchase.address"}}),e._v(" "),a("el-date-picker",{staticStyle:{width:"100%",position:"relative","margin-top":"10px"},attrs:{type:"datetime",placeholder:"选择发货日期时间",align:"right","picker-options":e.pickerOptions},model:{value:e.purchaseParams.billPurchase.sendTime,callback:function(t){e.$set(e.purchaseParams.billPurchase,"sendTime",t)},expression:"purchaseParams.billPurchase.sendTime"}})],1),e._v(" "),a("br"),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.billPreviewList,border:"",height:"72%",stripe:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{label:"序号",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"缺货单编号",width:"380px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-s-order",staticStyle:{"margin-right":"15px"}}),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.handleDetailClick(t.row.billId)}}},[e._v(e._s(t.row.billId))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time",staticStyle:{"margin-right":"15px"}}),e._v(" "),a("span",[e._v(e._s(t.row.createTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"更新时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time",staticStyle:{"margin-right":"15px"}}),e._v(" "),a("span",[e._v(e._s(t.row.updateTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[12===t.row.statusId?a("el-tag",{attrs:{type:"success"}},[e._v(e._s(t.row.statusName))]):a("el-tag",[e._v(e._s(t.row.statusName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"70px",type:"selection"}})],1),e._v(" "),a("div",{staticClass:"footer"},[a("el-button",{staticClass:"submit_button",attrs:{type:"success",disabled:0==e.purchaseParams.billIdList.length||""==e.purchaseParams.billPurchase.address||""==e.purchaseParams.billPurchase.sendTime},on:{click:e.handleSubmit}},[e._v("提交")])],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible,center:""},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-table",{attrs:{data:e.billShortageTitle,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"table-expand",attrs:{"label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"单据编号："}},[a("span",[e._v(e._s(t.row.billId))])]),e._v(" "),a("el-form-item",{attrs:{label:"创建时间："}},[a("span",[e._v(e._s(t.row.createTime))])]),e._v(" "),a("el-form-item",{attrs:{label:"修改时间："}},[a("span",[e._v(e._s(t.row.updateTime))])]),e._v(" "),a("el-form-item",{attrs:{label:"员工编号："}},[a("span",[e._v(e._s(t.row.staffId))])]),e._v(" "),a("el-form-item",{attrs:{label:"员工姓名："}},[a("span",[e._v(e._s(t.row.staffName))])]),e._v(" "),a("el-form-item",{attrs:{label:"员工电话："}},[a("span",[e._v(e._s(t.row.staffTelephone))])]),e._v(" "),a("el-form-item",{attrs:{label:"状态："}},[a("span",[e._v(e._s(t.row.statusName))])])],1)]}}],null,!1,3134300344)}),e._v(" "),a("el-table-column",{attrs:{label:"单据编号",prop:"billId"}}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",prop:"createTime"}}),e._v(" "),a("el-table-column",{attrs:{label:"更新时间",prop:"updateTime"}}),e._v(" "),a("el-table-column",{attrs:{label:"状态",prop:"statusName"}})],1),e._v(" "),a("div",{staticClass:"goods_list"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.shortageVo.listGoods,border:""}},[a("el-table-column",{attrs:{label:"序号",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsId",label:"产品编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"commodityName",label:"产品名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"specificationName",label:"产品规格"}}),e._v(" "),a("el-table-column",{attrs:{prop:"unit",label:"单位"}}),e._v(" "),a("el-table-column",{attrs:{prop:"amount",label:"缺货数量"}})],1)],1)],1)],1)},staticRenderFns:[]};var m=a("C7Lr")(u,d,!1,function(e){a("LHz6")},"data-v-4d2dfd24",null);t.default=m.exports}});
//# sourceMappingURL=21.04b7906d1313a953b8b9.js.map