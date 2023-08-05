import type { IContentConfig } from '@/components/page-content/type'

const contentConfig: IContentConfig = {
  pageName: 'hrbp',
  header: {
    title: '校招人才管理',
    btnTitle: '新建人才'
  },
  propsList: [
    { type: 'selection', label: '选择', prop: 'selection', width: 60 },
    { type: 'index', label: '序号', prop: 'index', width: 60 },

    { type: 'normal', label: '人才编号', prop: 'id', width: 130 },
    { type: 'normal', label: '姓名', prop: 'name', width: 130 },
    { type: 'normal', label: '笔试成绩', prop: 'grade', width: 130 },
    { type: 'btn', label: '面试状态', prop: 'interviewState', width: 130 },

    { type: 'normal', label: '拟分配部门', prop: 'predictDepartment', width: 130 },
    { type: 'btnPreState', label: '拟分配状态', prop: 'predictAllocationState', width: 130 },

    { type: 'normal', label: '分配部门', prop: 'department', width: 130 },
    { type: 'btnState', label: '分配状态', prop: 'allocationState', width: 130 },

    { type: 'timer', label: '创建时间', prop: 'createAt', width: 180 },
    { type: 'timer', label: '更新时间', prop: 'updateAt', width: 180 },

    { type: 'handler', label: '操作', width: 150 }
    // { type: 'custom', label: '上级部门', prop: 'parentId', width: 150, slotName: 'parent' }
  ]
}

export default contentConfig
