<script setup>
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
    <h1>Résultat :</h1>
    <p>Réponses sélectionnées : {{ form.values }}</p>
    <p>Votre score : {{ compareAnswers() }} / {{ quizz.questions.length }}</p>
</template>

