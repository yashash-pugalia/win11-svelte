<script>
  import { ProgressRing, TextBox } from "fluent-svelte";
  import { fly } from "svelte/transition";
  import { date } from "../store";

  const getNews = (async () => {
    const res = await fetch("https://github.win11react.com/NewsAPI/data.json");
    return await res.json();
  })();
</script>

<div class="widgets" transition:fly={{ x: -800, duration: 200, opacity: 1 }}>
  <div class="time">
    {$date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
  </div>
  <TextBox placeholder="Search the web" />

  <div class="newsCont">
    {#await getNews}<ProgressRing />
    {:then news}
      {#each news.articles as n, i}
        <a
          class="article"
          class:large={i % 5 === 4}
          style:--newsImg="url({n.urlToImage})"
          style:--randHue="{Math.round(Math.random() * 360)}deg"
          href={n.url}
          rel="noreferrer"
          target="_blank"
        >
          <div>
            {n.source.name} &bull;
            {Math.round((Date.now() - Date.parse(n.publishedAt)) / 3600000)} hours
            ago
          </div>
          <h3>{n.title.split("-").slice(0, -1).join("-")}</h3>
        </a>
      {/each}
    {/await}
  </div>
</div>

<style>
  .widgets {
    background: rgb(var(--bg6) / 33%);
    backdrop-filter: blur(1.5rem);
    position: absolute;
    inset: 12px;
    width: 760px;
    padding: 1.5rem 74px;
    border-radius: 8px;
  }

  .time {
    display: flex;
    font-size: 1.75rem;
    justify-content: center;
    padding-bottom: 12px;
  }

  .newsCont {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: calc(100% - 70px);
    margin: 12px -25px 0;
    padding: 0 25px 12px;
    gap: 12px;
    overflow: overlay;
  }

  .article {
    --randClr: var(--randHue) 36% 84%;

    background: var(--newsImg) center/cover no-repeat;
    background-color: hsl(var(--randClr));
    color: rgb(var(--clr));
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 304px;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 25%);
    position: relative;
    overflow: hidden;
    text-decoration: none;
    transition: all 200ms;
  }
  .article.large {
    grid-column: span 2;
  }
  .article * {
    z-index: 0;
  }
  .article div {
    font-size: 12px;
    margin-bottom: 0.5rem;
  }
  .article:hover {
    box-shadow: 0 4px 8px rgb(0 0 0 / 25%);
  }
  .article:hover h3 {
    text-decoration: underline;
  }

  .article::before {
    background: linear-gradient(transparent 33%, hsl(var(--randClr)) 75%);
    content: "";
    inset: 0;
    position: absolute;
    transition: all 200ms;
  }
  .article:hover::before {
    box-shadow: inset 0 0 10rem 10rem hsl(var(--randClr) / 50%);
  }
  .article.large::before {
    background: linear-gradient(transparent 33%, hsl(var(--randClr)) 100%);
  }
  @media (prefers-color-scheme: dark) {
    .article {
      --randClr: var(--randHue) 36% 16%;
    }
  }
</style>
