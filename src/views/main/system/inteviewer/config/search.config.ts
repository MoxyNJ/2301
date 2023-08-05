import type { ISearchConfig } from '@/components/page-search/type'

const searchConfig: ISearchConfig = {
  pageName: 'inteviewer',
  formItems: [
    {
      type: 'input',
      label: '人才编号',
      prop: 'id',
      placeholder: '请输入人才编号'
    },
    {
      type: 'numberSelect',
      prop: 'grade',
      label: '笔试成绩'
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
    }
  ]
}

export default searchConfig
