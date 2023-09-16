/**************************************
@Koohik
日期:2023年9月16日
***************************************/ 
var obj = JSON.parse($response.body);
 obj.result.buttomStatus = "1";
 obj.result.objBuyStatus = "1";
 obj.result.vipButtomStatus = "0";
 obj.result.chapterObjPrice = "0.0000";
 obj.result.chapterObjSalePrice = "0.0000";
 obj.result.chapterObjIsFree = true;
$done({body : JSON.stringify(obj)});
