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
  ],
  classListDetail: [
    [
      { id: 1, title: '测试 1', completed: false },
      { id: 2, title: '测试 2', completed: true },
      { id: 3, title: '测试 3', completed: false }
    ],
    [
      { id: 1, title: '测试 4', completed: true },
      { id: 2, title: '测试 5', completed: true },
      { id: 3, title: '测试 6', completed: false }
    ],
    [
      { id: 1, title: '测试 7', completed: false },
      { id: 2, title: '测试 8', completed: true }
    ]
  ],
  myListDetail: [
    [
      { id: 1, title: '测试 1', completed: false },
      { id: 2, title: '测试 2', completed: true },
      { id: 3, title: '测试 3', completed: false }
    ],
    [
      { id: 1, title: '测试 4', completed: true },
      { id: 2, title: '测试 5', completed: true },
      { id: 3, title: '测试 6', completed: false }
    ]
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
router.get('/addClass', (req: Request, res: Response) => {
  res.send('addClass');
});

// 添加列表
router.get('/addList', (req: Request, res: Response) => {
  res.send('addList');
});

// 删除分类
router.get('/deleteClass', (req: Request, res: Response) => {
  dataBase.classList = dataBase.classList.filter(
    (item) => Number(req.query.id) !== item.id
  );
  res.send('deleteClass');
});

// 删除列表
router.get('/deleteList', (req: Request, res: Response) => {
  dataBase.myList = dataBase.myList.filter(
    (item) => Number(req.query.id) !== item.id
  );
  res.send('deleteList');
});

// 获取分类详情
router.get('/getClassDetail', (req: Request, res: Response) => {
  res.send(
    JSON.stringify({
      code: 200,
      data: {
        detailList: dataBase.classListDetail[Number(req.query.id) - 1]
      },
      message: '获取成功'
    })
  );
});

// 获取列表详情
router.get('/getListDetail', (req: Request, res: Response) => {
  res.send(
    JSON.stringify({
      code: 200,
      data: {
        detailList: dataBase.myListDetail[Number(req.query.id) - 1]
      },
      message: '获取成功'
    })
  );
});

export default router;
