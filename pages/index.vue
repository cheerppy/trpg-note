<script lang="ts" setup>
// SSRではdocumentは存在しない
// const rawLastmod = document.lastModified

</script>

<template>
    <main id="entrance">
        <p class="test">home</p>
        <p>
            <NuxtLink to="/">home</NuxtLink>
        </p>
        <p>
            <NuxtLink to="/coc">coc</NuxtLink>
        </p>
        <div class="section-container">
            <section id="entrance_news">
                <h2>＊最近のにゅーす＊</h2>
                <hr>
                <table>
                    <tr>
                        <th>2023年</th>
                    </tr>
                    <tr>
                        <td>5/x</td>
                        <td>サイトリニューアル</td>
                    </tr>
                </table>
            </section>
            <section id="entrance_character-sheet-stock">
                <h2>＊キャラシートおきば＊</h2>
                <hr>
            </section>
            <section id="entrance_scenario-shop" style="display: none;">
                <h2>＊しなりおしょっぷ＊</h2>
                <hr>
            </section>
        </div>
        <div>
            <!-- <p>last mod at: {{ rawLastmod }}</p> -->
        </div>
    </main>
</template>

<style scoped lang="scss">
h2 {
    color: #3d1818;
    font-size: 38px;
    line-height: 1.4;
}

main#entrance {
    $width: $page-width;
    width: $width;
    margin-inline: auto;
}

main#entrance section {
    background-color: $color-pink;
    border-radius: 30px;
    padding-inline: 30px;
    padding-block: 20px;
    margin: 18px 0 42px;
}

.section-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 5px;

    section#entrance_news {
        grid-row: 1 / 3;
    }
}

section {
    display: flex;
    flex-direction: column;
    align-items: center;

    hr {
        border: none;
        border-radius: 3px;
        height: 3px;
        width: 445px;
        background-color: #9B5D61;
    }

    &#entrance_news {

        table,
        td {
            border: none;
        }
    }
}
</style>
