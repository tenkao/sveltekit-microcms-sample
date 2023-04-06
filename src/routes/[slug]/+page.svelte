<script>
  export let data;
</script>

<svelte:head>
  <title>ブログ</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>{data.title}</h1>
  <img src={data.eyecatch.url} alt="" />
  <div>{@html data.content}</div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  :global(img) {
    width: 100%;
  }
</style>
