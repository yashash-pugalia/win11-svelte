<script>
  import { IconButton } from "fluent-svelte";
  import { scale } from "svelte/transition";

  let value;
  let address = "https://www.google.com/?igu=1";

  const isValidURL = (string) => {
    var res = string.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return res !== null;
  };

  const searcher = (e) => {
    let value = e.target.value;

    if (e.key === "Enter") {
      if (isValidURL(value)) {
        address = value.startsWith("http") ? value : `https://${value}`;
      } else {
        address = `https://www.google.com/search?q=${value}&igu=1`;
      }
    }
  };

  const setSite = (link) => {
    value = link;
    address = link;
  };

  const bookmarks = [
    {
      title: "GitHub",
      image: "https://github.com/favicon.ico",
      link: "https://github.com/yashash1511",
      external: true,
    },
    {
      title: "Gmail",
      image: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
      link: "mailto:yashash1511@gmail.com",
      external: true,
    },
    {
      title: "Yashash",
      image: "https://yashash.is-a.dev/favicon.webp",
      link: "https://yashash.is-a.dev",
    },
  ];
</script>

<div class="edge activeShadow" transition:scale={{ duration: 200 }}>
  <div class="topBar">
    <div class="addressBar">
      <IconButton>&larr;</IconButton>
      <IconButton>&rarr;</IconButton>
      <IconButton>&#10227;</IconButton>
      <input
        bind:value
        type="text"
        on:keydown={searcher}
        placeholder="Search or enter web address"
      />
      <IconButton>&#9711;</IconButton>
      <IconButton>•••</IconButton>
    </div>
    <div class="bookmarksBar">
      {#each bookmarks as { title, image, link, external }}
        {#if external}
          <a
            href={link}
            class="bookmark hvrDark"
            target="_blank"
            rel="noreferrer"
          >
            <img src={image} alt={title} height="20" width="20" />
            <p>{title}</p>
          </a>
        {:else}
          <div class="bookmark hvrDark" on:click={() => setSite(link)}>
            <img src={image} alt={title} height="20" width="20" />
            <p>{title}</p>
          </div>
        {/if}
      {/each}
    </div>
  </div>
  <iframe title="broswer iframe" src={address} frameborder="0" />
</div>

<style>
  .edge {
    background: rgb(var(--bg7));
    color: rgb(var(--clr));
    position: absolute;
    inset: 10%;
    border-radius: 8px;
    overflow: hidden;
    resize: both;
    display: flex;
    flex-direction: column;
  }

  .topBar {
    padding: 4px 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    border-bottom: 1px solid rgb(var(--clr) / 10%);
  }

  .addressBar,
  .bookmarksBar {
    display: flex;
    gap: 8px;
  }

  input {
    width: 100%;
    background: rgb(var(--bg8));
    height: 2rem;
    border: 1px solid transparent;
    border-radius: 4px;
    color: rgb(var(--clr));
    padding-left: 1rem;
  }
  input:hover {
    border: 1px solid rgb(var(--clr) / 25%);
  }
  input:focus {
    outline: 2px solid rgb(var(--clrPrm));
  }

  .bookmark {
    display: flex;
    color: rgb(var(--clr));
    text-decoration: none;
    align-items: center;
    font-size: 12px;
    padding: 4px;
    gap: 8px;
    border-radius: 2px;
  }

  iframe {
    height: 100%;
    width: 100%;
  }
</style>
