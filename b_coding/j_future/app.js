// app.js

// 호출하기
var express = require("express");
// console.log(express);

// 기능 수행하기
var app = express();

// -----------------
app.listen(3000,function(){
	console.log("웹서버가 구현되었습니다. localhost:3000번 입니다.");
});

app.get('/', function(req, res){
	res.send('<h1>당신은 지금 서버를 구축했다.</h1>');
});

app.get('/product',function(req, res){
	res.send('<p>제품 내용을 확인해보라</p>');
});
