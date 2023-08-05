<template>
  <div class="search" v-if="isQuery">
    <el-form :model="searchForm" ref="formRef" label-width="85px" size="large">
      <el-row :gutter="20">
        <template v-for="item in searchConfig.formItems" :key="item.prop">
          <el-col :span="8">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input v-model="searchForm[item.prop]" :placeholder="item.placeholder" />
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="searchForm[item.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </template>
              <template v-if="item.type == 'select'">
                <el-select
                  v-model="searchForm[item.prop]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  clearable
                >
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value" />
                  </template>
                </el-select>
              </template>
              <template v-if="item.type == 'numberSelect'">
                <div class="numberSelectCintainer">
                  <el-input-number
                    :min="0"
                    :max="100"
                    controls-position="right"
                    placeholder="81"
                    style="width: 100px"
                  />
                  <div class="divider">-</div>
                  <el-input-number
                    :min="0"
                    :max="100"
                    controls-position="right"
                    placeholder="99"
                    style="width: 100px"
                  />
                </div>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="btns">
      <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
      <el-button icon="Search" class="colorBtn" type="primary" @click="handleQueryClick"
        >查询</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type ElForm from 'element-plus/lib/components/form/index.js'
import { reactive, ref } from 'vue'
import type { ISearchProps } from './type'
import usePermissions from '@/hooks/usePermissions'

/** 父组件的props */
const props = defineProps<ISearchProps>()

const isQuery = usePermissions(`${props.searchConfig.pageName}`)

const formRef = ref<InstanceType<typeof ElForm>>()

// 自定义事件
const emit = defineEmits(['queryClick', 'resetClick'])

// 表单数据初始化，通过遍历 config 配置初始化表达名
const initialForm: any = {}
for (const item of props.searchConfig.formItems) {
  initialForm[item.prop] = item.initialValue ?? ''
}
const searchForm = reactive(initialForm)

/** 重置 */
function handleResetClick() {
  // 清空当前表单，并重新刷新页面
  formRef.value?.resetFields()
  emit('resetClick')
}

/**查询 */
function handleQueryClick() {
  // 携带表单参数，重新刷新页面
  console.log(searchForm)
  emit('queryClick', searchForm)
}
</script>

<style lang="less" scoped>
.search {
  background-color: #fff;
  padding: 20px;

  .el-form-item {
    padding: 15px 10px;
    margin-bottom: 0;
  }

  .btns {
    text-align: right;
    padding: 10px 10px 10px 0;

    .el-button {
      height: 36px;
      width: 120px;
    }
  }
  .numberSelectCintainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .divider {
      margin: 0 5px;
    }
  }
}
</style>
