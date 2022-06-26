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

  {#await getNews}<ProgressRing />
  {:then news}
    <div class="widgetGrid">
      <div class="topStories">
        <h2>Top Stories</h2>
        {#each news.articles as n, i}{#if i < 3}
            <a
              class="xs-article"
              style:--newsImg="url({n.urlToImage})"
              href={n.url}
              rel="noreferrer"
              target="_blank"
            >
              <h3>{n.title.split("-").slice(0, -1).join("-")}</h3>
              <p>
                {n.source.name} &bull;
                {Math.round((Date.now() - Date.parse(n.publishedAt)) / 3600000)}
                hours ago
              </p>
            </a>
          {/if}{/each}
      </div>
      {#each news.articles as n, i}{#if i >= 3}
          <a
            class="article"
            class:small={i < 5}
            class:large={i % 5 === 2 && i > 5}
            style:--newsImg="url({n.urlToImage})"
            style:--randHue="{Math.round(Math.random() * 360)}deg"
            href={n.url}
            rel="noreferrer"
            target="_blank"
          >
            <p>
              {n.source.name} &bull;
              {Math.round((Date.now() - Date.parse(n.publishedAt)) / 3600000)} hours
              ago
            </p>
            <h3>{n.title.split("-").slice(0, -1).join("-")}</h3>
          </a>
        {/if}{/each}
    </div>
  {/await}
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

  .widgetGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto-fill, 146px);

    height: calc(100% - 70px);
    margin: 12px -25px 0;
    padding: 0 25px 12px;
    gap: 12px;
    overflow: overlay;
  }

  .topStories {
    background: linear-gradient(30deg, #c2cee8, #f6f9ff);
    grid-row: span 2;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 2px 4px rgb(0 0 0 / 25%);
    transition: all 200ms;
  }
  @media (prefers-color-scheme: dark) {
    .topStories {
      background: linear-gradient(30deg, #2b3c59, #343e50);
    }
  }

  .topStories:hover {
    box-shadow: 0 4px 8px rgb(0 0 0 / 25%);
  }
  .topStories h2 {
    padding: 14px 10px;
    font-size: 14px;
    font-weight: 600;
  }
  .xs-article {
    background: var(--newsImg) calc(100% - 1rem) 8px / 50px 50px no-repeat;
    flex-grow: 1;
    width: 100%;
    color: rgb(var(--clr));
    text-decoration: none;
    padding: 1rem;
  }
  .xs-article:hover {
    box-shadow: inset 0 0 0 10rem rgb(var(--clr) / 4%);
  }
  .xs-article h3 {
    font-size: 14px;
    font-weight: 600;
    max-width: 204px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
  }
  .xs-article:hover h3 {
    text-decoration: underline;
  }
  .xs-article p {
    font-size: 12px;
    color: rgb(var(--clr) / 60%);
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
    grid-row: span 2;
  }

  .article * {
    z-index: 0;
  }
  .article p {
    font-size: 12px;
    margin-bottom: 0.5rem;
  }

  .article.large {
    grid-column: span 2;
  }

  .article.small {
    height: 146px;
    grid-row: span 1;
    background: var(--newsImg, url()) calc(100% - 1rem) 1rem / 80px 80px
        no-repeat,
      linear-gradient(90deg, hsl(var(--randClr)) 0%, white 200%);
  }
  .article.small h3 {
    font-size: 1rem;
    max-width: 172px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
  }
  .article.small p {
    margin-bottom: auto;
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
  .article.small::before {
    background: none;
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
