<template>
  <a-tabs v-model:activeKey="data._key" :type="getTabType()" :hideAdd="true" :tabPosition="data.position" :size="data.size" :tabBarGutter="data.gutter" @edit="edit">
    <a-tab-pane v-for="item in data.items" :key="getPaneKey(item)" :tab="item.name" :closable="item.closable">
      <slot :item="item">{{ item.content }}</slot>
      <slot v-if="data._key === item._key" :item="item" :name="'content-'+item._key"></slot>
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
  name: 'ao-tab',
  props: {
    data: Object,
  },
  setup(props) {
    const data = reactive({})
    const getPaneKey = (item) => {
      item._key = item._key === undefined ? getTabNextKey() : item._key
      return item._key
    }
    const getTabNextKey = () => {
      let keys = JW.pluck(props.data.items, '_key').filter((item) => {
        return JW.getType(item) === 'number'
      })
      return JW.isEmpty(keys) ? 0 : Math.max(...keys) + 1
    }
    const getTabType = () => {
      return props.data.type === 'card' && props.data.closable ? 'editable-card' : props.data.type
    }
    const edit = (_key: any, action: string) => {
      if (action === 'remove') {
        props.data.items = props.data.items.filter((item: {_key: any}) => {
          return item._key !== _key
        })
        const firstTabItem = JW.getFirstVal(props.data.items)
        if (!JW.isEmpty(firstTabItem)) {
          props.data._key = firstTabItem._key
        }
        return
      }
      const nextKey = getTabNextKey()
      props.data.items.push({
        _key: nextKey,
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