<template>
    <div>
        <div class="Welcome-Navbar">
            <h3 @click="isLoginClicked" class="signup-login-navbar login">Giriş Yap</h3>
            <h3 @click="isSignupClicked" class="signup-login-navbar signup">Üye Ol</h3> 
        </div>
        <div class="welcome container">
            <h1 class="Welcome-title">Hoş Geldiniz</h1>
            <div v-if="showLogin">
                <h2>Giriş Yap</h2>
                <LoginForm @login="enterChat"></LoginForm>
                <p>Henüz hesabınız yok mu? <span @click="showLogin = false">Üye ol</span></p>
            </div>
            <div v-if="!showLogin">
                <h2>Üye Ol</h2>
                <SignupForm @signup="enterChat"></SignupForm>
                <p>Zaten hesabınız var mı <span @click="showLogin = true">Giriş Yap</span></p>
            </div>
        </div>
    </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
    components: { SignupForm, LoginForm },
    setup(){
        const showLogin = ref(true);
        const router = useRouter();

        const enterChat = () => {
            router.push({ name:'chatroom' })
        }

        function isLoginClicked(){
            this.showLogin = true;
        }
        function isSignupClicked(){
            this.showLogin = false;
        }



        return { showLogin, isLoginClicked, isSignupClicked, enterChat }
    }
}
</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}
.welcome form{
    width: 300px;
    margin: 20px auto;
}
.welcome label{
    display: block;
    margin: 20px 0 10px;
}
.welcome input{
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #ddd;
    outline: none;
    color: #3f4044;
    margin: 10px auto;
}
.welcome input:hover{
    border:1px rgb(104, 105, 105) solid;
}
.welcome span{
    color: #9c9ea1;
    cursor: pointer;
}
.welcome span:hover{
    color: #33a464;
    text-decoration: underline;
}
.welcome button{
    margin: 20px auto;
}
.Welcome-title{
    color: #3f4044;
    font-size: 52px;
}
.signup-login-navbar{
    cursor: pointer;
    padding: 10px;
    margin: 8px;
    float: right;
    background: #33a464;
    color: #ffffff;
    border-radius: 20px; 
    position: absolute;
    top: 100px;
    right: 50px;
}
.signup-login-navbar:hover{
    background-color: #2b9b68;
    color: #ddd;
}
.signup-login-navbar.login{
    right: 140px!important;
}
</style>