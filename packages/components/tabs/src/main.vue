<template>
  <a-tabs v-model:activeKey="data.key" :type="getTabType()" :hideAdd="true" @edit="edit">
    <a-tab-pane v-for="item in data.items" :key="getPaneKey(item)" :tab="item.name" :closable="item.closable">
      <slot :item="item">{{ item.content }}</slot>
      <slot v-if="data.key === item.key" :item="item" :name="'content-'+item.key"></slot>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts">
import JW from 'j-weapons'
import {
  defineComponent,
  toRefs,
  reactive
} from 'vue'
export default defineComponent({
  name: 'ao-tabs',
  props: {
    data: Object,
  },
  setup(props) {
    const data = reactive({})
    const getPaneKey = (item) => {
      item.key = item.key === undefined ? getTabNextKey() : item.key
      return item.key
    }
    const getTabNextKey = () => {
      let keys = JW.pluck(props.data.items, 'key').filter((item) => {
        return JW.getType(item) === 'number'
      })
      return JW.isEmpty(keys) ? 0 : Math.max(...keys) + 1
    }
    const getTabType = () => {
      return props.data.type === 'card' && props.data.closable ? 'editable-card' : props.data.type
    }
    const edit = (key: any, action: string) => {
      if (action === 'remove') {
        props.data.items = props.data.items.filter((item: {key: any}) => {
          return item.key !== key
        })
        return
      }
      const nextKey = getTabNextKey()
      props.data.items.push({
        key: nextKey,
        name: 'tab-' + nextKey
      })
    }
    return {
      ...toRefs(data),
      getTabType,
      edit,
      getPaneKey,
    }
  }
})
</script>