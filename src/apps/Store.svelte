<script>
    import { draggable } from '@neodrag/svelte';
    import { scale } from 'svelte/transition';
    import Toolbar from '../components/shared/Toolbar.svelte';

    let tab = 'Home';
</script>

<div
    class="store activeShadow"
    use:draggable={{
        handle: '.mainToolbar',
    }}
    transition:scale={{ duration: 200 }}
>
    <Toolbar appName="Microsoft Store" />

    <div class="mainApp">
        <nav>
            {#each ['Home', 'Apps', 'Gaming', 'Library', 'Help'] as e}
                <div
                    class="navBtn hvrBgDark"
                    on:click={() => (tab = e)}
                    class:active={tab === e}
                >
                    {e}
                </div>
            {/each}
            <div class="marker" />
        </nav>

        <main class="Home">
            <!-- {#if tab === "Home"} -->
            <img
                src="https://win11.blueedge.me/img/store/lucacover.jpg"
                alt=""
            />
            <div class="imgDiffuser" />
            <h1>{tab}</h1>
            <h2>Top free apps</h2>
            <div class="cardCont">
                <div class="card hCard">card</div>
                <div class="card hCard">card</div>
                <div class="card hCard">card</div>
                <div class="card hCard">card</div>
            </div>
            <h2>Explore a world of music</h2>
            <div class="cardCont">
                <div class="card vCard">card</div>
                <div class="card vCard">card</div>
                <div class="card vCard">card</div>
                <div class="card vCard">card</div>
            </div>
            <h2>Best selling games</h2>
            <div class="cardCont">
                <div class="card vCard">card</div>
                <div class="card vCard">card</div>
                <div class="card vCard">card</div>
                <div class="card vCard">card</div>
            </div>
            <!-- {:else if tab === "Apps"} -->
            <!-- {:else if tab === "Gaming"} -->
            <!-- {:else if tab === "Library"} -->
            <!-- {:else if tab === "Help"} -->
            <!-- {/if} -->
        </main>
    </div>
</div>

<style>
    .store {
        background: var(--mica);
        position: absolute;
        inset: 10%;
        border-radius: 8px;
        overflow: hidden;
        resize: both;
    }
    .mainApp {
        display: flex;
        position: absolute;
        width: 100%;
        height: calc(100% - 36px);
    }

    nav {
        width: 72px;
        padding: 0 4px;
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        position: relative;
        gap: 4px;
        margin-bottom: 12px;
    }

    .navBtn {
        height: 64px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .navBtn:nth-child(4) {
        margin-top: auto;
    }
    .navBtn.active {
        background: white;
    }

    @media (prefers-color-scheme: dark) {
        .navBtn.active {
            background: #454545;
        }
    }

    .marker {
        background: rgb(var(--clrPrm));
        width: 4px;
        height: 24px;
        border-radius: 3px;
        position: absolute;
        transition: all 200ms;
    }

    .navBtn.active:nth-child(1) ~ .marker {
        top: 20px;
    }
    .navBtn.active:nth-child(2) ~ .marker {
        top: 88px;
    }
    .navBtn.active:nth-child(3) ~ .marker {
        top: 156px;
    }
    .navBtn.active:nth-child(4) ~ .marker {
        top: calc(100% - 112px); /* 44 + 68 */
    }
    .navBtn.active:nth-child(5) ~ .marker {
        top: calc(100% - 44px); /* 24px height of marker + 20px to center it  */
    }

    main {
        background: rgb(255 255 255 / 75%);
        border-top-left-radius: 8px;
        flex: 1;
        overflow: overlay;
        position: relative;
        padding: 2rem;
        border: 1px solid rgb(var(--clr) / 10%);
    }
    @media (prefers-color-scheme: dark) {
        main {
            background: rgb(255 255 255 / 4%);
        }
    }
    main h1 {
        color: white;
        text-shadow: 0 0 4px black;
        position: absolute;
        top: 2rem;
    }

    .Home img {
        width: calc(100% + 4rem);
        margin: -2rem -2rem 0 -2rem;
    }

    .imgDiffuser {
        /* background: black; */
        width: calc(100% + 4rem);
        height: 5rem;
        margin: -3rem -2rem 0;
        backdrop-filter: blur(20px);
    }

    .Home::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: linear-gradient(135deg, black, transparent 50%);
        aspect-ratio: 16 / 9; /* the same as the image */
    }

    .Home .cardCont {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem 0;
    }

    .Home .card {
        background: rgb(255 255 255 / 4%);
        padding: 1rem;
        border-radius: 4px;
        border: 1px solid rgb(var(--clr) / 5%);
        box-shadow: 0 2px 4px rgb(0 0 0 / 5%);
        transition: all 200ms;
    }
    .Home .card:hover {
        background: rgb(255 255 255 / 2%);
        box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
        transform: translateY(-4px);
    }

    .hCard {
        width: 330px;
        height: 110px;
    }

    .vCard {
        width: 180px;
        height: 270px;
    }
</style>
