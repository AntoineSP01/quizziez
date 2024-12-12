<script setup>

const form = useQuizForm();
provide('form', form);

const step = ref(0); 
provide('step', step);

const { params } = useRoute();
const quizz = await queryContent(`quizz/${params.slug}`).findOne();
const totalSteps = quizz.questions.length;
</script>

<template>
    <div>
        <QuestionForm1 v-if="step < totalSteps" :questionIndex="step" />

        <ResultQuizz v-if="step >= totalSteps" />
    </div>
</template>
