<script setup>
const props = defineProps({
  questionIndex: {
    type: Number,
    required: true,
  },
});

const { params } = useRoute();
const quizz = await queryContent(`quizz/${params.slug}`).findOne();

const form = inject('form');


const handleAnswer = (index) => {
  form.save(index); 
  console.log('Réponse sélectionnée:', index);
};
</script>

<template>
    
    <div class="w-full max-w-3xl mx-auto my-10 bg-[#f7f5f2] rounded-lg shadow-lg p-8">
      
      <h1 class="text-3xl font-bold text-center text-[#333] mb-6">
        {{ quizz.title }}
      </h1>

      
      <div class="text-center text-lg font-medium text-gray-600 mb-8">
        Question {{ form.step.value }} / {{ quizz.questions.length }}
      </div>

      
      <section class="flex flex-col gap-6">
        <div class="text-2xl font-semibold text-center text-[#444]">
          {{ quizz.questions[questionIndex].question }}
        </div>

        
        <div class="flex flex-col gap-4">
          <button
            v-for="(answer, index) in quizz.questions[questionIndex].answers"
            :key="index"
            @click="handleAnswer(index)"
            class="w-full bg-[#0b0f19] text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-blue-400 transition duration-300"
          >
            {{ answer }}
          </button>
        </div>
      </section>
    </div>
</template>
