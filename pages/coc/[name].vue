<script lang="ts" setup>
const route = useRoute()
</script>

<template>
    <main>
        <p>{{ route.path }}</p>
    </main>
</template>

<style scoped></style>
