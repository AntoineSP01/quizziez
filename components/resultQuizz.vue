<script setup>

const reloadPage = () => {
  window.location.reload(); 
};

import { useRouter } from 'vue-router';
const router = useRouter();

const goToQuizList = () => {
  router.push('/'); 
};

const form = inject('form');

const { params } = useRoute();
const quizz = await queryContent(`quizz/${params.slug}`).findOne();

const correctAnswers = quizz.questions.map((question) => question.correct);

const compareAnswers = () => {
    let score = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (form.values[i] === correctAnswers[i]) {
            score++;
        }
    }
    return score;
};
</script>

<template>
  <div >
    <h1>Merci d'avoir joué !</h1>
    <p>Voici vos résultats...</p>
        <p>Votre score : {{ compareAnswers() }} / {{ quizz.questions.length }}</p>
    
    <button @click="reloadPage">Recommencer le quiz</button>
      
    <button @click="goToQuizList">Choisir un autre quiz</button>
  </div>
</template>


