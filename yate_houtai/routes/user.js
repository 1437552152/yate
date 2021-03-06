﻿var express = require("express");
var router = express.Router();
var db = require("../conf/conf.js");
var formaDate = require("../utils/date.js");
var multer = require("multer");
var logger=require('../logs/logger.js');
//统一返回格式
var responseData;
router.use(function (req, res, next) {
  responseData = {
    code: 0,
    message: ""
  };
  next();
});
// 字段说明
//  isShow：0 表示展示      1 表示物理删除即隐藏

//首页报名数据
router.post("/baoming", function (req, res) {
  let contact = req.body.contact;
  let mobile = req.body.mobile;
  let email = req.body.email;
  let title = req.body.title;
  let content = req.body.desc;
  let time = formatDate();
if(contact==''||mobile==''||email==''||title==''||content==''){
  res.json({
    msg: "提交失败,所有输入框的值不能为空",
    status: "201"
  });
  return false;
}
  let isShow = 0;
  let sql =
    "insert  into  reportlist(contact,mobile,email,title,content,isShow,time) values(?,?,?,?,?,?,?)";
  var params = [
    contact,
    mobile,
    email,title,content,
    isShow,time
  ];
  db.query(sql, params, function (err, results) {
    if (err) {
      throw err;
    } else {
      res.json({
        msg: "提交成功",
        status: "200"
      });
    }
  });
});

// -----------------------------------------------------------------------------------------------------------------
//得到首页新闻信息
router.get('/newslist', function (req, res) {
  var responseData = {};
  let newstype = req.query.newstype;
  let type = req.query.type;
  let sql1,sql2;
  if(newstype==1){
  //   sql1 = `SELECT * FROM  products where isShow=0 and  type=${type} limit 6`;
  //   sql2 = `SELECT * FROM  news where isShow=0 and newstype=${newstype} limit 3`; 
    sql1 = `SELECT * FROM  products where isShow=0 and  type=${type}`;
     sql2 = `SELECT * FROM  news where isShow=0 and newstype=${newstype}`; 
  }else{
     sql1 = `SELECT * FROM  products where isShow=0`;
     sql2 = `SELECT * FROM  news where isShow=0`; 
  }
    let sql = `${sql1};${sql2}`
  db.query(sql, function (err, results) {
    if (err) {
      console.log(err)
    } else {    
      responseData.newsList = results[1];
      responseData.productList = results[0];
      res.json({
        msg: "操作成功",
        status: "200",
        data: responseData
      });
    }
  });
})
// 一篇文章详情
router.get("/news/detail", function (req, res) {
  let newsId = req.query.newsId;
   let sql1 = `SELECT * FROM news where isShow=0 and newsId=(select newsId from news where newsId < ${newsId} order by newsId desc limit 1)`;
  let sql2 = `SELECT * FROM news where isShow=0 and newsId=(select newsId from news where newsId > ${newsId} order by newsId asc limit 1)`;
  let sql3 = "SELECT * FROM news where isShow=0 and newsId=" + newsId;
  let sql4 = "update news  set  view=view+1  where isShow=0 and newsId=" + newsId;
  let sql = `${sql1};${sql2};${sql3};${sql4}`
  db.query(sql, function (err, results) {
    if (err) {
      throw err;
    } else {
      res.json({
        msg: "操作成功",
        status: "200",
        data1: results[0],
        data2: results[1],
        data3: results[2],
      });
    }
  });
});
// 得到新闻列表
router.get("/news/list", function (req, res) {
  let allCount;
  let pageNo =  parseInt(req.query.pageNo)||1;
  let pageSize = parseInt(req.query.pageSize)||10;
  let sql = `SELECT COUNT(*) FROM  news where isShow=0`;
  let sql2 =
    `SELECT * FROM  news  where isShow=0  limit` +
    " " +(pageNo - 1) * pageSize +"," + pageNo * pageSize;
  function getpage(params) {
    return new Promise((resolve, reject) => db.query(params, (err, respon) => {
      if (err) {
        throw err;
        reject(err);
      } else {
        resolve(respon);
      }
    }));
  }
  getpage(sql).then(function (res) {
    allCount = res[0]["COUNT(*)"];
  return  getpage(sql2);
  }).then(function (responseData) {
    var allPage = allCount / pageSize;
    var pageStr = allPage.toString();
    // 不能整除
    if (pageStr.indexOf(".") > 0) {
      allPage = parseInt(pageStr.split(".")[0]) + 1;
    }
    res.json({
      msg: "操作成功",
      status: "200",
      totalPages: allPage,
      data: responseData,
      total: allCount,
      currentPage: parseInt(pageNo)
    });

  })
});


// 一个产品详情
router.get("/product/detail", function (req, res) {
  let productId = req.query.productId;
  let sql1 = `SELECT * FROM products where isShow=0 and productId=(select productId from products where productId < ${productId} order by productId desc limit 1)`;
  let sql2 = `SELECT * FROM products where isShow=0 and productId=(select productId from products where productId > ${productId} order by productId asc limit 1)`;
  let sql3 = "SELECT * FROM products where isShow=0 and productId=" + productId;
  let sql4 = "update products  set  view=view+1  where isShow=0 and productId=" + productId;
  let sql = `${sql1};${sql2};${sql3};${sql4}`
  db.query(sql, function (err, results) {
    if (err) {
      throw err;
    } else {
      res.json({
        msg: "操作成功",
        status: "200",
        data1: results[0],
        data2: results[1],
        data3: results[2],
      });
    }
  });
});


//得到轮播图配置
// 一篇文章详情
router.get("/getCarousel", function (req, res) {
   let sql = `SELECT * FROM Carousel where isShow=0  order by orderBy desc`;
  db.query(sql, function (err, results) {
    if (err) {
      throw err;
    } else {
      res.json({
        msg: "操作成功",
        status: "200",
        data: results,
      });
    }
  });
});

//获取网站基础配置
router.get('/getbaseConfig', function (req, res) {
    let sql = `SELECT * FROM  baseConfig`
  db.query(sql, function (err, results) {
    if (err) {
      console.log(err)
    } else {    
      res.json({
        msg: "操作成功",
        status: "200",
        data: results[0]
      });
    }
  });
})
//获取访问地址以及ip
router.get('/getAdressIp', function (req, res) {
  let address = req.query.adress;
  let browerIp = req.query.browerIp;
  let browerTime = formatDate();
  let sql = "insert  into  BrowseRecords(adress,browerTime,browerIp) values(?,?,?)";
  var params = [
    address,
    browerTime,
    browerIp
  ];
  db.query(sql,params,function (err, results) {
  if (err) {
    console.log(err)
  } else {    
    res.json({
      msg: "操作成功",
      status: "200"
    });
  }
});
})





//获取当前时间
function formatDate() {
  //把时间戳转化为日期对象
  let date = new Date();
  //调用封装，参数为日期对象和时间格式
  return formaDate.formaDate(date, "yyyy-MM-dd hh:mm");
}
//------------------------------图片上传------------------------------------------
//获取时间
function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate =
    date.getFullYear() + seperator1 + month + seperator1 + strDate;
  return currentdate.toString();
}
var datatime = "public/images/" + getNowFormatDate();
//将图片放到服务器
var storage = multer.diskStorage({
  // 如果你提供的 destination 是一个函数，你需要负责创建文件夹
  destination: datatime,
  //给上传文件重命名，获取添加后缀名
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({
  storage: storage
});
router.post("/upload", upload.single("picUrl"), function (req, res) {
  res.json({
    state: 200,
    ret_code: req.file.path.split("public/").join("")
  });
});
module.exports = router;
