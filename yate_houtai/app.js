/**
 * Created by 毅 on 2016/7/30.
 * 应用程序的启动（入口）文件
 */
//加载express模块
var express = require("express");
// 图片上传
var db = require("./conf/conf.js");
//加载模板处理模块
var swig = require("swig");
//加载body-parser，用来处理post提交过来的数据
var bodyParser = require("body-parser");
//加载cookies模块
var Cookies = require("cookies");
//创建app应用 => NodeJS Http.createServer();
var app = express();
//设置静态文件托管
//当用户访问的url以/public开始，那么直接返回对应__dirname + '/public'下的文件
app.use(express.static('public'));
// const cors = require('cors');
//配置应用模板
//定义当前应用所使用的模板引擎
//第一个参数：模板引擎的名称，同时也是模板文件的后缀，第二个参数表示用于解析处理模板内容的方法
app.engine("html", swig.renderFile);
//设置模板文件存放的目录，第一个参数必须是views，第二个参数是目录
app.set("views", "./views");
//注册所使用的模板引擎，第一个参数必须是 view engine，第二个参数和app.engine这个方法中定义的模板引擎的名称（第一个参数）是一致的
app.set("view engine", "html");
var logger=require('./logs/logger');
//在开发过程中，需要取消模板缓存
swig.setDefaults({
  cache: false
});
//bodyparser设置
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//设置跨域访问
//设置允许跨域访问该服务.
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "token");
  // Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  // res.header("Access-Control-Allow-Headers", "Content-Type");
  // res.header("Access-Control-Allow-Methods", "*");
  // res.header("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
  res.header("Access-Control-Max-Age","1728000");
  next();
});

app.use("/admin", require("./routes/admin"));
app.use("/user", require("./routes/user"));

var server= app.listen(8081);
var io = require('socket.io')(server);
io.on('connection', function(socket) {   
   // 想客户端传递消息
  socket.emit('news',{hello:'hello'}) 
  
  // 接收并处理客户端的hi事件
  socket.on('start', function(data) {
      // console.log("data==>",data)
      logger.info("222",data)
  })
  // 断开事件
  socket.on('disconnect', function(data) {
    logger.info("111",data)
      //socket.emit('c_leave','离开');
      //socket.broadcast用于向整个网络广播(除自己之外)
      //socket.broadcast.emit('c_leave','某某人离开了')
  })
  
});