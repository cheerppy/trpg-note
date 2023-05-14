<script lang="ts" setup>
const routes = useRouter().getRoutes().filter(route => !!route.name).map(route => ({ path: route.path, name: route.name })).filter(route => route.path !== "/").sort((a, b) =>
    a.path > b.path ? 1 :
        a.path == b.path ? 0 : -1
);
</script>

<template>
    <div class="dev-nav">
        <span>DevMode</span>
        <button>
            <NuxtLink to="/">
                home
            </NuxtLink>
        </button>
        <button v-for="route in routes" :key="route.name">
            <NuxtLink :to="route.path">
                {{ route.name }}
            </NuxtLink>
        </button>
    </div>
</template>

<style scoped lang="scss">
.dev-nav {
    background-color: gray;
    margin-bottom: 10px;
    height: 40px;
}
</style>
