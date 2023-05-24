<script lang="ts" setup></script>

<template>
    <div>
        <CommonHeader />

        <NuxtPage id="coc" />
        <!-- <Test />
        <p>
            <NuxtLink to="/">home</NuxtLink>
        </p>
        <p>
            <NuxtLink to="/coc">coc</NuxtLink>
        </p>
        <p>
            <NuxtLink to="/coc/rules">coc/rules</NuxtLink>
        </p> -->
        <CommonFooter class="footer"></CommonFooter>
    </div>
</template>

<style scoped lang="scss">
@use "assets/variables";

$footer-height: 130px;

#coc {
    height: 100%;
    min-height: 100vh;
    position: relative;
    padding-bottom: $footer-height;
}

.footer {
    height: $footer-height;
    position: absolute;
    bottom: 0;
}
</style>
<style deep lang="scss">
@use "assets/variables";

h2 {
    font-size: 40px;
    line-height: 1.4;
}

main#coc {
    $width: $page-width;
    width: $width;
    margin-inline: auto;
}

main#coc section {
    background-color: $color-pink;
    border-radius: 30px;
    padding-inline: 30px;
    padding-block: 20px;
    margin: 18px 0 42px;
}
</style>
