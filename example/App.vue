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
        items: [],
        more: true
      }
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
