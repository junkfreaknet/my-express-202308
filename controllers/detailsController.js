//
const {body,validationResult}=require('express-validator');

var async=require('async');
var asyncHandler=require('express-async-handler');

var result  //result reciever query
var allDetails
//display all details
exports.details_list=asyncHandler(async(req,res,next)=>{
    //const allDetails="*****";
    /***allDetails=[
        {FirstName:"aaaaa",LastName:"bbbbb",FullName:"aaaaabbbbb"},
        {FirstName:"ccccc",LastName:"ddddd",FullName:"cccccddddd"}
    ];***/
    //console.log('abcdefg');
    //console.log(allDetails);
    //res.render('details',{details_list: allDetails});
    
    const mysql=require('mysql2');
    const cnnctn= await mysql.createConnection({
        host:'public.nhumf.tyo2.database-hosting.conoha.io',
        user:'nhumf_sion',
        password:'Noriyuki6403',
        database:'nhumf_sion'
    })
    try{
                
        //const [rows,fields]=await cnnctn.execute('select distinct syu_ymd from select_locale_child_202212011001_cp_csv');
        //console.log(rows[0]);
        //console.log(rows[0].syu_ymd);
        result=await cnnctn.execute('select distinct syu_ymd from select_locale_child_202212011001_cp_csv');
        console.log(rows[0]);
        console.log(rows[0].syu_ymd);
        allDetails=result;
    }
    catch(e){
        console.log('*****');
        console.log("*****error occured:"+e);
        console.log('*****');

    }
    finally{
        cnnctn.end();
        console.log('*****finally connection closed.');
    }

    //at last exports result
    res.render('details',{title:'display details.',details:allDetails});
})

