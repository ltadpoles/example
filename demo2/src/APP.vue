<template>
    <div>
        <router-view />
        <img src="./images/01.jpg" alt="">

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
