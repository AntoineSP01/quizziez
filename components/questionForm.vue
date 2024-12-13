<script setup>

const step = ref(0); 
provide('step', step);

const { params } = useRoute();
const quizz = await queryContent(`quizz/${params.slug}`).findOne();
const totalSteps = quizz.questions.length;

const form = useQuiz(step);
provide('form', form);

</script>

<template>
    <div>
        <QuestionForm1 v-if="step < totalSteps" :questionIndex="step" />

        <ResultQuizz v-else />
    </div>
</template>
