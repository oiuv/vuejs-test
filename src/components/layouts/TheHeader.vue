<template>
    <nav class="navbar navbar-expand-md navbar-dark navbar-static-top">
        <div class="container">
            <router-link class="navbar-brand" to="/">
                <span class="title">{{ logo.title }}</span>
                <img :src="logo.src" :alt="logo.title" class="img-responsive">
            </router-link>
            <button class="navbar-toggler" type="button" @click="toggleNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div :class="['collapse', 'navbar-collapse', { show: showCollapsedNav }]" id="top-navbar-collapse">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">
                    <li v-for="(item, index) in navList" class="nav-item" :class="{active : index === activeNavIndex}">
                        <a href="#" @click="changeNavIndex(index)" class="nav-link">{{ item }}</a>
                    </li>
                </ul>
                <the-entry />
            </div>
        </div>
    </nav>
</template>

<script>
    import TheEntry from '@/components/layouts/TheEntry'

    export default {
        name: 'TheHeader',
        // 添加 components 选项，并注册 TheEntry
        components: {
            TheEntry
        },
        data() {
            return {
                logo: {
                    src: `${this.url}/img/logo.gif`,
                    title: '云端千年'
                },
                navList: ['首页', '话题', '分享', '问答', '反馈', '公告', '下载', '物品', '怪物', '玩家'],
                activeNavIndex: 0,
                showCollapsedNav: false
            }
        },
        beforeCreate() {
            this.url = 'https://1000y.gameivy.com'
        },
        methods: {
            changeNavIndex(index) {
                this.activeNavIndex = index
            },
            toggleNav() {
                this.showCollapsedNav = !this.showCollapsedNav
            }
        }
    }
</script>

<style scoped>
    .title {
        display: none;
    }


</style>
