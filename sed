/**************************************
@Koohik
日期:2023年7月2日
***************************************/ 
var obj = JSON.parse($response.body);
 obj.data.adTypeShow = "0";
 obj.data.userResult.vip = true;
$done({body : JSON.stringify(obj)});
