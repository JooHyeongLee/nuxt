<template>
    <div class="header" >
        <div class="logo"><a href="/"><img src="~assets/top_logo.png" alt="openrider" /></a></div>
        <div class="m_gnb" v-on:click="menuToggle"></div><!-- 추가되었습니다. -->
        <ul class="gnb">
            <li id="nav-index">
                <a href="#">오픈라이더</a>
            </li>
            <li id="nav-product">
                <a href="#">제품안내</a>
            </li>
            <li id="nav-media">
                <a href="#">ON-AIR</a>
            </li>
            <li id="nav-contest">
                <!-- <a href="/contest">대회안내</a> -->
                <a v-on:click="developing">대회안내</a>
            </li>
            <li id="nav-record">
                <a  href="#">나의기록</a>
            </li>
            <li id="nav-notice">
                <a href="/notice">새소식</a>
            </li>
        </ul>
        <div class="profile">
            <div class="util">
                <span class="user_img"><img id="profile_img" /></span>
                <span>오픈라이더님 안녕하세요.</span>
                <a href="#" v-on:click="logout" class="login">로그아웃</a>
                <a href="/login" class="login" v-if="false">로그인</a>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default ({
    name: 'header-bar',
    data: ()=> {
        return {
            title: 'Header Bar',
            isLogin: false,
            username: "",
            profileUrl: "",
        }
    },
    mounted() {

    },
    methods: {
        async refreshUI() {
        },
        logout() {
        },
        menuToggle() {
            $('.header .gnb').toggleClass('dsp_b');
            $('.m_gnb').toggleClass('on');
            $('.header .util').toggleClass('dsp_b');
            $('.header').toggleClass('open');
        },
        getProfileUrl(imgPath) {
        },
        developing() {
            alert('오픈 준비중입니다.');
        },
    },
})

</script>
<style scoped>
#profile_img {
    width: 35px;
    height: 35px;
}
</style>