import Vue from 'vue';
import iView from 'iview';
import { router, initRouter } from './router/index';
import { appRouter } from './router/router';
import store from './store';
import App from './app.vue';
import '@/locale';
import 'iview/dist/styles/iview.css';
import VueI18n from 'vue-i18n';
import util from '@/libs/util';
import axios from 'axios';
import qs from 'qs';
import Api from '@/config/api';
import Cookies from 'js-cookie';
import Viser from 'viser-vue';
import { setStore, getStore, removeStore } from "@/config/storage.js";
import base from '@/libs/base';

// echarts的使用
import Echart from 'echarts';
Vue.prototype.$echarts = Echart;
// 文本编辑器的使用
import VueQuillEditor from 'vue-quill-editor'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor )
Vue.prototype.$ajax = axios;
//  axios.defaults.withCredentials = true;
  axios.interceptors.response.use((response) => {
  const data = response.data
  let baseURL = response.config.baseURL;
  let url = response.config.url;
  if (data.code === 4000||response.data.code===3000) {
    Cookies.remove('user');
    Cookies.remove('userPhone');
    Cookies.remove('userInfo');
    localStorage.removeItem("token");
    router.push({ name: 'login' });
  }
  if (data.code === 5000) {
    router.push({ name: 'error-403' });
  }
  return response;
})

axios.interceptors.request.use((config) => {
  if(config.url!="admin/login"){
  const token= localStorage.getItem('token');
  config.headers['token'] = token;
  }
  config.headers['Content-Type'] = "application/x-www-form-urlencoded;charset=UTF-8"
  return config;
})

Vue.prototype.api = Api;
Vue.use(VueI18n);
Vue.use(iView);
Vue.use(Viser);
Vue.use(base)

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App),
  data: {
    currentPageName: ''
  },
  mounted() {
    this.currentPageName = this.$route.name;
    // 显示打开的页面的列表
    this.$store.commit('setOpenedList');
    this.$store.commit('initCachepage');
    // 权限菜单过滤相关
    this.$store.commit('updateMenulist');
    // iview-admin检查更新
    // util.checkUpdate(this);
    //

  },
  created() {
    let tagsList = [];
    appRouter.map((item) => {
      if (item.children.length <= 1) {
        tagsList.push(item.children[0]);
      } else {
        tagsList.push(...item.children);
      }
    });
    this.$store.commit('setTagsList', tagsList);
  }
});