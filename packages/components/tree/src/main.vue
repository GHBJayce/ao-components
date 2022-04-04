<template>
  <div>
    <a-tree :tree-data="data.items" :load-data="loadData" :replace-fields="fieldsMapping" :selectable="data.selectable" @select="clickNode" @expand="expandNode"></a-tree>
  </div>
</template>

<script lang="ts">
import JW from 'j-weapons'
import {
  defineComponent,
  toRefs,
  reactive,
  onMounted,
} from 'vue'
export default defineComponent({
  name: 'ao-tree',
  props: {
    data: Object,
    loadNodeData: {
      type: Function,
      default: () => {}
    },
    clickNode: {
      type: Function,
      default: () => {}
    },
    expandNode: {
      type: Function,
      default: () => {}
    },
  },
  setup(props) {
    const data = reactive({
      fieldsMapping: {
        title: 'name',
      },
    })
    const clickNode = (clickKeys: Array<0>, event) => {
      const nodeItem = event.node.dataRef
      props.clickNode(nodeItem)
    }
    const expandNode = (expandKeys: Array<0>, event) => {
      const nodeItem = event.node.dataRef
      props.expandNode(nodeItem)
    }
    const setDataDefault = () => {
      props.data.selectable = props.data.selectable || true
    }
    const loadData = (treeNode) => {
      return new Promise((resolve: (value?: unknown) => void) => {
        if (!JW.isEmpty(treeNode.dataRef.children)) {
          resolve()
          return
        }
        props.loadNodeData(treeNode.dataRef, treeNode, resolve)
      })
    }
    onMounted(() => {
      setDataDefault()
    })
    return {
      ...toRefs(data),
      clickNode,
      expandNode,
      loadData,
    }
  }
})
</script>
