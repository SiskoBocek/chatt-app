<template>
  <div class="chat-window">
    <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </head>
    <div class="error" v-if="error">{{ error }}</div>
    <div class="messages" v-if="documents" ref="messages">
        <div class="single" v-for="doc in formatedDocuments" :key="doc.id">
            <span class="created-at">{{ doc.createdAt }}</span>
            <span class="name">{{ doc.name }}</span><br>
            <span class="message">{{ doc.message }}</span>
        </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, ref, onUpdated, } from "vue";
export default {
    setup(){
        const { error, documents } = getCollection("messages");
        const formatedDocuments = computed(() => {
            if(documents.value){
                return documents.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate());
                    return {...doc, createdAt: time};
                });
            }
        })

        const messages = ref(null);
        onUpdated(()=>{
            messages.value.scrollTop = messages.value.scrollHeight;
        });

        return { error, documents, formatedDocuments, messages };
    }
}
</script>

<style>
.chat-window{
    background: #fffbfb;
    padding: 30px 20px;
}
.single{
    margin: 18px 0;
    text-align: left;
    background: #86fab8;
    padding: 10px;
    max-width: 300px;
    border-radius: 23px;    
}
.created-at{
    display: block;
    color: #9c9ea1;
    font-size: 11px;
    margin-bottom: 5px;
}
.name{
    font-weight: bold;
    font-size: 11px;
    margin-right: 7px;
    color: #8d8d8d;
}
.messages{
    color: #3f4044;
    max-height: 400px;
    overflow: auto;
}
.delete{
    float: right;
    cursor: pointer;
    padding: 3px;
    border-radius: 20px;
   display: block;
}
.delete:hover{
    color: rgb(228, 32, 32);
    background: #fffbfb;
}
</style>