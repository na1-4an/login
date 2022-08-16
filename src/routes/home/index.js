"use strict";

//require함수로 express모듈 다운로드
const express = require("express");
//app이라는 변수에 express 실행
const router = express();

const ctrl = require("./home.ctrl");

//get으로 루트경로 넣어주기
router.get("/", ctrl.hello);
router.get("/login", ctrl.login);

//router를 외부 파일에서 사용가능하게 하기
module.exports = router;