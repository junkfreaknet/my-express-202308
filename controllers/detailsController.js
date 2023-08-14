//
const {body,validationResult}=require('express-validator');

var async=require('async');
var asyncHandler=require('express-async-handler');

const mysql=require('mysql2');

//display all details
exports.details_list=asyncHandler(async(req,res,next)=>{
    //const allDetails="*****";
    allDetails=[
        "1","2","3","4","6"
    ];
    //console.log('abcdefg');
    //console.log(allDetails);
    //res.render('details',{details_list: allDetails});
    res.render('details',{details: ["1","2","3"]});
})

//export
