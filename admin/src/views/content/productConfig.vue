<template>
    <div>
      <Button type="primary"  @click="reflash">刷新</Button>
       <Modal
   v-model="addModal" title="添加产品类型"
   @on-ok="ok"  @on-cancel="cancel">
           <Form :model="formItem" :label-width="100">                           
            <FormItem label="产品标题">
               <Input v-model="formItem.title" placeholder="请填写产品标题..."/>
            </FormItem>          
             <FormItem label="类型排序">
                <Input  v-model="formItem.orderBy"/>
            </FormItem>
          <FormItem label="上传图片" prop="img">
            <div class="acc_sc">
                <img  id="aliImg" :src="img" style="width: 200px;height:170px;">
                <Upload ref="upload"  name="picUrl" :show-upload-list="false"  :on-success="aliHandleSuccess"  :action="uploadUrl" enctype="multipart/form-data">
                  <Button type="primary"   icon="ios-cloud-upload-outline" style="opacity: 0;width: 200px;height: 170px;margin-top: -200px;">上传图片</Button>
                </Upload>
            </div> 
             </FormItem>             
        </Form>
    </Modal>
     <Modal
   v-model="UPModal" title="修改产品类型"
   @on-ok="okUP"  @on-cancel="cancel">
          <Form :model="formItem" :label-width="100">                           
            <FormItem label="产品标题">
               <Input v-model="formItem.title" placeholder="请填写产品标题..."/>
            </FormItem>          
             <FormItem label="类型排序">
                <Input  v-model="formItem.orderBy"/>
            </FormItem>
          <FormItem label="上传图片" prop="img">
            <div class="acc_sc">
                <img  id="aliImg" :src="img" style="width: 200px;height:170px;">
                <Upload ref="upload"  name="picUrl" :show-upload-list="false"  :on-success="aliHandleSuccess"  :action="uploadUrl" enctype="multipart/form-data">
                  <Button type="primary"   icon="ios-cloud-upload-outline" style="opacity: 0;width: 200px;height: 170px;margin-top: -200px;">上传图片</Button>
                </Upload>
            </div> 
             </FormItem>           
        </Form>
    </Modal>
        <Button type="primary"    @click="add" style="float:right">增加</Button>
        <div class="clearfix"></div>
        <Row class="margin-top-10">
          <Table :columns="tableTitle" :data="tableData"/>
        </Row>
        <Row class="pageWrapper">
          <Page :total="total"  :current="current" show-total  :page-size="10"   @on-change="changePage"></Page>
        </Row>
             </div>
</template>
<script>
import {
 productConfigdelete,
  productConfiglist,
  BASEURL,
  productConfigUpdate,
  productConfigdetail,
  productConfigadd
} from "@/service/getData";
export default {
  name: "Carousel",
  data() {
    return {
      currentPageIdx: 1,
      current: 1,
      total: 1,
      id: 0,
      addModal: false,
      UPModal: false,
      uploadUrl: BASEURL + "admin/upload",
      img:require("../../images/talkingdata.png"),  
      formItem: {
        title: "",
        orderBy: ""
      },
      tableTitle: [
         {
          title: "标题",
          key: "title",
          align:"center"
        },
        {
          title: "产品类型图标",
          key: "img",
          align:"center",
          render: (h, params) => {
            const pic = params.row.img;
            let text = "";
            return h("div", [
              h("img", {
                attrs: {
                  src: pic
                },
                style: {
                  width: "100px",
                  height: "70px"
                }
              }),
              h("span", {}, text)
            ]);
          }
        },
         {
          title: "排序",
          key: "orderBy",
          align:"center"
        },
         {
          title: "创建时间",
          key: "time",
          align:"center"
        },
        {
          title: "操作",
          align: "center",
          width: 240,
          key: "id",
          render: (h, params) => {
            const id = params.row.id;
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "20px"
                  },
                  class: {
                    // disabled: authStatus === 0 ? false : true
                  },
                  on: {
                    click: () => {
                      this.godelete(id);
                    }
                  }
                },
                "删除"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "20px"
                  },
                  class: {
                    // disabled: authStatus === 0 ? false : true
                  },
                  on: {
                    click: () => {
                      this.id = id;
                      this.goupdate(id);
                    }
                  }
                },
                "修改"
              )
            ]);
          }
        }
      ],
      tableData: []
    };
  },
  methods: {
    reflash() {
      this.$Spin.show({
        render: h => {
          return h("div", [
            h("Icon", {
              class: "demo-spin-icon-load",
              props: {
                type: "ios-loading",
                size: 18
              }
            }),
            h("div", "Loading")
          ]);
        }
      });
      this.getData({ pageNo: this.currentPageIdx, pageSize: 10 });
    },
    // 模态框的出现与隐藏
    add() {
      this.addModal = true;
      this.img =require("../../images/talkingdata.png");
      this.formItem.title = "";
       this.formItem.orderBy = "";
    },
    // 点击确定时
    ok() {
      let params = [];
      params["img"] = this.img||"";
      params["title"] = this.formItem.title;
      params["orderBy"] = this.formItem.orderBy;
      productConfigadd(params).then(res => {
        if (res.status == 200) {
          this.$Message.success(res.msg);
          this.getData({ pageNo: this.currentPageIdx, pageSize: 10 });
        } else {
          this.$Message.error(res.msg);
          this.getData({ pageNo: this.currentPageIdx, pageSize: 10 });
        }
      });
    },
    okUP() {
      let params = [];
      params["img"] = this.img || "";
      params["title"] = this.formItem.title;
      params["orderBy"] = this.formItem.orderBy;
      params["id"] = this.id;
      productConfigUpdate(params).then(res => {
        console.log(res);
        if (res.status == 200) {
          this.$Message.success(res.msg);
          this.getData({ pageNo: this.currentPageIdx, pageSize: 10 });
        } else {
          this.$Message.error(res.msg);
          this.getData({ pageNo: this.currentPageIdx, pageSize: 10 });
        }
      });
    },
    cancel() {
      this.addModal = false;
      this.UPModal = false;
    },
    aliHandleSuccess(res, file) {
      this.img = BASEURL + res.ret_code;
    },
    changePage(pageIndex) {
      this.currentPageIdx = pageIndex;
      let obj = {
        pageNo: pageIndex,
        pageSize: 10
      };
      this.getData(obj);
    },
    getData(obj) {
      productConfiglist(obj).then(res => {
        this.tableData = res.data;
        this.total = res.total;
        this.current = res.currentPage;
        this.$Spin.hide();
      });
    },
    godelete(id) {
      productConfigdelete({ id: id }).then(res => {
        if (res.status == 200) {
          this.$Message.success(res.msg);
          this.getData({ pageNo: this.currentPageIdx, pageSize: 10 });
        } else {
          this.$Message.error(res.msg);
          this.getData({ pageNo: this.currentPageIdx, pageSize: 10 });
        }
      });
    },
    productConfigIdShow(id) {
      productConfigdetail({ id: id }).then(res => {
        this.img = res.data[0].img;
        this.formItem.title = res.data[0].title;
        this.formItem.orderBy = res.data[0].orderBy;    
      });
    },
    goupdate(id) {
      this.UPModal = true;
      this. productConfigIdShow(id);
    }
  },
  created() {
    this.getData({ pageNo: this.currentPageIdx, pageSize: 10 });
  }
};
</script>
<style lang="less" scoped>
</style>
