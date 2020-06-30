<template>
  <div>
    <ul class="item-list">
      <li v-bind:key="item" v-for="item in listItems" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="item-title">
            <template v-if="item.domain">
              <a :href="item.url">{{ item.title }}</a>
            </template>
            <template v-else>
              <router-link :to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link
              v-if="item.user"
              v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}
            </router-link>
            <a :href="item.url" v-else>{{ item.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    created() {
      if (this.$route.name === 'news') {
        this.$store.dispatch('FETCH_NEWS');
      } else if (this.$route.name === 'ask') {
        this.$store.dispatch('FETCH_ASK');
      } else if (this.$route.name === 'jobs') {
        this.$store.dispatch('FETCH_JOBS');
      }
    },
    computed: {
      listItems() {
        let list = [];
        if (this.$route.name === 'news') {
          list = this.$store.state.news;
        } else if (this.$route.name === 'ask') {
          list = this.$store.state.ask;
        } else if (this.$route.name === 'jobs') {
          list = this.$store.state.jobs;
        }
        return list;
      }
    }
  }
</script>

<style scoped>
  .item-list {
    margin: 0;
    padding: 0;
  }

  .post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }

  .points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
  }

  .item-title {
    margin: 0;
  }

  .link-text {
    color: #828282;
  }
</style>
