import type { IModalConfig } from '@/components/page-modal/type'

const modalConfig: IModalConfig = {
  pageName: 'hrbp',
  header: {
    newTitle: '新建部门',
    editTitle: '编辑部门'
  },
  formItems: [
    {
      type: 'input',
      label: '人才编号',
      prop: 'id',
      placeholder: '请输入人才编号'
    },
    {
      type: 'input',
      label: '姓名',
      prop: 'name',
      placeholder: '请输入人才姓名'
    },
    {
      type: 'date-picker',
      prop: 'cerateAt',
      label: '创建时间'
    },
    {
      type: 'select',
      prop: 'predictAllocationState',
      label: '拟分配状态',
      placeholder: '请选择拟分配状态',
      options: [
        { label: '未分配', value: 1 },
        { label: '已分配', value: 0 }
      ]
    },
    {
      type: 'select',
      prop: 'predictDepartment',
      label: '拟分配部门',
      placeholder: '请选择拟分配部门',
      options: [
        { label: '房产', value: 1 },
        { label: '汽车', value: 2 },
        { label: '招聘', value: 3 },
        { label: '本地生活', value: 4 }
      ]
    },
    {
      type: 'select',
      prop: 'allocationState',
      label: '分配状态',
      placeholder: '请选择分配状态',
      options: [
        { label: '未分配', value: 1 },
        { label: '已分配', value: 0 }
      ]
    },
    {
      type: 'select',
      prop: 'department',
      label: '分配部门',
      placeholder: '请选择分配部门',
      options: [
        { label: '房产', value: 1 },
        { label: '汽车', value: 2 },
        { label: '招聘', value: 3 },
        { label: '本地生活', value: 4 }
      ]
    },
    {
      type: 'select',
      prop: 'interviewState',
      label: '面试状态',
      placeholder: '请选择面试状态',
      options: [
        { label: '流程结束', value: 0 },
        { label: '待面试', value: 1 },
        { label: '部门一面中', value: 2 },
        { label: '待部门二面', value: 3 },
        { label: '部门二面中', value: 4 },
        { label: '待跨部门交叉面', value: 5 },
        { label: '跨部门交叉面中', value: 6 },
        { label: '待HRBP面', value: 7 },
        { label: 'HRBP面中', value: 8 },
        { label: 'offer审批中', value: 9 },
        { label: 'offer发放', value: 10 }
      ]
    },
    {
      type: 'input',
      prop: 'grade',
      label: '笔试成绩'
    }

    // {
    //   type: 'select',
    //   prop: 'enable',
    //   label: '状态',
    //   placeholder: '请输入当前状态',
    //   options: [
    //     { label: '启用', value: 1 },
    //     { label: '禁用', value: 0 }
    //   ]
    // }
  ]
}

export default modalConfig
