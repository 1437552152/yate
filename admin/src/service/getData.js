import {
    fetch,
    post,
    BASEURL,
    patch,
    put,
    postConfig
} from './http.js';

console.log("21212",BASEURL)
export const BASEURL = BASEURL;
//post登陆接口
export const Login = data => post('admin/login', data);
//post "用户管理" => "用户详情"
export const employeeDetail = data => post('admin/system/employee/detail', data);
//post "个人中心" => "修改密码"
export const fixPersonalPW = data => post('admin/system/employee/update-password', data);

// 案例列表
export const team = data => post('/admin/team', data);
//案例详情
export const teamdetail = data => post('/admin/team/detail', data);
//案例修改
export const teamdeupdate = data => post('/admin/team/update', data);
//学生删除
export const teamdelete = data => post('/admin/team/delete', data);
//案例增加
export const teamdeadd = data => post('/admin/team/add', data);
//轮播图列表
export const carouselConfiglist = data => post('/admin/carouselConfig', data);
//轮播图增加
export const carouselConfigadd = data => post('/admin/carouselConfig/add', data);
//轮播图删除
export const carouselConfigdelete = data => post('/admin/carouselConfig/delete', data);
//轮播图修改
export const carouselConfigUpdate = data => post('/admin/carouselConfig/update', data);
//轮播图详情
export const carouselConfigdetail = data => post('/admin/carouselConfig/detail', data);

//产品类型列表
export const productConfiglist = data => post('/admin/productConfig', data);
//产品类型增加
export const productConfigadd = data => post('/admin/productConfig/add', data);
//产品类型删除
export const productConfigdelete = data => post('/admin/productConfig/delete', data);
//产品类型修改
export const productConfigUpdate = data => post('/admin/productConfig/update', data);
//产品类型详情
export const productConfigdetail = data => post('/admin/productConfig/detail', data);


//文章列表
export const newslist = data => post('/admin/news', data);
//文章详情
export const newsdetail = data => post('/admin/news/detail', data);
//文章增加
export const newsadd = data => post('/admin/news/add', data);
//文章删除
export const newsdelete = data => post('/admin/news/delete', data);
//文章修改
export const newsUpdate = data => post('/admin/news/update', data);
//公司简介
export const companylist = data => post('/admin/company', data);
//删除
export const companydelete = data => post('/admin/company/delete', data);
//公司详情
export const companydetail = data => post('/admin/company/detail', data);
//公司修改
export const companyupdate = data => post('/admin/company/update', data);
//公司增加
export const companyadd = data => post('/admin/company/add', data);


// 报名列表
// export const reportlist = data => post('/admin/reportlist/reportlist', data);
//删除
export const reportdelete = data => post('/admin/reportlist/delete', data);
//留言列表
export const messagelist = data => post('/admin/submit/messagelist', data);
//查看某一条留言
export const messagedetail = data => post('/admin/submit/messagedetail', data);
//删除留言
export const messagedelete = data => post('/admin/submit/messagedelete', data);
//留言回复
export const messageupdate = data => post('/admin/submit/messageupdate', data);



// 获取国家接口
export const country = data => post('/admin/country');
// 著名学校列表
export const schoolList = data => post('/admin/schoolList', data);
//学校删除
export const schooldelete = data => post('/admin/schooldelete', data);
// 学校增加
export const schoolAdd = data => post('/admin/school/add', data);
//学校修改
export const schoolUpdate = data => post('/admin/school/update', data);
//查看某一个学校的详情
export const schooldetail = data => post('/admin/school/detail', data);
//套餐列表
export const priceList = data => post('/admin/priceList', data);
//套餐删除
export const pricedelete = data => post('/admin/price/delete', data);
//套餐增加
export const priceadd = data => post('/admin/price/add', data);
//套餐修改
export const priceUpdate= data => post('/admin/price/update', data);
//套餐详情
export const pricedetail= data => post('/admin/price/detail', data);

//获取基础配置
export const baseConfig = data => post('/admin/getWebsiteConfig');
//修改基础设置
export const baseConfigUpdate = data => post('/admin/WebsiteConfigUpdate', data);
//获取访问地址以及ip
export const getLookRecord = data => post('/admin/getLookRecord');

// 用户列表
export const queryEmployee = data => post('/admin/getUserList', data);
//post "用户管理" => "删除用户"
export const delEmployee = data => post('admin/employee/deletes', data);

// POST "系统管理" => "角色管理"
export const roleManage = () => post('admin/useRolelist');
// POST "系统管理" => "角色管理"->"删除角色"
export const deleteRole = data => post('admin/role/delete', data);