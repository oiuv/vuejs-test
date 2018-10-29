<template>
    <div id="wrap">
        <the-header></the-header>
    </div>
</template>

<script>
    import TheHeader from '@/components/layouts/TheHeader'

    export default {
        name: 'App',
        components : {
            TheHeader
        }
    }
</script>

<style lang="scss">
    $pagination-color: #00b5ad;
    $link-color: #12c4c5;
    $link-hover-color: #22ddde;
    $fa-font-path: "~font-awesome/fonts/";
    @import "~bootstrap/scss/bootstrap";
    @import "~font-awesome/scss/font-awesome";
    @import "./styles/main";
    body > .container { margin-top: 15px;}
</style>