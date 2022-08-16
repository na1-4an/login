"use strict";

const PORT = 3000;
const app = require("../app")

//listen으로 서버 열기
app.listen(PORT, () => {
    console.log("서버 가동");
});