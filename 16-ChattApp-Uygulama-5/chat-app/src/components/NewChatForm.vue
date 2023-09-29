<template>
    <div>
        <head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </head>
        <form>
            <textarea placeholder="Bir mesaj yaz ve göndermek için Enter'a bas." v-model="message" @keypress.enter.prevent="handleSubmit"></textarea>
            <span class="material-symbols-outlined send" @click="handleSubmit">send</span>
            <div v-if="error" class="error">{{ error }}</div>
        </form>
    </div>
</template>

<script>
import { ref } from "vue";
import getUser from "../composables/getUser";
import { timestamp } from "../firebase/config";
import useCollection from "../composables/useCollection";

export default {
    setup(){
        const { user } = getUser();
        const message = ref("");
        const { error, addDoc } = useCollection("messages");

        const handleSubmit = async () =>{
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: timestamp(),
            };
            await addDoc(chat);
            if(!error.value){
                message.value = "";
            }
        }
        return { message, handleSubmit, error };
    }
}
</script>

<style scoped>
form{
    margin: 10px;
    text-align: left;
}
textarea{
    width: 90%;
    max-width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;
    border: 1;
    border-radius: 60px;
    font-family: inherit;
    outline: none;
}
.send{
    scale: 1.5;
    margin: auto;
    cursor: pointer;
    background: #33a464;
    color: #ffffff;
    border-radius: 20px;
    padding: 4px;
    float: right;
    position: relative;
    top: 10px;
    right: 2%;
}
.send:hover{
    background-color: #2b9b68;
    color: #ffffff;
}
</style>