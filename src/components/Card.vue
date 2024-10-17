<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps(['quiz'])

const navigateToQuiz = () =>{
  router.push(`quiz/${props.quiz.id}`)
  // router.push({name: 'quiz', params: {id: quiz.id}, query: {xyz: 'abcd'}})

}
</script>

<template>
  <div class="card" @click="navigateToQuiz">
      <img :src="quiz.img" alt="">
      <div class="card-text">
        <h2>{{ quiz.name }}</h2>
        <p>{{ quiz.questions.length }} Questions</p>
      </div>
  </div>
</template>

<style scoped>
.card{
    width: 310px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(20, 20, 20, 0.4);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
  }

  .card img{
    width: 100%;
    height: 190px;
    margin: 0;
  }

  .card .card-text{
    padding: 0 5px;
  }

  .card .card-text h2{
    font-weight: bold;
  }
</style>