//
const mysql=require('sails-mysql');
const schema=mysql.schema;

var DetailSchema=new schema({
    jigyo_cd:{type: String},
    syu_ymd:{type: String},
    bin_kb:{type: String},
    haibun_mad:{type: String},
    ad_ten_no:{type: String},
    hiaso_course:{type: String},
    haibun_order:{type: String},
    haiso_order:{type: String},
    ten_no:{type: String},
    ten_nm_kanji:{type: String},
    num_items:{type: Number},
    price_ordered:{type: Number},
    ryohanten_cd:{type: String}
});

module.exports=DetailSchema;