<template>
  <Layout>
    <h1>{{ $page.ebook.title }} の電子版について</h1>
    <p>
      この度は、{{ $page.ebook.title }}をご購入いただきありがとうございます。<br>
      このページは、紙版もしくはダウンロードカード購入者向けページです。以下のリンクより、電子版をダウンロードしてください。
    </p>
    <p>
      リンク先のページより、パスワード付きZIPファイルダウンロードし、ダウンロードカードに記載されているパスワードを入力してください。
    </p>
    <a :href="$page.ebook.link" v-html="$page.ebook.link"/>
    <div v-html="$page.ebook.content"/>
  </Layout>
</template>

<page-query>
query Ebook ($path: String!) {
  ebook: ebook (path: $path) {
    title
    content
    event
    link
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
        title: this.$page.ebook.title
    }
  }
}
</script>