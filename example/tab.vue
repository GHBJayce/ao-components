<template>
  {{ tabs }}
  <ao-tabs :data="tabs">
    <template #default="slotContent">
      {{ slotContent }}
      <ao-tabs :data="tabs1">
      </ao-tabs>
    </template>
    <template #content-1="slotContent">
      {{ slotContent }}
      content-1
    </template>
    <template #content-abc="slotContent">
      {{ slotContent }}
    </template>
  </ao-tabs>
</template>

<script>
import {defineComponent,toRefs,reactive, onMounted} from 'vue'
export default defineComponent({
  setup() {
    const data = reactive({
      tabs: {
        key: 1,
        type: 'card',
        closable: true,
        position: 'left',
        items: [{
          // key: 0,
          name: 'tab1',
          content: '123',
          closable: true,
        }, {
          // key: 1,
          name: 'tab2',
          type: 'custom',
          content: '456',
        }]
      },
      tabs1: {
        key: 0,
        type: 'card',
        items: [{
          //key: 0,
          name: 'subtab1',
          type: 'text',
          content: '123',
        }]
      }
    })

    onMounted(() => {
      setTimeout(() => {
        // data.tabs.type = 'line'
        // console.log(data.tabs)
        data.tabs.items.push({
          key: 'abc',
          name: 'abc'
        })
      }, 3000)
    })

    return {
      ...toRefs(data),
    }
  },
})
</script>

<style>
</style>
