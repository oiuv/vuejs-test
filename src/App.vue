<template>
    <div id="wrap">
        <the-header></the-header>
        <the-footer></the-footer>
    </div>
</template>

<script>
    import TheHeader from '@/components/layouts/TheHeader'
    import TheFooter from '@/components/layouts/TheFooter'

    export default {
        name: 'App',
        components : {
            TheHeader,
            TheFooter
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