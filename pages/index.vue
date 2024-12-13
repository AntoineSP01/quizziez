<script setup>
const { quizzList, fetchQuizs } = useQuizs();
await fetchQuizs();
</script>

<template>
  <NuxtLayout name="header">
    <div class="bg-[#f7f5f2]">

      <section class="flex flex-col gap-8 items-center py-10">
        <div 
          v-for="quiz in quizzList" 
          :key="quiz.slug"
          class="bg-white shadow-lg rounded-lg p-6 w-3/4 sm:w-2/3 lg:w-1/2 text-center"
        >
    
          <h2 class="text-2xl font-semibold text-[#333] mb-2">{{ quiz.title }}</h2>
    
          <p class="text-lg text-[#666] mb-4">
            Nombre de questions : <span class="font-medium">{{ quiz.questions.length }}</span>
          </p>
    
          <NuxtLink 
            :to="`/quiz/${quiz.slug}`" 
            class="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Jouer
          </NuxtLink>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>
