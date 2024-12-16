<script setup>
import { ref, watch } from "vue";
import q from '../data/quizes.json'
import Card from '../components/Card.vue'


const quizes = ref(q)
const search = ref("")

watch(search, (newValue) => {
  quizes.value = q.filter(quiz => 
    quiz.name.toLowerCase().includes(newValue.toLowerCase())
  );
});

</script>

<template>
    <header>
        <h1>Quizes</h1>
        <input v-model.trim="search" type="text" placeholder="Search">
        <div class="login-cont">
          <RouterLink to="/login">
            <button class="login-button">Login</button>
          </RouterLink>
          <RouterLink to="/register">
            <button class="login-button">Register</button>
          </RouterLink>
        </div>
    </header>
    <div class="options-container">
        <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
    </div>
</template>

<style scoped>
  header{
    margin-bottom: 100px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  header h1{
    font-weight: bold;
    margin-right: 30px;
  }

  header input{
    border: none;
    background-color: aliceblue;
    padding: 10px;
    border-radius: 5px;
  }

  .options-container{
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  .login-button {
    padding: 10px 15px;
    margin-left: 10px; 
    background-color: lightskyblue; 
    border: none; 
    border-radius: 5px; 
    cursor: pointer; 
    transition: background-color 0.3s; 
  }

  .login-button:hover {
    background-color: #0056b3; 
  }

  .login-cont {
    display: flex;
    flex: 1;
  }
</style>