"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file 路由
 * @author 炽翎
 */
var express_1 = require("express");
var dataBase = {};
var router = express_1.Router();
// 获取分类列表
router.get('/getClass', function (req, res) {
    res.send('getClass');
});
// 获取列表
router.get('/getList', function (req, res) {
    res.send('getList');
});
// 添加分类
router.post('/addClass', function (req, res) {
    res.send('addClass');
});
// 添加列表
router.post('/addList', function (req, res) {
    res.send('addList');
});
// 删除分类
router.post('/deleteClass', function (req, res) {
    res.send('deleteClass');
});
// 删除列表
router.post('/deleteList', function (req, res) {
    res.send('deleteList');
});
exports.default = router;
