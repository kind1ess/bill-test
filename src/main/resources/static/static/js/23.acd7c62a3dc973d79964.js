webpackJsonp([23],{"1byo":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("5eyz"),n={data:function(){return{staffVoList:[{account:"string",departmentId:0,departmentName:"string",name:"string",password:"string",position:"string",staffId:"string",telephone:"string"}],value:null,search:""}},created:function(){var e=this;a.a.findAllAdminVo().then(function(t){e.staffVoList=t.data.data})},methods:{handleRowClick:function(e,t,l){console.log("row:",e,"column:",t,"event:",l)}}},o={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"container"},[l("el-select",{attrs:{placeholder:"选择部门"},on:{change:e.handleChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[l("el-option",{attrs:{label:"所有员工",value:"0"}}),e._v(" "),l("el-option",{attrs:{label:"销售部",value:"1"}}),e._v(" "),l("el-option",{attrs:{label:"仓库管理部",value:"2"}}),e._v(" "),l("el-option",{attrs:{label:"发货部",value:"3"}}),e._v(" "),l("el-option",{attrs:{label:"验收部",value:"4"}}),e._v(" "),l("el-option",{attrs:{label:"采购部",value:"5"}}),e._v(" "),l("el-option",{attrs:{label:"人事部",value:"6"}}),e._v(" "),l("el-option",{attrs:{label:"总经理",value:"7"}}),e._v(" "),l("el-option",{attrs:{label:"技术部",value:"8"}})],1),e._v(" "),l("transition",[l("el-table",{staticClass:"tb-edit",staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.staffVoList.filter(function(t){return!e.value||t.departmentId==e.value||0==e.value}),border:"",height:"90%","highlight-current-row":"",stripe:""},on:{"row-click":e.handleRowClick}},[l("el-table-column",{attrs:{label:"序号",type:"index"}}),e._v(" "),l("el-table-column",{attrs:{prop:"staffId",label:"编号","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"account",label:"账号"}}),e._v(" "),l("el-table-column",{attrs:{label:"密码"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{attrs:{size:"small",placeholder:"请输入密码"},on:{change:function(l){return e.handleEdit(t.$index,t.row)}},model:{value:t.row.password,callback:function(l){e.$set(t.row,"password",l)},expression:"scope.row.password"}}),e._v(" "),l("span",[e._v(e._s(t.row.password))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"姓名"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{attrs:{size:"small",placeholder:"请输入姓名"},on:{change:function(l){return e.handleEdit(t.$index,t.row)}},model:{value:t.row.name,callback:function(l){e.$set(t.row,"name",l)},expression:"scope.row.name"}}),e._v(" "),l("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"电话"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{attrs:{size:"small",placeholder:"请输入电话"},on:{change:function(l){return e.handleEdit(t.$index,t.row)}},model:{value:t.row.telephone,callback:function(l){e.$set(t.row,"telephone",l)},expression:"scope.row.telephone"}}),e._v(" "),l("span",[e._v(e._s(t.row.telephone))])]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"departmentName",label:"部门"}})],1)],1)],1)},staticRenderFns:[]};var r=l("C7Lr")(n,o,!1,function(e){l("GzhW")},"data-v-4cd64702",null);t.default=r.exports},GzhW:function(e,t){}});
//# sourceMappingURL=23.acd7c62a3dc973d79964.js.map