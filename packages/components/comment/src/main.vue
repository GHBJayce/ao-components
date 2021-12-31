<template>
  <div class="j-comment p-2">
    <a-row v-for="(v, k) in data.items" :key="k" class="mb-3">
      <a-col :span="16">
        <div class="text-start d-flex align-items-center">
          <a-avatar :src="v.user.avatar"/>
          <span class="ps-2">{{ v.user.nickname }}</span>
        </div>
      </a-col>

      <a-col :span="8">
        <div class="text-end">
          {{ dateFormat(v.publishTime) }}
        </div>
      </a-col>

      <a-col :span="24">
        <div class="ps-5 pt-2">
          <div v-html="v.content" class="text-start"></div>

          <div class="d-flex align-items-center mt-2">
            <i class="fa fa-thumbs-o-up"></i>
            <span class="ps-1 pt-1">{{ v.likeCount }}</span>
            <i class="fa fa-commenting-o ms-3"></i>
            <span class="ps-1 pt-1">{{ v.replyCount }}</span>
          </div>

          <div class="mt-3">
            <a-row v-for="(vv, kk) in v.reply.items" :key="kk" class="mb-3">
              <a-col :span="16">
                <div class="text-start d-flex align-items-center">
                  <a-avatar :src="vv.user.avatar"/>
                  <span class="ps-2">{{ vv.user.nickname }}</span>
                </div>
              </a-col>

              <a-col :span="8">
                <div class="text-end">
                  {{ dateFormat(vv.publishTime) }}
                </div>
              </a-col>

              <a-col :span="24">
                <div v-html="vv.content" class="text-start ps-5 pt-2"></div>
              </a-col>

              <a-col :span="24">
                <div class="d-flex align-items-center ps-5 pt-2">
                  <i class="fa fa-thumbs-o-up"></i>
                  <span class="ps-1 pt-1">{{ vv.likeCount }}</span>
                  <i class="fa fa-commenting-o ms-3"></i>
                  <span class="ps-1 pt-1">{{ vv.replyCount }}</span>
                </div>
              </a-col>
            </a-row>
          </div>
          <a-button v-if="v.reply.more" @click="loadMoreReply(v)" primary>加载更多回复</a-button>
        </div>
      </a-col>

    </a-row>

    <a-button v-if="data.more" @click="loadMoreComment" primary>加载更多评论</a-button>
  </div>
</template>

<script>
export default {
  name: 'ao-comment',
  props: {
    data: {
      type: Object,
      default () {
        return {
          items: [],
          more: false
        }
      }
    }
  },
  methods: {
    loadMoreComment() {
      this.$emit('loadMoreComment')
    },
    loadMoreReply(row) {
      this.$emit('loadMoreReply', row)
    },
    getDefaultItem() {
      return {
        id: 0,
        user: {
          id: 0,
          nickname: '',
          avatar: ''
        },
        content: '',
        publishTime: 0,
        likeCount: 0,
        replyCount: 0,
        reply: {
          items: [],
          more: false
        }
      }
    },
    dateFormat(timestamp) {
      return moment.unix(timestamp).format('YYYY-MM-DD')
    }
  }
}
</script>

<style scoped>
</style>
