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
  <div class="h-screen bg-[#f7f5f2] flex flex-col items-center justify-center px-4">
    
    <h1 class="text-4xl font-bold text-[#333] mb-6 text-center">
      Merci d'avoir joué !
    </h1>
    
    <p class="text-2xl text-[#555] mb-8 text-center">
      Voici vos résultats :
    </p>
    <p class="text-3xl font-semibold text-blue-600 mb-8">
      Votre score : {{ compareAnswers() }} / {{ quizz.questions.length }}
    </p>
    
    <div class="flex flex-col gap-4 w-full max-w-sm">
      <button
        @click="reloadPage"
        class="w-full bg-blue-500 text-white text-lg font-medium py-3 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Recommencer le quiz
      </button>
      <button
        @click="goToQuizList"
        class="w-full bg-gray-700 text-white text-lg font-medium py-3 rounded-lg hover:bg-gray-800 transition duration-300"
      >
        Choisir un autre quiz
      </button>
    </div>
  </div>
</template>
