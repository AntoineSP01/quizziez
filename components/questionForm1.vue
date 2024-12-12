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

// Fonction pour sauvegarder la réponse et passer à la question suivante
const handleAnswer = (index) => {
    form.save(index); // Sauvegarde la réponse
    // Ici, vous pouvez gérer la navigation ou l'incrémentation de l'étape
    console.log('Réponse sélectionnée:', index);
};
</script>

<template>
    <NuxtLayout name="">
        <div class="w-full max-w-xl mx-auto my-3">
            <h1>{{ quizz.title }}</h1>
            <div>Question {{ form.step.value }} / {{ quizz.questions.length }}</div>
            <br />
            <div>{{ form }}</div>
            <section class="flex flex-col gap-5">
                <div>{{ quizz.questions[questionIndex].question }}</div>

                <!-- Liste des réponses sous forme de boutons -->
                <div
                    v-for="(answer, index) in quizz.questions[questionIndex].answers"
                    :key="index"
                >
                    <button
                        @click="handleAnswer(index)"
                        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        {{ answer }}
                    </button>
                </div>
            </section>
        </div>
    </NuxtLayout>
</template>
