<template>
  <ao-preview :data="data"></ao-preview>
</template>

<script>
import {defineComponent,toRefs,reactive, onMounted} from 'vue'
export default defineComponent({
  setup() {
    const data = reactive({
      data: {
        name: "vue.png",
        path: "/Volumes/MacSoftware/project/front-end/ao-components/vue.png",
        downloadUrl: "https://aliyuncdn.antdv.com/vue.png",
        //downloadUrl: "https://upload.jianshu.io/users/upload_avatars/7108739/4cb0872d-ff26-46c1-98d5-c8e6ddd9d5c7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp",
        //downloadUrl: "https://github.com/GHBJayce/Assets/blob/master/RightClickMenu/demo_v2.0.0.gif?raw=true",
        // downloadUrl: "https://github.com/GHBJayce/Assets/blob/feat/v1.0.0/computer/network/%E7%BD%91%E7%BB%9C%E4%B8%83%E5%B1%82%E6%A8%A1%E5%9E%8B.jpg?raw=true",
        // downloadUrl: "https://raw.githubusercontent.com/GHBJayce/Assets/feat/v1.0.0/computer/network/HTTPS%E6%8F%A1%E6%89%8B%E8%BF%87%E7%A8%8B(SSL-TLS)%20.jpg",
        //downloadUrl: "https://raw.githubusercontent.com/GHBJayce/j-weapons/master/readme.md",
        // downloadUrl: "https://raw.githubusercontent.com/GHBJayce/j-weapons/master/src/common/common.js",
        size: 65687,
        // type: "file",
        extend: "png",
        // extend: "md",
        // extend: "js",
        updatedAt: 1648973561
      }
    })

    onMounted(() => {
    })

    return {
      ...toRefs(data),
    }
  },
})
</script>

<style>
</style>
