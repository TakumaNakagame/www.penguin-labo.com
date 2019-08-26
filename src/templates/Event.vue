<template>
  <Layout>
    <div class="article">
      <h1>{{ $page.event.title }}</h1>
      <div class="item-title" v-html="$page.event.date" />
      <div class="content" v-html="$page.event.content" />
      <!-- <div class="item-title" v-html="$page.event" /> -->
      <hr>
      <h2>頒布物</h2>
      <div v-for=" item in $page.event.item" :key="item.id">
        <h3 v-bind:id="'item-'+item.id" v-html="item.title" />
        <!-- <g-image class="item-image" :src="item.image" />  -->
        <div class="item-desc" v-html="item.description" />
        <!-- <div><a :href="item.trial" target="_blank">お試し版をダウンロードする</a></div>
        <div><a :href="item.purchase" target="_blank">電子版を購入する</a></div> -->
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.event.title
    }
  }
}
</script>

<page-query>
  query Event ($path: String!) {
    event (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
      item{
        id
        title
        image
        description
        trial
        purchase
      }
    }
  }
</page-query>

<style>
  /* .header {
    margin-bottom: 70px;
  } */

  .article {
    margin-top: 15px;
  }

  .article h1 {
    font-size: 40px;
  }

  .article img {
    width: 100%;
    border-radius: 5px;
  }

  .article a {
    color: #4dba87;
    text-decoration: underline;
  }

  .article a:hover {
    text-decoration: none;
  }

  .article span {
    font-size: 80%;
    margin-bottom: 20px;
  }

  .article ol, .article ul {
    list-style-position: outside;
  }

  .article ul {
    list-style: disc;
    padding-left: 20px;
  }

  .article .content p:first-child {
    margin-top: 15px;
  }

  .article .content p {
    margin-top: 0;
    margin-bottom: 10px;
    line-height: 1.5;
  }
</style>
