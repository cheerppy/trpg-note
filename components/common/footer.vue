<script lang="ts" setup>
// const jst = new Date(document.lastModified);
// const timezoneOffset = new Date().getTimezoneOffset()
// const lastmod = jst.getFullYear() + "/" + (jst.getMonth() + 1) + "/" + jst.getDate() + " " + jst.getHours() + ":" + ("0" + jst.getMinutes()).slice(-2) + ":" + ("0" + jst.getSeconds()).slice(-2)
// const timezone = (timezoneOffset === -540) ? "(JST)" : `GMT ${(timezoneOffset >= 0) ? "+" : ""}${Math.floor(timezoneOffset / -60)}:${timezoneOffset / 60}`
</script>

<template>
    <footer class="container" id="footer">
        <div class="footer__inner">
            <slot />
            <!-- <p>最終更新: {{ lastmod + " " + timezone }}</p> -->
            <p>© 2022 cheerppy</p>
        </div>
    </footer>
</template>

<style scoped lang="scss">
// @use "@/assets/_variables.scss" as *;

footer {
    background-color: #9c5555;
    border-top: 5px solid #755B62;
    border-bottom: 1px solid #9c5555;
    color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
}

.footer__inner {
    padding: 15px 30px;
}
</style>
