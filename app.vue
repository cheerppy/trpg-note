<template>
    <div>
        nuxt page
        <DevOnly>
            <!-- <DevNav v-if="devNavState" /> -->
            <DevNav />
            <DevTrigger />
        </DevOnly>
        <NuxtPage />
    </div>
</template>
