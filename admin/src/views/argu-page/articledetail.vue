<template>
  <div>

 <Form :model="formValidate" :label-width="80" ref="formValidate" :rules="ruleValidate">
     <div style="margin:0 auto;width:800px">
        <FormItem label="文章标题" prop="title">
            <Input v-model="formValidate.title" placeholder="请输入文章标题..."/>
        </FormItem>
        <FormItem label="文章作者" prop="author">
            <Input v-model="formValidate.author" placeholder="请输入文章作者..."/>
        </FormItem>
         <FormItem label="文章描述" prop="des">
            <Input v-model="formValidate.des"  type="textarea"  placeholder="请输入描述内容..."/>
        </FormItem>
         <FormItem label="文章关键词" prop="keyword">
            <Input v-model="formValidate.keyword" placeholder="请输入文章关键词..."/>
        </FormItem>
        <FormItem label="文章类型" prop="newstype">
            <Select v-model="formValidate.newstype">
                <Option value="0">普通文章</Option>
                <Option value="1">热点文章</Option>             
            </Select>
        </FormItem>
        <FormItem label="上传图片" prop="pic">
        <div class="acc_sc">
             <img  id="aliImg" style="width: 200px;height:170px;" :src="pic">
            <Upload ref="upload"  name="picUrl" :show-upload-list="false"  :on-success="aliHandleSuccess"  :action="uploadUrl" enctype="multipart/form-data" :headers="myHeaders">
              <Button type="success"   icon="ios-cloud-upload-outline" style="opacity: 0;width: 200px;height: 170px;margin-top: -200px;">上传焦点图片</Button>
            </Upload>
            <div class="clearfix"></div>
        </div>
         <div class="clearfix"></div>
         </FormItem>
          </div>
      <div id="Test">
      <quill-editor ref="myTextEditor"
                v-model="content" :options="quillOption"  style="height:600px;margin:0 auto;width:1100px"   @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
        @change="onEditorChange($event)">
      </quill-editor>
    </div>
    <div  style="margin-top:50px;width:200px;margin-left:auto;margin-right:auto;display: flex;justify-content: center;margin-bottom:150px;">
        <Button type="primary" long  @click="sure('formValidate')">保存</Button>
        <Button style="margin-left: 8px" long @click="handleReset('formValidate')">清空</Button>
      </div>
    </Form>
 
  </div>
</template>
<script>
import {
  BASEURL,
  newsdetail,
  newsUpdate,
  newsadd,
  country
} from "@/service/getData";
import { quillEditor } from "vue-quill-editor";
import quillConfig from "../../libs/quill-config.js";
 const token= localStorage.getItem('token');
export default {
  name: "articledetail",
  components: {
    quillEditor
  },
  data() {
    return {
      uploadUrl: BASEURL + "admin/upload",
      pic: require("../../images/talkingdata.png"),
        myHeaders: {token: token},
      countrydata: null,
      formValidate: {
        title: "",
        author: "",
        des: "",
        keyword: "",
        newstype: "0"
      },
      content: "",
      article: "",
      quillOption: quillConfig,
      ruleValidate: {
        title: [
          {
            required: true,
            message: "文章标题不能为空",
            trigger: "blur"
          }
        ],
        author: [
          {
            required: true,
            message: "文章作者",
            trigger: "blur"
          }
        ],
        des: [
          {
            required: true,
            message: "描述不能为空",
            trigger: "change"
          }
        ],
        keyword: [
          { required: true, message: "请输入关键词", trigger: "change" }
        ],
        newstype: [
          {
            required: true,
            trigger: "change",
            message: "请选择文章类型"
          }
        ]
      }
    };
  },
  created() {
    if (this.$route.query.id != -1) {
      console.log("test===>");
      this.getData({ id: this.$route.query.id });
    } else {
      this.getblank();
    }
  },
  methods: {
    onEditorBlur() {
      //失去焦点事件
    },
    onEditorFocus() {
      //获得焦点事件
    },
    onEditorChange(value) {
      //内容改变事件
      this.article = value.html;
    },
    aliHandleSuccess(res, file) {
      this.pic = BASEURL + res.ret_code;
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    getblank() {
      this.formValidate.title = "";
      this.formValidate.author = "";
      this.formValidate.des = "";
      this.formValidate.keyword = "";
      this.formValidate.newstype = "";
      this.content = "";
      this.article = "";
      this.articlenewstype = "0";
    },
    getData(params) {
      newsdetail(params).then(res => {
        this.formValidate.title = res.data[0].title;
        this.formValidate.author = res.data[0].author;
        this.formValidate.des = res.data[0].des;
        this.formValidate.keyword = res.data[0].keyword;
        this.formValidate.newstype = res.data[0].newstype;
        this.pic = res.data[0].focusPic;
        this.content = this.article = res.data[0].content;
      });
    },
    handleChange(html, text) {
      // console.log("html===>", html);
      // this.article = html;
    },

    sure(name) {
      this.$refs[name].validate(valid => {
         if (valid) {
           let params = [];
          params["pic"] = this.pic;
          params["title"] = this.formValidate.title;
          params["author"] = this.formValidate.author;
          params["des"] = this.formValidate.des;
          params["newstype"] = this.formValidate.newstype;
          params["content"] = this.content;
          params["keyword"] = this.formValidate.keyword;
          params["Id"] = this.$route.query.id;
          if (this.$route.query.id != -1) {
            params["content"] = this.article;
            newsUpdate(params).then(res => {
              if (res.status == 200) {
                this.$Message.success("修改成功");
              } else {
                this.$Message.error("修改失败");
              }
            });
          } else {
            params["content"] = this.article;
            newsadd(params).then(res => {
              console.log(res)
              if (res.status == 200) {
                this.$Message.success("增加成功");
              } else {
                this.$Message.error("增加失败");
              }
            });
          }
        } else {
          this.$Message.error("表单验证失败!");
        }
      });
    }
  }
};
</script>

<style>
</style>
