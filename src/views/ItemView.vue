<template>
  <div>
    <section>
      <user-profile :info="fetchedItem">
        <div slot="username">
          <router-link v-bind:to="`/user/${fetchedItem.user}`" class="link-text">{{ fetchedItem.user }}</router-link>
        </div>
        <template slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</template>
      </user-profile>
      <!-- 질문 상세 정보 -->
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
  import UserProfile from "../components/UserProfile";
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters(['fetchedItem']),
    },
    created() {
      const itemId = this.$route.params.id;
      this.$store.dispatch('FETCH_ITEM', itemId);
    },
    components: {
      UserProfile
    }
  }
</script>

<style scoped>.
  .link-text {
    color: #828282;
  }
</style>
