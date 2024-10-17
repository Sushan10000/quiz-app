<script setup>
import Question from '@/components/Question.vue';
import QuizHeader from '@/components/QuizHeader.vue';
import Result from '@/components/Result.vue';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import quizes from '../data/quizes.json';

const route = useRoute()

const quizId = parseInt(route.params.id)

const quiz = quizes.find(q => q.id === quizId)

const currentQuestionIndex = ref(0)

const numberOfCorrectAns = ref(0)

const showResult = ref(false)

// const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`)

// watch(currentQuestionIndex, (newIndex) => {
//     questionStatus.value = `${currentQuestionIndex.value+1}/${quiz.questions.length}`
// })

const questionStatus = computed(() => {
    return `${currentQuestionIndex.value}/${quiz.questions.length}`
})

const  barPercentage = computed(() => {
    return `${currentQuestionIndex.value/quiz.questions.length * 100}%`
})

const onOptionSelected = (isCorrect) => {
    if(isCorrect){
        numberOfCorrectAns.value++;
    }
    if(quiz.questions.length - 1 === currentQuestionIndex.value){
        showResult.value = true
    }
    currentQuestionIndex.value++
}
</script>

<template>
    <div>
        <QuizHeader 
            :questionStatus="questionStatus" 
            :barPercentage="barPercentage"/>
        <div>
           <Question 
                v-if="!showResult"
                :question="quiz.questions[currentQuestionIndex]"
                @selectOption="onOptionSelected"
           />
           <Result 
                v-else
                :quizLength="quiz.questions.length"
                :numberOfCorrectAns="numberOfCorrectAns"
                />
        </div>
    </div>
</template>