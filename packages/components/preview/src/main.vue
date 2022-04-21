<template>
  <div class="p-2">
    <ol class="ps-3">
      <li>{{ data.path }}</li>
      <li>{{ toDurationTime(data.updatedAt) }}</li>
    </ol>
    <div v-if="isImage()" v-viewer>
      <img :alt="data.name" :src="data.downloadUrl" class="rounded mw-100">
    </div>
    <template v-else-if="isCode()"></template>
    <template v-else-if="isMarkdown()"></template>
    <div v-else class="mt-5">
      <i class="bi bi-file-earmark-font fs-1"></i><br>
      The file is not supported preview.
    </div>
    <div id="vditorRender"></div>
  </div>
</template>

<script lang="ts">
import moment from 'moment'
import JW from 'j-weapons'
import axios from 'axios'
import Vditor from 'vditor'
import {message} from 'ant-design-vue'
import {
  toRefs,
  reactive,
  onMounted,
  watch,
} from 'vue'
export default {
  name: 'ao-preview',
  props: {
    data: Object,
  },
  setup(props) {
    const data = reactive({
      extend: {
        image: ['jpeg', 'png', 'gif', 'jpg', 'bmp', 'webp', 'ico'],
        code: ['php', 'go', 'java', 'py', 'vue', 'txt', 'js', 'html', 'css', 'json', 'jsonc', 'html', 'yml', 'ts', 'yaml', 'sh', 'Dockerfile', 'lock', 'rs', 'toml', 'gitignore', 'c', 'h', 'cpp', 'xml', 'rb', 'cs', 'cr', 'dart', 'hs', 'lua', 'babelrc', 'license', 'env', 'sql'],
      }
    })
    const isImage = () => {
      return JW.has(data.extend.image, props.data.extend)
    }
    const toDateTime = (timestamp:number) => {
      return moment.unix(timestamp).format('YYYY-MM-DD HH:mm:ss')
    }
    const toDurationTime = (updatedAt:number) => {
      return moment.duration(moment().unix() - updatedAt, 'seconds').humanize()
    }
    const isMarkdown = (extend?:string) => {
      extend = extend || props.data.extend
      return extend === 'md'
    }
    const isCode = (extend?:string) => {
      extend = extend || props.data.extend
      return JW.has(data.extend.code, extend.toLower())
    }
    const extendChange = (extend:string) => {
      let isAsyncGet = false
      let asyncCallback = (data:string) => {}
      if (isCode(extend) || isMarkdown(extend)) {
        isAsyncGet = true
      }
      if (isCode(extend)) {
        asyncCallback = (data) => {
          Vditor.preview(document.getElementById('vditorRender') as HTMLDivElement, `\`\`\`
          `+data+`\`\`\``, {
            theme: 'ant-design',
            hljs: {
              lineNumber: true
            }
          })
        }
      } else if (isMarkdown(extend)) {
        asyncCallback = (data) => {
          Vditor.preview(document.getElementById('vditorRender') as HTMLDivElement, data, {
            theme: 'ant-design',
          })
        }
      }
      if (isAsyncGet) {
        axios.get(props.data.downloadUrl).then((response) => {
          if (response.status !== 200) {
            message.error('request fail.')
            return
          }
          asyncCallback(response.data)
        })
      }
    }
    watch(props.data, (newVal) => {
      extendChange(newVal.extend)
    })
    onMounted(() => {
      extendChange(props.data.extend)
    })
    return {
      ...toRefs(data),
      isImage,
      toDateTime,
      toDurationTime,
      isMarkdown,
      isCode,
    }
  }
}
</script>