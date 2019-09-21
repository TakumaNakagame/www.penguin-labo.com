<template>
  <Layout>
    <div class="article">
      <div v-for=" item in $page.event.item" :key="item.id">
        <div class="book_title">
          <h1 v-bind:id="'item-'+item.id" v-html="item.title" />
        </div>
        <div class="image">
          <g-image class="item_image" :src="item.image" />
        </div>
        <h2 id="detail">詳細</h2>
        <div class="detail_content box">
          <h3>価格</h3>
          <p v-html="item.price" />
          <h3>本書について</h3>
          <p v-html="item.description" />
          <h3>販売・お試し版</h3>
          <a :href="item.ebook" v-html="item.ebook" target="_blank" />
          <h3>取り置き(トリオキニ)</h3>
          <a :href="item.reserve" v-html="item.reserve" target="_blank" />
        </div>
        <h2 id="event" v-html="$page.event.title" />
        <div class="event_content box">
          <h3>日時</h3>
          <p v-html="$page.event.date" />
          <h3>イベントページ</h3>   
          <a :href="$page.event.url" v-html="$page.event.url" target="_blank" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '~/layouts/Event.vue'
export default {
  components: {
    Layout
  },
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
      date
      location
      url
      content
      item{
        id
        title
        image
        price
        description
        ebook
        reserve
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
    width: 100%;
  }

  .article h1 {
    font-size: 25pt;
    margin: 50px;
    text-align: center;
  }

  .image {
    width: 420px;
    margin: 30px auto;
    background-color: #FF6666;
  }

    @media screen and (max-width: 460px) { 

      .article h1 {
        font-size: 20pt;
      }

      .image {
          margin: 30px auto;
          width: 90%;
        }
    }

  .article img {
    width: 100%;
    margin: 0 auto;
    border: solid 2px grey;
    border-radius: 5px;
    display: block;
  }

  .article .box {
    margin-top: 30px;
    margin-bottom: 60px;
    padding: 10px 50px;
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
