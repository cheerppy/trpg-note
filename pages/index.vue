<script lang="ts" setup>
const rawLastmod = document.lastModified
</script>

<template>
    <div>
        <p>home</p>
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

<style scoped></style>
