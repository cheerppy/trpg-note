<script lang="ts" setup>
const rawLastmod = document.lastModified
</script>

<template>
    <div>
        <p class="test">home</p>
        <p>
            <NuxtLink to="/">home</NuxtLink>
        </p>
        <p>
            <NuxtLink to="/coc">coc</NuxtLink>
        </p>
        <p>
            <NuxtLink to="/coc/rules">coc/rules</NuxtLink>
        </p>
        <div>
            <p>last mod at: {{ rawLastmod }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.test {
    background-color: pink;
}
</style>
