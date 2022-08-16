"use strict";

//require함수로 express모듈 다운로드
const express = require("express");
//app이라는 변수에 express 실행
const app = express();

//라우팅
const home = require("./routes/home");

//앱 세팅
app.set("views", "./views");
//코드를 어떤 엔진으로 해석할 지 설정
app.set("view engine", "ejs");

//use: 미들웨어를 등록해주는 메서드
app.use("/", home);

module.exports = app;