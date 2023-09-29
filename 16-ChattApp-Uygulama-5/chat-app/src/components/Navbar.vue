<template>
  <nav v-if="user">
    <div>
        <p>Merhaba {{ user.displayName }}</p>
        <p class="email">Şu anda {{ user.email }} olarak giriş yaptın. </p>
    </div>
    <button @click="handleClick" class="pointer">Çıkış Yap</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
export default {
    setup(){
        const { logout, error } = useLogout();
        const { user } = getUser();

        const handleClick = async () => {
            await logout();
            // if(!error.value){
            //     console.log("Çıkış yaptınız.")
            // }
        }

        return { handleClick, user }
    }
}
</script>

<style>
nav{
    padding: 20px;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav p{
    margin: 2px auto;
    font-size: 16px;
    color: #444;
    text-align: left;
}
nav p.email{
    font-size: 14px;
    color: #888;
}
.pointer{
    cursor: pointer;
}
</style>