<template>
    <!-- Right Side Of Navbar -->
    <ul v-if="auth" class="navbar-nav">
        <!-- Authentication Links -->
        <li class="nav-item">
            <a class="nav-link" href="https://1000y.gameivy.com/topics/create">
                <span class="fa fa-plus" aria-hidden="true"></span>
            </a>
        </li>

        <li class="nav-item">
            <a href="https://1000y.gameivy.com/notifications" class="notifications-badge nav-link">
                <span class="badge badge-fade badge-pill" title="消息提醒">0</span>
            </a>
        </li>
        <li class="nav-item dropdown">
            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
               v-dropdown aria-haspopup="true" aria-expanded="false">
                <span v-if="user">
                    <img class="img-responsive rounded-circle mr-1" v-if="user.avatar" :src="user.avatar" height="30px"
                         width="30px">
                    <span v-if="user.name">{{ user.name }}</span>
                </span>
                <span v-else>佚名</span>
                <span class="caret"></span>
            </a>

            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="https://1000y.gameivy.com/permission-denied">
                    <i class="fa fa-dashboard fa-fw" aria-hidden="true"></i>管理后台
                </a>
                <a class="dropdown-item" href="https://1000y.gameivy.com/users/1"><i class="fa fa-user fa-fw"
                                                                                     aria-hidden="true"></i>个人中心</a>
                <a class="dropdown-item" href="https://1000y.gameivy.com/users/1/edit"><i
                        class="fa fa-pencil-square-o fa-fw" aria-hidden="true"></i>编辑资料</a>
                <a class="dropdown-item" href="javascript:" @click="logout">
                    <i class="fa fa-sign-out fa-fw" aria-hidden="true"></i>退出登录
                </a>

            </div>
        </li>

    </ul>
    <ul v-else class="navbar-nav">
        <li class="nav-item mx-1">
            <router-link class="nav-link btn btn-outline-secondary btn-sm" to="/auth/login">
                <i class="fa fa-fw fa-user"></i> 登录
            </router-link>
        </li>
        <li class="nav-item mx-1">
            <router-link class="nav-link btn btn-outline-secondary btn-sm" to="/auth/register">
                <i class="fa fa-fw fa-user-plus"></i> 注册
            </router-link>
        </li>
    </ul>

</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'TheEntry',
        computed: {
            ...mapState([
                'auth',
                'user'
            ])
        },
        methods: {
            logout() {
                this.$swal({
                    text: '你确定要退出吗?',
                    confirmButtonText: '退出'
                }).then((res) => {
                    if (res.value) {
                        this.$store.dispatch('logout')
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>