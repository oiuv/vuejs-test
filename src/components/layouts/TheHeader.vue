<template>
    <div class="navbar navbar-expand-md navbar-dark navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <a href="/" class="navbar-brand">
                    <span class="title">{{ logo.title }}</span>
                    <img :src="logo.src" :alt="logo.title">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheHeader',
        data() {
            return {
                logo: {
                    src: `${this.url}/img/logo.gif`,
                    title: 'VueJS'
                }
            }
        },
        beforeCreate() {
            this.url = 'https://1000y.gameivy.com'
        }
    }
</script>

<style scoped>
    .title { display: none;}
</style>