/**
 * @file 路由
 * @author 炽翎
 */
import { Router, Request, Response } from 'express';

const dataBase = {
  classList: [
    {
      id: 1,
      color: '#00b4ff',
      iconUrl:
        'https://img.alicdn.com/tfs/TB1H2Kcb1H2gK0jSZFEXXcqMpXa-70-72.png',
      title: '今天',
      itemSum: 0
    },
    {
      id: 2,
      color: '#00b4ff',
      iconUrl:
        'https://img.alicdn.com/tfs/TB1H2Kcb1H2gK0jSZFEXXcqMpXa-70-72.png',
      title: '计划',
      itemSum: 0
    },
    {
      id: 3,
      color: '#00b4ff',
      iconUrl:
        'https://img.alicdn.com/tfs/TB1H2Kcb1H2gK0jSZFEXXcqMpXa-70-72.png',
      title: '全部',
      itemSum: 0
    }
  ],
  myList: [
    {
      id: 1,
      color: '#00b4ff',
      iconUrl:
        'https://img.alicdn.com/tfs/TB1H2Kcb1H2gK0jSZFEXXcqMpXa-70-72.png',
      title: '学习',
      itemSum: 0
    },
    {
      id: 2,
      color: '#00b4ff',
      iconUrl:
        'https://img.alicdn.com/tfs/TB1H2Kcb1H2gK0jSZFEXXcqMpXa-70-72.png',
      title: '生活',
      itemSum: 0
    }
  ]
};

const router = Router();

// 获取分类列表
router.get('/getClass', (req: Request, res: Response) => {
  res.send(
    JSON.stringify({
      code: 200,
      data: {
        classList: dataBase.classList
      },
      message: '获取成功'
    })
  );
});

// 获取列表
router.get('/getList', (req: Request, res: Response) => {
  res.send(
    JSON.stringify({
      code: 200,
      data: {
        myList: dataBase.myList
      },
      message: '获取成功'
    })
  );
});

// 添加分类
router.post('/addClass', (req: Request, res: Response) => {
  res.send('addClass');
});

// 添加列表
router.post('/addList', (req: Request, res: Response) => {
  res.send('addList');
});

// 删除分类
router.post('/deleteClass', (req: Request, res: Response) => {
  res.send('deleteClass');
});

// 删除列表
router.post('/deleteList', (req: Request, res: Response) => {
  res.send('deleteList');
});

export default router;
