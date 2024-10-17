<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps(['quizLength', 'numberOfCorrectAns'])
</script>

<template>
    <div class="results">
        <p>RESULTS</p>
        <H1>
            {{ numberOfCorrectAns }}/{{ quizLength }}
        </H1>
        <button>
            <RouterLink to="/home" style="text-decoration: none; color: black;">Go Back</RouterLink>
        </button>
    </div>
</template>

<style scoped>
    .results{
        text-align: center;
        padding: 100px 0;
    }

    p{
        font-size: 25px;
    }

    h1{
        font-size: 80px;
    }
    button{
        background-color: skyblue;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 20px;
        cursor: pointer;
    }

</style>