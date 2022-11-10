<script>
    import { draggable } from '@neodrag/svelte';
    import { scale } from 'svelte/transition';
    import Toolbar from '../components/shared/Toolbar.svelte';
</script>

<div
    class="calculator activeShadow"
    use:draggable={{
        handle: '.mainToolbar',
    }}
    transition:scale={{ duration: 200 }}
>
    <Toolbar appName="Calculator" />
    <div class="mainApp">
        <div class="calcType">Standard</div>
        <div class="valCont">0</div>
        <div class="Mthing">
            {#each 'MC MR M+ M- MS'.split(' ') as e}
                <div class="Mbtn">{e}</div>
            {/each}
        </div>
        <div class="btnGrid">
            {#each '% CE C bs 1/x x^2 ^2√x ÷ 7 8 9 × 4 5 6 - 1 2 3 + ^+/- 0 . ='.split(' ') as e}
                <div class="btn">{e}</div>
            {/each}
        </div>
        <div class="history">
            <!-- 320w -->
        </div>
    </div>
</div>

<style>
    .calculator {
        background: var(--mica);
        position: absolute;
        top: 10%;
        left: 10%;
        min-width: 320px;
        min-height: 500px;
        border-radius: 8px;
        overflow: hidden;
        resize: both;
    }
    .mainApp {
        display: flex;
        flex-direction: column;
        padding: 4px;
        position: absolute;
        width: 100%;
        height: calc(100% - 36px);
    }

    .calcType {
        font-size: 1.33rem;
        font-weight: 600;
    }

    .valCont {
        font-size: 3rem;
        font-weight: 600;
        text-align: right;
        padding: 1rem;
    }

    .Mthing {
        display: flex;
        height: 6%;
        gap: 2px;
        margin-bottom: 2px;
    }
    .Mbtn {
        max-width: 80px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
    }
    .Mbtn:hover {
        background: rgb(var(--clr) / 5%);
    }

    .btnGrid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(6, 1fr);
        flex: 1;
        gap: 2px;
    }

    .btn {
        border-radius: 4px;
        border: 1px solid rgb(0 0 0 / 10%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        font-size: 16px;
    }

    .btn:hover,
    .btn:nth-child(-n + 8),
    .btn:nth-child(4n) {
        background: #f9f9f9;
    }

    .btn,
    .btn:nth-child(-n + 8):hover,
    .btn:nth-child(4n):hover {
        background: white;
    }

    @media (prefers-color-scheme: dark) {
        .btn:hover,
        .btn:nth-child(-n + 8),
        .btn:nth-child(4n) {
            background: rgb(255 255 255 / 8%);
        }

        .btn,
        .btn:nth-child(-n + 8):hover,
        .btn:nth-child(4n):hover {
            background: rgb(255 255 255 / 10%);
        }
    }

    .btn:last-child {
        background: rgb(var(--clrPrm));
        color: rgb(var(--altClr));
    }
    .btn:last-child:hover {
        background: rgb(var(--clrPrm) / 80%);
    }
</style>
