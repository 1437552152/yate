webpackJsonp([1],{347:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(385),o=i.n(a),n=i(386),s=i.n(n),r=i(3),l=r(o.a,s.a,!1,null,null,null);l.options.__file="src\\views\\argu-page\\teamdetail.vue",l.esModule&&Object.keys(l.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.default=l.exports},353:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEECAMAAADERNteAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExUReXl5WhoaFNTU8XFxXd3d+Xl5Y2NjXd3d4SEhNjY2F9fX05OToCAgK6urnBwcHh4eE9PT1xcXJubm2JiYoKCgktLS0dHR2xsbFdXV46OjlVVVUxMTERERNpr+JcAAAAcdFJOUzOZzEAtLWYzMzOZzGZNjYDZslmlc+XygL9ZstlYIOCXAAAC/klEQVR42u3Z2VabUAAFUAZ7rcMlTLG25f+/s3AJSl3mqV2GhH0e8Dq8uBecHGN2P+d7lmUPzm/nuwzGGRj5JA9gzsOkm0c+5hsYMGDAKF8wYAw8MGDAKF8x8MCAAaN8wYAx8MCAASPK18ADAwaM8gUDxsADA0bAKF8DDwwYMMoXDBgDD4yAAaN8DTwwYMAoXzBgDDwwAgaM8jXwwIABo3zBgDHwBAwYMMrXwAMDBozyBQNGDDwwYMAoXwMPDBgwyheMgDHwwNwwzPPjDzCf5XF4Ur7bhdngwAMDBsw/5ufzlF/D7/TxWfkueRr+ChgwV7ZjDDwwYMAoX8t3G287+C8BGDC3Wr5gwFwrjIABA0b5GnhgwIBRvv8nh7j6pAzjJfZnf7hN13wXMEVYK3XjpaqWb60zfyVdh/3B1PGQ50WTj4kngJPScCmYi2UNE5pshHnJVzBVPZ4Pe4c5Tuf2dfl0BDgcQwhNvmAck9kwXcLNw6QHJ/VpN4QwPklF+kK6S6oiFGVfvN0ldXhLvHmYKv2e46kviglmfpJmmPFVqH85lh86Zh8v1++PUldO59hk749SW9VNPBRNfxmYiw68dcdM5y4Pyy00lHlfduOt0+Zlggkv69funcFU6UHq6uXxKfM6LOfQzGj1HmHmBVy0M0boY1bGBWYqnq99ojYE0x/Kk8uE0VavRdcuMHX8WpjNLN/pPD46Xd2uh1y/7JiwgNw4TEhtcpx3TBpsJ6TqOP8dMOTvGdKK2QdMDOvE1d1TNl2CWX17hIlVdgGYjaXczPsxAgbMdb9cbzveDAcDBozyBQPGwAMDBozyFQMPDBgwyhcMGAMPDBgwonwNPDBgwChfMGAMPDBgBIzyNfDAgAGjfMGAMfDACBgwytfAAwMGjPIFA8bAAyNgwChfAw8MGDDKFwwYA0/AgAGjfA08MGDAKF8wYMTAAwMGjPI18MCAAaN8wQgYAw8MGDDK18ADAwaM8gUDBoyBBwYMGOVr4F0zzH2iebif4zznDswZmD/pBESeAxLzIQAAAABJRU5ErkJggg=="},354:function(e,t,i){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},355:function(e,t,i){"use strict";t.__esModule=!0;var a=i(358),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,o.default)(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}()},356:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(122),o=i(124),n=function(e){return e&&e.__esModule?e:{default:e}}(o),s=i(357),r=i(361);n.default.register("modules/imageImport",s.ImageImport),n.default.register("modules/imageResize",r.ImageResize);var l=["SimSun","SimHei","Microsoft-YaHei","KaiTi","FangSong","Arial","Times-New-Roman","sans-serif"],d=n.default.import("formats/font");d.whitelist=l;var u=n.default.import("attributors/style/size");u.whitelist=["12px","14px","16px","18px","20px","22px","24px","26px","28px","30px","32px","34px","36px","38px","40px"],n.default.register(u,!0),n.default.register(d,!0);var c={action:a.BASICURL+"admin/upload",methods:"POST",token:"",name:"picUrl",size:500,accept:"image/png, image/gif, image/jpeg, image/bmp, image/x-icon"},h=[["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["12px","14px","16px","18px","20px","22px","24px","26px","28px","30px","32px","34px","36px","38px","40px"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:l}],[{align:[]}],["clean"],["link","image","video"]],p={image:function(){var e=this,t=this.container.querySelector("input.ql-image[type=file]");null===t&&(t=document.createElement("input"),t.setAttribute("type","file"),c.name&&t.setAttribute("name",c.name),t.setAttribute("accept",c.accept),t.classList.add("ql-image"),t.addEventListener("change",function(){var i=new FormData;i.append(c.name,t.files[0]),i.append("object","product"),c.token&&i.append("token",c.token);var o=new XMLHttpRequest;o.open(c.methods,c.action,!0),o.onload=function(i){if(200===o.status){var n=JSON.parse(o.responseText),s=e.quill.getSelection(!0).index;e.quill.insertEmbed(s,"image",a.BASICURL+n.ret_code),e.quill.setSelection(s+1)}t.value=""},o.upload.onloadstart=function(e){t.value=""},o.upload.onerror=function(e){},o.upload.onloadend=function(e){},o.send(i)}),this.container.appendChild(t)),t.click()}};t.default={placeholder:"",theme:"snow",modules:{toolbar:{container:h,handlers:p},imageImport:!0,imageResize:{displaySize:!0}}}},357:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ImageImport=void 0;var o=i(354),n=a(o),s=i(355),r=a(s);t.ImageImport=function(){function e(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];(0,n.default)(this,e),this.quill=t,this.handleDrop=this.handleDrop.bind(this),this.handlePaste=this.handlePaste.bind(this),this.quill.root.addEventListener("drop",this.handleDrop,!1),this.quill.root.addEventListener("paste",this.handlePaste,!1)}return(0,r.default)(e,[{key:"handleDrop",value:function(e){e.preventDefault(),e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files.length&&this.readFiles(e.dataTransfer.files,this.insert.bind(this))}},{key:"handlePaste",value:function(e){var t=this;e.clipboardData&&e.clipboardData.items&&e.clipboardData.items.length&&this.readFiles(e.clipboardData.items,function(e){t.quill.getSelection()||setTimeout(function(){return t.insert(e)},0)})}},{key:"insert",value:function(e){var t=(this.quill.getSelection()||{}).index||this.quill.getLength();this.quill.insertEmbed(t,"image",e,"user")}},{key:"readFiles",value:function(e,t){[].forEach.call(e,function(e){if(e.type.match(/^image\/(gif|jpe?g|a?png|svg|webp|bmp|vnd\.microsoft\.icon)/i)){var i=new FileReader;i.onload=function(e){t(e.target.result)};var a=e.getAsFile?e.getAsFile():e;a instanceof Blob&&i.readAsDataURL(a)}})}}]),e}()},358:function(e,t,i){e.exports={default:i(359),__esModule:!0}},359:function(e,t,i){i(360);var a=i(0).Object;e.exports=function(e,t,i){return a.defineProperty(e,t,i)}},360:function(e,t,i){var a=i(4);a(a.S+a.F*!i(9),"Object",{defineProperty:i(7).f})},361:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ImageResize=void 0;var o=i(354),n=a(o),s=i(355),r=a(s);t.ImageResize=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,n.default)(this,e),this.quill=t,this.options=i,this.handleClick=this.handleClick.bind(this),this.handleMousedown=this.handleMousedown.bind(this),this.handleMouseup=this.handleMouseup.bind(this),this.handleDrag=this.handleDrag.bind(this),this.checkImage=this.checkImage.bind(this),this.boxes=[],document.execCommand("enableObjectResizing",!1,"false"),this.quill.root.addEventListener("click",this.handleClick,!1)}return(0,r.default)(e,[{key:"handleClick",value:function(e){if(e.target&&e.target.tagName&&"IMG"==e.target.tagName.toUpperCase()){if(this.img===e.target)return;this.img&&this.hide(),this.show(e.target)}else this.img&&this.hide()}},{key:"show",value:function(e){this.img=e,this.showResizers(),this.showSizeDisplay();var t=this.img.getBoundingClientRect();this.positionBoxes(t),this.positionSizeDisplay(t)}},{key:"hide",value:function(){this.hideResizers(),this.hideSizeDisplay(),this.img=void 0}},{key:"showResizers",value:function(){this.setUserSelect("none"),this.addBox("nwse-resize"),this.addBox("nesw-resize"),this.addBox("nwse-resize"),this.addBox("nesw-resize"),document.addEventListener("keyup",this.checkImage,!0),this.quill.root.addEventListener("input",this.checkImage,!0)}},{key:"hideResizers",value:function(){document.removeEventListener("keyup",this.checkImage),this.quill.root.removeEventListener("input",this.checkImage),this.setUserSelect(""),this.setCursor(""),this.boxes.forEach(function(e){return document.body.removeChild(e)}),this.dragBox=void 0,this.dragStartX=void 0,this.preDragWidth=void 0,this.boxes=[]}},{key:"addBox",value:function(e){var t=document.createElement("div"),i={position:"absolute",height:"12px",width:"12px",backgroundColor:"white",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80",zIndex:9,cursor:e};this.extend(t.style,i,this.options.handleStyles||{}),t.addEventListener("mousedown",this.handleMousedown,!1),document.body.appendChild(t),this.boxes.push(t)}},{key:"extend",value:function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];return i.forEach(function(t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])}),e}},{key:"positionBoxes",value:function(e){var t=this;[{left:e.left-6,top:e.top-6},{left:e.left+e.width-6,top:e.top-6},{left:e.left+e.width-6,top:e.top+e.height-6},{left:e.left-6,top:e.top+e.height-6}].forEach(function(e,i){t.extend(t.boxes[i].style,{top:Math.round(e.top+window.pageYOffset)+"px",left:Math.round(e.left+window.pageXOffset)+"px"})})}},{key:"handleMousedown",value:function(e){this.dragBox=e.target,this.dragStartX=e.clientX,this.preDragWidth=this.img.width||this.img.naturalWidth,this.setCursor(this.dragBox.style.cursor),document.addEventListener("mousemove",this.handleDrag,!1),document.addEventListener("mouseup",this.handleMouseup,!1)}},{key:"handleMouseup",value:function(){this.setCursor(""),document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleMouseup)}},{key:"handleDrag",value:function(e){if(this.img){this.dragBox==this.boxes[0]||this.dragBox==this.boxes[3]?this.img.width=Math.round(this.preDragWidth-e.clientX-this.dragStartX):this.img.width=Math.round(this.preDragWidth+e.clientX-this.dragStartX);var t=this.img.getBoundingClientRect();this.positionBoxes(t),this.positionSizeDisplay(t)}}},{key:"setUserSelect",value:function(e){var t=this;["userSelect","mozUserSelect","webkitUserSelect","msUserSelect"].forEach(function(i){t.quill.root.style[i]=e,document.documentElement.style[i]=e})}},{key:"setCursor",value:function(e){[document.body,this.img,this.quill.root].forEach(function(t){return t.style.cursor=e})}},{key:"checkImage",value:function(){this.img&&this.hide()}},{key:"showSizeDisplay",value:function(){if(this.options.displaySize){this.display=document.createElement("div");var e={position:"absolute",font:"12px/1.0 Arial, Helvetica, sans-serif",padding:"4px 8px",textAlign:"center",backgroundColor:"white",color:"#333",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80",cursor:"default"};this.extend(this.display.style,e,this.options.displayStyles||{}),document.body.appendChild(this.display)}}},{key:"hideSizeDisplay",value:function(){document.body.removeChild(this.display),this.display=void 0}},{key:"positionSizeDisplay",value:function(e){if(this.display&&this.img){var t=this.getCurrentSize();if(this.display.innerHTML=t.join(" &times; "),t[0]>120&&t[1]>30){var i=this.display.getBoundingClientRect();this.extend(this.display.style,{left:Math.round(e.left+e.width+window.pageXOffset-i.width-8)+"px",top:Math.round(e.top+e.height+window.pageYOffset-i.height-8)+"px"})}else this.extend(this.display.style,{left:Math.round(e.left+e.width+window.pageXOffset+8)+"px",top:Math.round(e.top+e.height+window.pageYOffset+8)+"px"})}}},{key:"getCurrentSize",value:function(){return[this.img.width,Math.round(this.img.width/this.img.naturalWidth*this.img.naturalHeight)]}}]),e}()},385:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(123),o=i(356),n=function(e){return e&&e.__esModule?e:{default:e}}(o),s=i(122),r=localStorage.getItem("token");t.default={name:"teamdetail",components:{quillEditor:a.quillEditor},data:function(){return{content:"",quillOption:n.default,uploadUrl:s.BASICURL+"admin/upload",pic:i(353),myHeaders:{token:r},countrydata:null,formValidate:{title:"",keyword:"",type:"",des:""},ruleValidate:{title:[{required:!0,message:"产品标题不能为空",trigger:"blur"}],des:[{required:!0,message:"描述不能为空",trigger:"change"}],keyword:[{required:!0,message:"请输入关键词",trigger:"change"}],type:[{required:!0,trigger:"change",message:"请选择文章类型"}]}}},created:function(){-1!=this.$route.query.id?this.getData({id:this.$route.query.id}):this.getblank()},methods:{onEditorBlur:function(){},onEditorFocus:function(){},onEditorChange:function(e){console.log("value===>",e)},aliHandleSuccess:function(e,t){this.pic=s.BASICURL+e.ret_code},getblank:function(){this.formValidate.title="",this.formValidate.keyword="",this.formValidate.type="",this.formValidate.des="",this.content="请输入内容..."},getData:function(e){var t=this;(0,s.teamdetail)(e).then(function(e){t.formValidate.title=e.data[0].title,t.formValidate.keyword=e.data[0].keyword,t.formValidate.type=e.data[0].type,t.formValidate.des=e.data[0].des,t.pic=e.data[0].pic,t.content=e.data[0].content})},sure:function(e){var t=this;this.$refs[e].validate(function(e){if(e){var i={};i.pic=t.pic,i.title=t.formValidate.title,i.keyword=t.formValidate.keyword,i.type=t.formValidate.type,i.des=t.formValidate.des,i.content=t.content,i.Id=t.$route.query.id,-1!=t.$route.query.id?(i.content=t.content,(0,s.teamdeupdate)(i).then(function(e){200==e.status?t.$Message.success("修改成功"):t.$Message.error("修改失败")})):(i.content=t.content,(0,s.teamdeadd)(i).then(function(e){200==e.status?t.$Message.success("增加成功"):t.$Message.error("增加失败")}))}else t.$Message.error("表单验证失败!")})}}}},386:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Form",{ref:"formValidate",attrs:{model:e.formValidate,"label-width":80,rules:e.ruleValidate}},[i("div",{staticStyle:{margin:"0 auto",width:"800px"}},[i("FormItem",{attrs:{label:"产品名称",prop:"title"}},[i("Input",{attrs:{placeholder:"请输入产品名称..."},model:{value:e.formValidate.title,callback:function(t){e.$set(e.formValidate,"title",t)},expression:"formValidate.title"}})],1),e._v(" "),i("FormItem",{attrs:{label:"产品关键词",prop:"keyword"}},[i("Input",{attrs:{placeholder:"请输入产品关键词..."},model:{value:e.formValidate.keyword,callback:function(t){e.$set(e.formValidate,"keyword",t)},expression:"formValidate.keyword"}})],1),e._v(" "),i("FormItem",{attrs:{label:"产品类型",prop:"type"}},[i("Select",{model:{value:e.formValidate.type,callback:function(t){e.$set(e.formValidate,"type",t)},expression:"formValidate.type"}},[i("Option",{attrs:{value:"1"}},[e._v("真石漆系列")]),e._v(" "),i("Option",{attrs:{value:"2"}},[e._v("多彩漆系列")]),e._v(" "),i("Option",{attrs:{value:"3"}},[e._v("岩片漆系列")])],1)],1),e._v(" "),i("FormItem",{attrs:{label:"产品描述",prop:"des"}},[i("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请描述该产品..."},model:{value:e.formValidate.des,callback:function(t){e.$set(e.formValidate,"des",t)},expression:"formValidate.des"}})],1),e._v(" "),i("FormItem",{attrs:{label:"上传图片",prop:"pic"}},[i("div",{staticClass:"acc_sc"},[i("img",{staticStyle:{width:"200px",height:"170px"},attrs:{id:"aliImg",src:e.pic}}),e._v(" "),i("Upload",{ref:"upload",attrs:{name:"picUrl","show-upload-list":!1,"on-success":e.aliHandleSuccess,action:e.uploadUrl,enctype:"multipart/form-data",headers:e.myHeaders}},[i("Button",{staticStyle:{opacity:"0",width:"200px",height:"170px","margin-top":"-200px"},attrs:{type:"success",icon:"ios-cloud-upload-outline"}},[e._v("上传焦点图片")])],1)],1)]),e._v(" "),i("div",{attrs:{id:"Test"}},[i("quill-editor",{ref:"myTextEditor",staticStyle:{height:"600px",margin:"0 auto",width:"1100px"},attrs:{options:e.quillOption},on:{blur:function(t){e.onEditorBlur(t)},focus:function(t){e.onEditorFocus(t)},change:function(t){e.onEditorChange(t)}},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),e._v(" "),i("div",{staticStyle:{"margin-top":"50px",width:"200px","margin-left":"auto","margin-right":"auto",display:"flex","justify-content":"center","margin-bottom":"150px"}},[i("Button",{attrs:{type:"primary",long:""},on:{click:function(t){e.sure("formValidate")}}},[e._v("保存")]),e._v(" "),i("Button",{staticStyle:{"margin-left":"8px"},attrs:{long:""},on:{click:function(t){e.handleReset("formValidate")}}},[e._v("重置")])],1)],1)])],1)},o=[];a._withStripped=!0;var n={render:a,staticRenderFns:o};t.default=n}});