var express = require('express');
var router = express.Router();
var db = require("../db");

/* GET users listing. */
router.get('/', function(req, res, next) {
    var items=[];
    db.query('select * from t_goods_info t order by t.goods_id asc limit 0,10;', [], function(results,fields){
        for (var i =0 ;i<results.length;i++){
            items.push({
                goodsId:results[i].goods_id,
                src  :"http://p9siy919b.bkt.clouddn.com/"+results[i].main_photo,
                goodsName:results[i].goods_name,
                price:results[i].sale_price,
                pl   :results[i].month_sale_count,
                ys   :results[i].sale_count,
            });
        }
        res.render("index",{items:items});
    });
});

module.exports = router;
