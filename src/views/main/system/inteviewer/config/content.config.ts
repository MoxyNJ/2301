import type { IContentConfig } from '@/components/page-content/type'

const contentConfig: IContentConfig = {
  pageName: 'inteviewer',
  header: {
    title: '面试进度管理',
    btnTitle: '新建面试进度'
  },
  propsList: [
    { type: 'selection', label: '选择', prop: 'selection', width: 60 },
    { type: 'index', label: '序号', prop: 'index', width: 60 },

    { type: 'normal', label: '人才编号', prop: 'id', width: 100 },
    { type: 'normal', label: '姓名', prop: 'name', width: 100 },

    { type: 'normal', label: '部门一面成绩', prop: 'oneGrade', width: 130 },
    { type: 'normal', label: '一面面试官', prop: 'oneInteviewer', width: 130 },
    { type: 'normal', label: '一面面试官职级', prop: 'oneInteviewerRank', width: 130 },

    { type: 'normal', label: '部门二面成绩', prop: 'twoGrade', width: 130 },
    { type: 'normal', label: '二面面试官', prop: 'twoInteviewer', width: 130 },
    { type: 'normal', label: '二面面试官职级', prop: 'twoInteviewerRank', width: 130 },

    { type: 'normal', label: '交叉面成绩', prop: 'threeGrade', width: 130 },
    { type: 'normal', label: '交叉面试官', prop: 'threeInteviewer', width: 130 },
    { type: 'normal', label: '交叉面试官职级', prop: 'threeInteviewerRank', width: 130 },

    { type: 'normal', label: 'HRBP面成绩', prop: 'hrbpGrade', width: 130 },
    { type: 'normal', label: 'HRBP面试官', prop: 'hrbpInteviewer', width: 130 },
    { type: 'normal', label: 'HRBP职级', prop: 'hrbpInteviewerRank', width: 130 },

    { type: 'timer', label: '创建时间', prop: 'createAt', width: 180 },
    { type: 'timer', label: '更新时间', prop: 'updateAt', width: 180 },

    { type: 'handler', label: '操作', width: 150 }
  ]
}

export default contentConfig
