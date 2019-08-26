<template>
  <Layout class="home">
    <ul>
      <li v-for="{ node } in $page.allEvent.edges" :key="node._id">
        <router-link :to="node.path">
          <h2 v-html="node.title"/>
        </router-link>
          <ul>
            <li v-for=" item in node.item" :key="item.id">
              <router-link :to="node.path + '#' + item.id">
                  <h4 class="event-item" v-html="item.title" />
              </router-link>
            </li>
          </ul>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allEvent (page: $page) {
      edges {
        node {
          _id
          title
          date (format: "D MMMM, YYYY")
          path
          item {
            id
            title
          }
        }
      }
    }
  }
</page-query>

<style scoped>
  .home >>> .heading {
    margin-bottom: 70px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 20px;
  }

  ul li a h2 {
    margin-bottom: 10px;
  }

  span {
    font-size: 80%;
    padding: 0;
  }

  ul li p:first-child {
    margin-top: 3px;
  }

  ul li p {
    margin: 0;
    line-height: 1.5;
  }

  .event-item {
    color: #696969;
    margin-left: 20px;
  }
</style>