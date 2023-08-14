//
const {body,validationResult}=require('express-validator');

var async=require('async');
var asyncHandler=require('express-async-handler');

const mysql=require('mysql2/promise');

async function getDetail(){

    var result;

    const cnnctn= await mysql.createConnection({
        host:'public.nhumf.tyo2.database-hosting.conoha.io',
        user:'nhumf_sion',
        password:'Noriyuki6403',
        database:'nhumf_sion'
    })
    try{
                
        //const [rows,fields]=await cnnctn.execute('select syu_ymd  from select_locale_child_202212011001_cp_csv order by syu_ymd,bin_kb,haibun_mad,ad_ten_no,haiso_course,haiso_order');
        const [rows,fields]=await cnnctn.execute('select syu_ymd,bin_kb,haibun_mad,ad_ten_no,haiso_course,haiso_order,haibun_order,ten_no,ten_nm_kanji,num_items,price_ordered,ryohanten_cd from select_locale_child_202212011001_cp_csv order by syu_ymd,bin_kb,haibun_mad,ad_ten_no,haiso_course,haiso_order,ten_no');
        result=rows;
        //console.log("result[0]          :"+result[0]);
        //console.log("result[0].syu_ymd  :"+result[0].syu_ymd);

    }
    catch(e){
        console.log('*****');
        console.log("*****error occured:"+e);
        console.log('*****');

    }
    finally{
        await cnnctn.end();
        console.log('*****finally connection closed and return records');
        return result;
    }
}
//display all details
exports.details_list=asyncHandler(async(req,res,next)=>{

    const allDetails= await getDetail();
    console.log("record count is    :"+allDetails.length);
    var array_return=[];   //
    var a_return;       //json for a record
    for(var i=0;i<allDetails.length;i++){
        a_row=allDetails[i];
        //console.log((i+1)+","+a_row.syu_ymd+","+a_row.bin_kb+","+a_row.haibun_mad+","+a_row.ad_ten_no+","+a_row.haiso_course+","+a_row.haiso_order+","+a_row.haibun_order+","+a_row.ten_no+","+a_row.ten_nm_kanji);
        a_return=(i+1)+","+a_row.syu_ymd+","+a_row.bin_kb+","+a_row.haibun_mad+","+a_row.ad_ten_no+","+a_row.haiso_course+","+a_row.haiso_order+","+a_row.haibun_order+","+a_row.ten_no+","+a_row.ten_nm_kanji+","+a_row.num_items+","+a_row.price_ordered+","+a_row.ryohanten_cd;
        console.log(a_return);
        array_return.push(a_return);
    }
    //console.log("allDetails         :"+allDetails[0]);
    //at last exports result
    //res.render('details',{title:'display details.',details:allDetails});
    res.render('details',{title:'display details.',details:array_return});

})

