<template>
    <div class="container mt-4">
        <Message :show.sync="msgShow" :type="msgType" :msg="msg"/>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">登录</div>

                    <div class="card-body">
                        <div class="form-group row">
                            <label for="account" class="col-sm-4 col-form-label text-md-right">用户名</label>

                            <div class="col-md-6">
                                <input id="account" type="text" class="form-control" v-model.trim="username"
                                       required autofocus>

                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">密码</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" v-model.trim="password"
                                       required>

                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember"> 记住我
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button @click="login" type="submit" class="btn btn-primary">
                                    登录
                                </button>

                                <a class="btn btn-link" href="javascript:">
                                    忘记密码？
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                username: '', // 用户名
                password: '', // 密码
                msg: '', // 消息
                msgType: '', // 消息类型
                msgShow: false // 是否显示消息，默认不显示
            }
        },
        methods: {
            login(e) {
                this.$nextTick(() => {
                    const target = e.target.type === 'submit' ? e.target : e.target.parentElement

                    if (this.username && this.password) {
                        this.submit()
                    } else {
                        this.showMsg('请填写用户名和密码')
                    }
                })
            },
            submit() {
                const user = {
                    name: this.username,
                    password: this.password
                }
                const localUser = this.$store.state.user

                if (localUser) {
                    if (localUser.name !== user.name || localUser.password !== user.password) {
                        this.showMsg('用户名或密码不正确', 'danger')
                    } else {
                        this.$store.dispatch('login')
                    }
                } else {
                    this.showMsg('不存在该用户')
                }
            },
            showMsg(msg, type = 'warning') {
                this.msg = msg
                this.msgType = type
                this.msgShow = false

                this.$nextTick(() => {
                    this.msgShow = true
                })
            }
        }
    }
</script>

<style scoped>

</style>