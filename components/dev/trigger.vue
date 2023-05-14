<script lang="ts" setup>
const devState = useState("devNavState")
const trigger = () => { devState.value = !devState.value }
</script>

<template>
    <div class="dev-trigger" @click="trigger">
        <span>D</span>
    </div>
</template>

<style scoped lang="scss">
.dev-trigger {
    $size: 20px;
    background-color: #ffffff66;
    position: fixed;
    top: 0;
    right: 0;
    width: $size;
    height: $size;
    border-radius: $size;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}
</style>
