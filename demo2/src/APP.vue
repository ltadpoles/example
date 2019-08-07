<template>
    <div>
        <router-view />
        <img src="./images/01.jpg" alt="" width="150" height="150">
        <img src="./images/02.jpg" alt="" width="150" height="150">
        <img src="./images/03.jpg" alt="" width="150" height="150">
        <img src="./images/04.jpg" alt="" width="150" height="150">

        <p class="font-sty">我们是字体图标</p>
        <span class="iconfont icon-chengzi"></span>
        <span class="iconfont icon-boluo"></span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello Vue'
        }
    }
}
</script>

<style scoped>
    .font-sty {
        margin-bottom: 10px;
    }
</style>
