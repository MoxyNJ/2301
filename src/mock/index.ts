/** 方法 */
const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))
export const getValue = async (name: any, delay = 1000) => {
  await sleep(delay)
  return {
    code: 0,
    message: '✅OK',
    data: name
  }
}

/** 面试人信息 */
export const intervieweeData = []

/** 菜单的mock */
export const systemListData = {
  hrbp: [
    {
      index: 1,
      id: 1111101,
      name: '王宝强',
      grade: '99',
      predictDepartment: '1拟分配部门',
      predictAllocationState: false,
      interviewState: '1面试状态',
      allocationState: true,
      department: '1分配部门',
      createAt: '20230104',
      updateAt: '20230105'
    },
    {
      index: 2,
      id: 1111102,
      name: '王宝强',
      grade: '88',
      predictDepartment: '2拟分配部门',
      predictAllocationState: true,
      interviewState: '2面试状态',
      allocationState: true,
      department: '2分配部门',
      createAt: '20230104',
      updateAt: '20230105'
    }
  ],
  inteviewer: [
    {
      index: 1,
      id: 1111101,
      name: '王宝强',
      oneGrade: '3.2',
      oneInteviewer: '上官帅',
      oneInteviewerRank: 'T5',
      twoGrade: '3.5',
      twoInteviewer: '上官酷',
      twoInteviewerRank: 'T7',
      threeGrade: '4.1',
      threeInteviewer: '上官炫',
      threeInteviewerRank: 'T7',
      hrbpGrade: '4.1',
      hrbpInteviewer: 'HR小姐姐',
      hrbpInteviewerRank: 'M7',
      createAt: '20230104',
      updateAt: '20230105'
    },
    {
      index: 2,
      id: 1111102,
      name: '罗灿杰',
      oneGrade: '3.4',
      oneInteviewer: '上官帅',
      oneInteviewerRank: 'T5',
      twoGrade: '3.9',
      twoInteviewer: '上官酷',
      twoInteviewerRank: 'T7',
      threeGrade: '4.6',
      threeInteviewer: '上官炫',
      threeInteviewerRank: 'T7',
      hrbpGrade: '4.9',
      hrbpInteviewer: 'HR小姐姐',
      hrbpInteviewerRank: 'M7',
      createAt: '20230104',
      updateAt: '20230105'
    }
  ]
}

