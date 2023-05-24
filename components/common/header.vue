<script lang="ts" setup>
import titleImage from "assets/titleImage-cloud.png"
</script>

<template>
    <header class="potta">
        <div class="header__border--ribon-like">
            <div class="header__border--thin">
                <div class="header__inner">
                    <div class="to-home-wrapper">
                        <NuxtLink to="/coc">
                            <div class="to-home">Home</div>
                        </NuxtLink>
                    </div>
                    <div class="buttons-wrapper">
                        <NuxtLink to="/coc/rules">
                            <button class="bg-img--check">はうするーる</button>
                        </NuxtLink>
                        <NuxtLink to="/coc/occupations">
                            <button class="bg-img--check">職業技能</button>
                        </NuxtLink>
                        <NuxtLink to="/coc/aliens">
                            <button class="bg-img--check">神話生物</button>
                        </NuxtLink>
                    </div>
                    <div class="to-index-wrapper">
                        <NuxtLink to="/">
                            <div class="to-index">
                                <img class="titleImage" :src=titleImage alt="ちあぴのTRPGのーと">
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    background-color: #9b5d61;
    padding: 6px 0;
    box-shadow: 0 0 5px #000000B3;
}

.header__border--ribon-like {
    border-color: #AF8893;
    border-width: 3px 0;
    border-style: solid;
}

.header__border--thin {
    border-width: 1px 0;
    border-style: solid;
    margin: 5px 0;
    border-color: #755B62;
    height: 90px;
}

.header__inner {
    margin: 0 auto;
    width: $page-width;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.buttons-wrapper,
.to-home-wrapper {
    padding-bottom: 7px;
    align-self: end;
}

.buttons-wrapper {
    padding-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

header * {
    font-size: 24px;
    color: #9c5555;
    text-decoration: none;
}

header button {
    height: 44px;
    padding-inline: 30px;
    margin-inline: 8px;
    border-color: #fff5f9;
    background-color: #fff5f9;
    background-size: auto auto;
    border-radius: 2px;
}

.to-home {
    background-color: inherit;
    border: none;
    background-color: #F4d9E1;
    border-radius: 30px;
    padding: 0 35px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.titleImage {
    width: auto;
    height: 83px;
}

/* 現在の場所とホバーしているボタンのみ濃色表示 */
.router-link-exact-active *,
header *:hover {
    color: #993500;
}
</style>
