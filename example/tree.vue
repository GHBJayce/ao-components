<template>
  <ao-tree :data="data" :loadNodeData="loadNodeData" :clickNode="clickNode"></ao-tree>
</template>

<script>
import axios from 'axios'
import {defineComponent,toRefs,reactive, onMounted} from 'vue'
export default defineComponent({
  setup() {
    const data = reactive({
      data: {
        items: [
          // {
          //   name: 'src',
          //   key: '7710e02fdd3d3f0ceddca197fbdbd24c0c6f68ce',
          //   type: 'dir',
          //   children: [{
          //     name: 'common',
          //     key: 'd20c51b022f8a698b93132495bbccc282a34d831',
          //     type: 'dir',
          //   }]
          // }
        ]
      }
    })
    const loadRepositoryPath = (path, currentNode, callback) => {
      callback = callback || (() => {})
      axios.get('https://api.github.com/repos/GHBJayce/j-weapons/contents/'+path).then((response) => {
        if (response.status !== 200) {
          return
        }
        const responseData = response.data
        for (let i in responseData) {
          const item = responseData[i]
          let temp = {
            name: item.name,
            path: item.path,
            key: item.sha,
            type: item.type,
            size: item.size,
            downloadUrl: item.download_url,
            extend: item.name.substr(item.name.lastIndexOf('.') + 1),
            children: [],
          }
          currentNode.push(temp)
        }
        callback()
      })
    }
    const loadNodeData = (nodeItem, treeNode, resolve) => {
      if (nodeItem.type !== 'dir') {
        resolve()
        return
      }
      loadRepositoryPath(nodeItem.path, nodeItem.children, () => {
        resolve()
      })
    }
    const clickNode = (nodeItem) => {
      console.log(nodeItem)
    }

    onMounted(() => {
      loadRepositoryPath('', data.data.items)
    })

    return {
      ...toRefs(data),
      loadNodeData,
      clickNode,
    }
  },
})
</script>

<style>
</style>
