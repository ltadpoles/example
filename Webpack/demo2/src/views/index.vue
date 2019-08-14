<template>
    <div class="index-css">
        这里是首页
        <p class="list">to: <router-link to='/person'>个人信息</router-link></p>
        <p class="list">to: <router-link to='/member'>会员</router-link></p>
        <p class="list">to: <router-link to='/cart'>购物车</router-link></p>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>
<style scoped lang='scss'>
    .index-css {
        font-size: 16px;
        font-weight: 600;
        .list {
            margin: 10px 15px;
        }
    }
</style>


