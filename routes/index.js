var express = require('express');
var router = express.Router();
var db = require("../db")

/* GET home page. */
router.get('/goodsList', function(req, res, next) {
    let obj;
    db.query('select * from t_goods_info t order by t.create_time DESC', [], function(results,fields){
        //查询后的回调
        //Results代表是查询的结果，如果是插入修改等操作，则返回影响数据库信息的对象
        // fields代表查询的字段信息
        //console.log(results[0].NAME);
        // res.render('index', { name:  results[0].NAME,title:"首页"});
       //return results[0].name;
        var goodsName=[];
        console.log(results)
        for (var i =0 ;i<results.length;i++){
            goodsName.push({
                src  :"http://p9siy919b.bkt.clouddn.com/"+results[i].main_photo,
                title:results[i].goods_name,
                price:results[i].sale_price,
                pl   :results[i].month_sale_count,
                ys   :results[i].sale_count,
            });
        }
        res.json(200,{
            goodsData : goodsName,
            result    : 1
        });
        res.render("index");
    });

});

router.get('/goodsInfo', function(req, res, next) {
    let obj;
    console.log(req.query);
    db.query('select * from t_goods_info t order by t.create_time DESC', [], function(results,fields){
        //查询后的回调
        //Results代表是查询的结果，如果是插入修改等操作，则返回影响数据库信息的对象
        // fields代表查询的字段信息
        //console.log(results[0].NAME);
        // res.render('index', { name:  results[0].NAME,title:"首页"});
        //return results[0].name;
        var goodsName=[];
        for (var i =0 ;i<results.length;i++){
            goodsName.push({
                src  :"http://p9siy919b.bkt.clouddn.com/"+results[i].main_photo,
                title:results[i].goods_name,
                price:results[i].sale_price,
                pl   :results[i].month_sale_count,
                ys   :results[i].sale_count,
            });
        }
        res.json(200,{
            goodsData : goodsName,
            result    : 1
        })
    });

});

module.exports = router;
