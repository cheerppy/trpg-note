<script lang="ts" setup>
/**
 * @function paths<computed>
 * @return { Array<PathName extends string> }
 * @example ()=>["home", "coc", "rules"]
 */
const paths = computed(() => { return ("home" + useRoute().path).split("/"); });
</script>

<template>
    <div class="topic-path">
        <!-- パンくずリスト -->
        <span v-for="(path, index) in paths">
            <span class="topic-path__link">
                <NuxtLink
                    :to="index === paths.length - 1 ? undefined : paths.slice(0, index + 1).map(str => '/' + str).join('').slice(5) || '/'">
                    {{ path }}
                </NuxtLink>
            </span>
            <span class="topic-path__separater">
                {{ index === paths.length - 1 ? "" : ">" }}
            </span>
        </span>
    </div>
</template>

<style scoped>
.topic-path__separater {
    margin-inline: 5px;
}
</style>
