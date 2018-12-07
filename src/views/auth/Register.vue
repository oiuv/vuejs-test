<template>
    <div class="container mt-3">
        <!-- 消息组件 -->
        <Message :show.sync="msgShow" :type="msgType" :msg="msg"/>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">注册</div>

                    <div class="card-body">
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">用户名</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" v-model.trim="username"
                                       required autofocus placeholder="游戏登录账号(英文或数字)">

                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password"
                                   class="col-md-4 col-form-label text-md-right">密码</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control"
                                       v-model.trim="password" required placeholder="请填写登录密码">

                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email"
                                   class="col-md-4 col-form-label text-md-right">确认密码</label>

                            <div class="col-md-6">
                                <input id="email" type="password"
                                       class="form-control"
                                       v-model.trim="cpassword" value="" required placeholder="请重复输入登录密码">

                            </div>
                        </div>


                        <div class="form-group row">
                            <label for="captcha" class="col-md-4 col-form-label text-md-right">验证码</label>

                            <div class="col-md-6 input-group">
                                <input id="captcha" class="form-control" v-model.trim="captcha">
                                <div class="input-group-append">
                                    <div class="thumbnail" title="点击图片重新获取验证码" @click="getCaptcha">
                                        <div class="captcha" v-html="captchaTpl"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-info btn-block" @click="register">
                                    <i class="fa fa-btn fa-sign-in"></i> 注册
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import createCaptcha from '@/utils/createCaptcha'
    import ls from '@/utils/localStorage'

    export default {
        name: 'Register',
        data() {
            return {
                captchaTpl: '', // 验证码模板
                username: '', // 用户名
                password: '', // 密码
                cpassword: '', // 确认密码
                captcha: '', // 验证码
                msg: '', // 消息
                msgType: '', // 消息类型
                msgShow: false // 是否显示消息，默认不显示
            }
        },
        created() {
            this.getCaptcha()
        },
        methods: {
            getCaptcha() {
                const {tpl, captcha} = createCaptcha(4)

                this.captchaTpl = tpl
                this.localCaptcha = captcha
            },
            register(e) {
                this.$nextTick(() => {
                    const target = e.target.type === 'submit' ? e.target : e.target.parentElement
                    if (this.username && this.password && this.cpassword && this.captcha) {
                        if (this.password !== this.cpassword) {
                            this.showMsg('请确认二次密码输入一致')
                        } else if (this.captcha.toUpperCase() !== this.localCaptcha) {
                            this.showMsg('验证码不正确')
                            this.getCaptcha()
                        } else {
                            this.submit()
                        }
                    } else {
                        this.showMsg('请完整填写注册信息')
                    }

                })
            },
            submit() {
                const user = {
                    name: this.username,
                    password: this.password,
                    avatar: `https://api.adorable.io/avatars/200/${this.username}.png`
                }
                const localUser = this.$store.state.user

                if (localUser) {
                    if (localUser.name === user.name) {
                        this.showMsg('用户名已存在')
                    } else {
                        this.login(user)
                    }
                } else {
                    this.login(user)
                }
            },
            login(user) {
                this.$store.dispatch('login', user)
                this.showMsg('注册成功', 'success')
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
    .thumbnail {
        width: 120px;
        cursor: pointer;
    }

    .thumbnail .captcha {
        height: 38px;
        background: #E1E6E8;
    }

    .captcha {
        font-size: 24px;
        font-weight: bold;
        user-select: none;
        text-align: center
    }
</style>