<script setup>
</script>

<template>
  <ao-comment :data="comment" @loadMoreComment="loadMoreComment" @loadMoreReply="loadMoreReply"/>
</template>

<script>
export default {

  data () {
    return {
      comment: {
        items: [{
          user: {
            id: 1,
            nickname: '某、人',
            avatar: ''
          },
          content: '早知道就给你糖了，你居然在我心里捣乱',
          publishTime: 1543845071,
          likeCount: 186,
          replyCount: 9,
          reply: {
            items: [{
              user: {
                id: 2,
                nickname: '张三丰',
                avatar: ''
              },
              content: '你真好看。我喜欢你',
              publishTime: 1543845071,
              likeCount: 1,
              replyCount: 0,
            }, {
              user: {
                id: 3,
                nickname: '洋仔 ༽',
                avatar: ''
              },
              content: '只要你在，我就不会喜欢上别人',
              publishTime: 1543845071,
              likeCount: 1,
              replyCount: 0,
              reply: []
            }],
            more: true,
          },
        }, {
          user: {
            id: 1,
            nickname: '某、人',
            avatar: ''
          },
          content: '我知道你也在向我靠近,星河万顷都是 我的见面礼。',
          publishTime: 1543845071,
          likeCount: 186,
          replyCount: 9,
          reply: {
            items: [{
              user: {
                id: 2,
                nickname: '张三丰',
                avatar: ''
              },
              content: '以后我就是你的固定同行人了 ——SuperJunior 银赫',
              publishTime: 1543845071,
              likeCount: 1,
              replyCount: 0,
            }, {
              user: {
                id: 3,
                nickname: '洋仔 ༽',
                avatar: ''
              },
              content: '螃蟹在剥我的壳，笔记本在写我；漫天的我落在枫叶雪花上；而你在想我。',
              publishTime: 1543845071,
              likeCount: 1,
              replyCount: 0,
              reply: []
            }],
            more: true,
          },
        }],
        more: true,
      },
    }
  },
  methods: {
    loadMoreComment() {
      console.log(1);
    },
    loadMoreReply(row) {
      console.log(row);
    }
  }
}
</script>

<style>
</style>
