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
            avatar: 'https://static001.geekbang.org/account/avatar/00/13/f8/70/f3a33a14.jpg'
          },
          content: '先回答今天的问题,今天的答案应该在文章里就能找到<br>1.change buffer有一部分在内存有一部分在ibdata.<br>做purge操作,应该就会把change buffer里相应的数据持久化到ibdata<br>2.redo log里记录了数据页的修改以及change buffer新写入的信息<br>如果掉电,持久化的change buffer数据已经purge,不用恢复。主要分析没有持久化的数据<br>情况又分为以下几种:<br>(1)change buffer写入,redo log虽然做了fsync但未commit,binlog未fsync到磁盘,这部分数据丢失<br>(2)change buffer写入,redo log写入但没有commit,binlog以及fsync到磁盘,先从binlog恢复redo log,再从redo log恢复change buffer<br>(3)change buffer写入,redo log和binlog都已经fsync.那么直接从redo log里恢复。<br><br>老师,我有几个问题想请教下:<br>1.如果是针对非唯一索引和唯一索引的更新和delete而且条件是where 索引值=这种情况,<br>是否二级索引和唯一索引就没有区别呢<br>2.rr模式下,非唯一索引还会加gap,开销应该也不算小吧<br>3.还有老师你是怎么判断内存命中率的,是hit rate嘛？<br>4.ob好像就是这个思路来做的聚簇索引的insert优化,不知道是怎么判断的唯一性<br><br>特别感谢老师,以前的知识都是很碎片化,没有深入的去思考。<br>经过几期的学习以后,感觉思路越来越开阔,以前觉得很高深的知识点,现在也有点豁然开朗的感觉。',
          publishTime: 1543845071,
          likeCount: 186,
          replyCount: 9,
          reply: {
            items: [{
              user: {
                id: 2,
                nickname: '张三丰',
                avatar: 'https://static001.geekbang.org/account/avatar/00/11/a0/cb/aab3b3e7.jpg'
              },
              content: '感觉你的回复有点问题，binlog是无法恢复redo log的，换句话说，在redo log进入prepare之前，是无法写入binlog的，如果redo log进入prepare之前宕机，事务就会回滚，如果prepare之后，binlog落盘之前宕机事务也回滚，所以不在有binlog无redo log的情况，否则备库岂不是把这个binlog复制了？',
              publishTime: 1543845071,
              likeCount: 1,
              replyCount: 0,
            }, {
              user: {
                id: 3,
                nickname: '洋仔 ༽',
                avatar: 'https://static001.geekbang.org/account/avatar/00/22/68/45/ddf89612.jpg'
              },
              content: 'purge: 清除',
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
            avatar: 'https://static001.geekbang.org/account/avatar/00/13/f8/70/f3a33a14.jpg'
          },
          content: '先回答今天的问题,今天的答案应该在文章里就能找到<br>1.change buffer有一部分在内存有一部分在ibdata.<br>做purge操作,应该就会把change buffer里相应的数据持久化到ibdata<br>2.redo log里记录了数据页的修改以及change buffer新写入的信息<br>如果掉电,持久化的change buffer数据已经purge,不用恢复。主要分析没有持久化的数据<br>情况又分为以下几种:<br>(1)change buffer写入,redo log虽然做了fsync但未commit,binlog未fsync到磁盘,这部分数据丢失<br>(2)change buffer写入,redo log写入但没有commit,binlog以及fsync到磁盘,先从binlog恢复redo log,再从redo log恢复change buffer<br>(3)change buffer写入,redo log和binlog都已经fsync.那么直接从redo log里恢复。<br><br>老师,我有几个问题想请教下:<br>1.如果是针对非唯一索引和唯一索引的更新和delete而且条件是where 索引值=这种情况,<br>是否二级索引和唯一索引就没有区别呢<br>2.rr模式下,非唯一索引还会加gap,开销应该也不算小吧<br>3.还有老师你是怎么判断内存命中率的,是hit rate嘛？<br>4.ob好像就是这个思路来做的聚簇索引的insert优化,不知道是怎么判断的唯一性<br><br>特别感谢老师,以前的知识都是很碎片化,没有深入的去思考。<br>经过几期的学习以后,感觉思路越来越开阔,以前觉得很高深的知识点,现在也有点豁然开朗的感觉。',
          publishTime: 1543845071,
          likeCount: 186,
          replyCount: 9,
          reply: {
            items: [{
              user: {
                id: 2,
                nickname: '张三丰',
                avatar: 'https://static001.geekbang.org/account/avatar/00/11/a0/cb/aab3b3e7.jpg'
              },
              content: '感觉你的回复有点问题，binlog是无法恢复redo log的，换句话说，在redo log进入prepare之前，是无法写入binlog的，如果redo log进入prepare之前宕机，事务就会回滚，如果prepare之后，binlog落盘之前宕机事务也回滚，所以不在有binlog无redo log的情况，否则备库岂不是把这个binlog复制了？',
              publishTime: 1543845071,
              likeCount: 1,
              replyCount: 0,
            }, {
              user: {
                id: 3,
                nickname: '洋仔 ༽',
                avatar: 'https://static001.geekbang.org/account/avatar/00/22/68/45/ddf89612.jpg'
              },
              content: 'purge: 清除',
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
