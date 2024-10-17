<script setup>
import { defineProps } from 'vue';

const props = defineProps(['questionStatus' , 'barPercentage'])

</script>

<template>
     <header>
        <h3>Question {{ questionStatus }}</h3>
        <div class="bar">
            <div class="completion" :style="{width: barPercentage}"></div>
        </div>
    </header>
</template>

<style scoped>
    header{
        margin-top: 25px;
    }

    header h3 {
       height: 40px;
    }

    .bar {
        width: 300px;
        height: 50px;
        border: 3px solid lightskyblue;
    }

    .completion{
        height: 100%;
        width: 33.33%;
        background-color: lightskyblue;
    }
</style>