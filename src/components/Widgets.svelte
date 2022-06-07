<script>
  import { fly } from "svelte/transition";
  import { date, theme } from "../store";

  const getNews = (async () => {
    const res = await fetch(
      "https://saurav.tech/NewsAPI/top-headlines/category/general/in.json"
    );
    return await res.json();
  })();
</script>

<div
  class="widgets activeShadow"
  transition:fly={{ x: -800, duration: 200, opacity: 1 }}
>
  <div class="time">
    {$date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
  </div>

  <div class="newsCont">
    {#await getNews}
      <p>Loading...</p>
    {:then news}
      {#each news.articles as n, i}
        <a
          class="articleCont"
          class:large={i % 5 == 4}
          href={n.url}
          rel="noreferrer"
          style:background-image="url({n.urlToImage})"
          target="_blank"
        >
          <div
            class="tpNews"
            style:--randBg={`hsl(${Math.round(Math.random() * 360)}deg 36% ${
              $theme == "dark" ? "16" : "84"
            }%)`}
          >
            <div class="tpSource">{n.source.name}</div>
            <div class="tpArticle">{n.title}</div>
            {#if i % 5 == 4}
              <div class="tpdesc">{n.content}</div>
            {/if}
          </div>
        </a>
      {/each}
    {/await}
  </div>
</div>

<style>
  .widgets {
    position: absolute;
    top: 12px;
    left: 12px;
    bottom: 12px;
    background: rgb(var(--bg6) / 33%);
    backdrop-filter: blur(1.5rem);
    width: 760px;
    padding: 1.5rem 4rem;
    border-radius: 8px;
    overflow-y: overlay;
  }

  .time {
    display: flex;
    font-size: 1.75rem;
    justify-content: center;
    padding-bottom: 1rem;
  }

  .newsCont {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
  }

  .articleCont {
    border-radius: 4px;
    height: 220px;
    overflow: hidden;
    color: rgb(var(--clr));
    position: relative;
    background-size: cover;
  }
  .articleCont.large {
    grid-column-start: 1;
    grid-column-end: 3;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
  }

  .tpNews {
    background: linear-gradient(transparent 50%, var(--randBg) 80%);
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0.5rem;
    padding-top: 50%;
  }
  .tpSource {
    font-size: 10px;
    margin-bottom: 0.5rem;
  }
  .tpdesc {
    opacity: 67%;
    font-size: 12px;
  }

  .articleCont.articleCont.large .tpNews {
    background: linear-gradient(to left, transparent 30%, var(--randBg) 60%);
    justify-content: space-around;
    padding: 1rem;
    padding-right: 50%;
  }
</style>
