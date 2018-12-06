<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-7">
                    由 <a :href="homepage" target="_blank">{{ author }}</a> 设计和编码 <span
                        style="color: #e27575;font-size: 14px;">❤</span>
                </div>

                <div class="col-5 text-right"><a :href="email">联系我们</a></div>
            </div>
        </div>
    </footer>

</template>

<script>

    export default {
        name: "TheFooter",
        data() {
            return {
                author: '秋林拾叶',
                homepage: 'https://github.com/oiuv/1000y.info',
                email: 'mailto:i@gameivy.com'
            }
        }
    }
</script>

<style scoped>

</style>