/** login 后的菜单数据 */
export const userMenus = [
  {
    id: 38,
    name: '数据中心',
    type: 1,
    url: '/main/analysis',
    icon: 'el-icon-monitor',
    sort: 1,
    children: [
      {
        id: 39,
        url: '/main/analysis/overview',
        name: '信息总览',
        sort: 106,
        type: 2,
        children: null,
        parentId: 38
      },
      {
        id: 40,
        url: '/main/analysis/dashboard',
        name: '面试看板',
        sort: 107,
        type: 2,
        children: null,
        parentId: 38
      }
    ]
  },
  {
    id: 1,
    name: '管理中心',
    type: 1,
    url: '/main/system',
    icon: 'el-icon-setting',
    sort: 2,
    children: [
      {
        id: 3,
        url: '/main/system/hrbp',
        name: '校招人才管理',
        sort: 101,
        type: 2,
        children: [
          {
            id: 17,
            url: null,
            name: '创建应聘人',
            sort: null,
            type: 3,
            parentId: 3,
            permission: 'system:hrbp:create'
          },
          {
            id: 18,
            url: null,
            name: '删除应聘人',
            sort: null,
            type: 3,
            parentId: 3,
            permission: 'system:hrbp:delete'
          },
          {
            id: 19,
            url: null,
            name: '修改应聘人',
            sort: null,
            type: 3,
            parentId: 3,
            permission: 'system:hrbp:update'
          },
          {
            id: 20,
            url: null,
            name: '查询应聘人',
            sort: null,
            type: 3,
            parentId: 3,
            permission: 'system:hrbp:query'
          }
        ],
        parentId: 1
      },
      {
        id: 4,
        url: '/main/system/inteviewer',
        name: '面试进度管理',
        sort: 103,
        type: 2,
        children: [
          {
            id: 21,
            url: null,
            name: '创建面试进度',
            sort: null,
            type: 3,
            parentId: 4,
            permission: 'system:inteviewer:create'
          },
          {
            id: 22,
            url: null,
            name: '删除面试进度',
            sort: null,
            type: 3,
            parentId: 4,
            permission: 'system:inteviewer:delete'
          },
          {
            id: 23,
            url: null,
            name: '修改面试进度',
            sort: null,
            type: 3,
            parentId: 4,
            permission: 'system:inteviewer:update'
          },
          {
            id: 24,
            url: null,
            name: '查询面试进度',
            sort: null,
            type: 3,
            parentId: 4,
            permission: 'system:inteviewer:query'
          }
        ],
        parentId: 1
      },
      {
        id: 2,
        url: '/main/system/user',
        name: '系统用户管理',
        sort: 100,
        type: 2,
        children: [
          {
            id: 5,
            url: null,
            name: '创建用户',
            sort: null,
            type: 3,
            parentId: 2,
            permission: 'system:users:create'
          },
          {
            id: 6,
            url: null,
            name: '删除用户',
            sort: null,
            type: 3,
            parentId: 2,
            permission: 'system:users:delete'
          },
          {
            id: 7,
            url: null,
            name: '修改用户',
            sort: null,
            type: 3,
            parentId: 2,
            permission: 'system:users:update'
          },
          {
            id: 8,
            url: null,
            name: '查询用户',
            sort: null,
            type: 3,
            parentId: 2,
            permission: 'system:users:query'
          }
        ],
        parentId: 1
      },
      {
        id: 25,
        url: '/main/system/role',
        name: '角色权限管理',
        sort: 102,
        type: 2,
        children: [
          {
            id: 26,
            url: null,
            name: '创建角色',
            sort: null,
            type: 3,
            parentId: 25,
            permission: 'system:role:create'
          },
          {
            id: 27,
            url: null,
            name: '删除角色',
            sort: null,
            type: 3,
            parentId: 25,
            permission: 'system:role:delete'
          },
          {
            id: 28,
            url: null,
            name: '修改角色',
            sort: null,
            type: 3,
            parentId: 25,
            permission: 'system:role:update'
          },
          {
            id: 29,
            url: null,
            name: '查询角色',
            sort: null,
            type: 3,
            parentId: 25,
            permission: 'system:role:query'
          }
        ],
        parentId: 1
      }
    ]
  }
  // {
  //   id: 9,
  //   name: '商品中心',
  //   type: 1,
  //   url: '/main/product',
  //   icon: 'el-icon-goods',
  //   sort: 3,
  //   children: [
  //     {
  //       id: 15,
  //       url: '/main/product/category',
  //       name: '商品类别',
  //       sort: 104,
  //       type: 2,
  //       children: [
  //         {
  //           id: 30,
  //           url: null,
  //           name: '创建类别',
  //           sort: null,
  //           type: 3,
  //           parentId: 15,
  //           permission: 'system:category:create'
  //         },
  //         {
  //           id: 31,
  //           url: null,
  //           name: '删除类别',
  //           sort: null,
  //           type: 3,
  //           parentId: 15,
  //           permission: 'system:category:delete'
  //         },
  //         {
  //           id: 32,
  //           url: null,
  //           name: '修改类别',
  //           sort: null,
  //           type: 3,
  //           parentId: 15,
  //           permission: 'system:category:update'
  //         },
  //         {
  //           id: 33,
  //           url: null,
  //           name: '查询类别',
  //           sort: null,
  //           type: 3,
  //           parentId: 15,
  //           permission: 'system:category:query'
  //         }
  //       ],
  //       parentId: 9
  //     },
  //     {
  //       id: 16,
  //       url: '/main/product/goods',
  //       name: '商品信息',
  //       sort: 105,
  //       type: 2,
  //       children: [
  //         {
  //           id: 34,
  //           url: null,
  //           name: '创建商品',
  //           sort: null,
  //           type: 3,
  //           parentId: 16,
  //           permission: 'system:goods:create'
  //         },
  //         {
  //           id: 35,
  //           url: null,
  //           name: '删除商品',
  //           sort: null,
  //           type: 3,
  //           parentId: 16,
  //           permission: 'system:goods:delete'
  //         },
  //         {
  //           id: 36,
  //           url: null,
  //           name: '修改商品',
  //           sort: null,
  //           type: 3,
  //           parentId: 16,
  //           permission: 'system:goods:update'
  //         },
  //         {
  //           id: 37,
  //           url: null,
  //           name: '查询商品',
  //           sort: null,
  //           type: 3,
  //           parentId: 16,
  //           permission: 'system:goods:query'
  //         }
  //       ],
  //       parentId: 9
  //     }
  //   ]
  // },
  // {
  //   id: 41,
  //   name: '随便聊聊',
  //   type: 1,
  //   url: '/main/story',
  //   icon: 'el-icon-chat-line-round',
  //   sort: 4,
  //   children: [
  //     {
  //       id: 42,
  //       url: '/main/story/chat',
  //       name: '你的故事',
  //       sort: 108,
  //       type: 2,
  //       children: null,
  //       parentId: 41
  //     },
  //     {
  //       id: 43,
  //       url: '/main/story/list',
  //       name: '故事列表',
  //       sort: 109,
  //       type: 2,
  //       children: [],
  //       parentId: 41
  //     }
  //   ]
  // }
]
