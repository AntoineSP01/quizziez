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
const step = inject('step');

const selectedAnswer = ref(null);


const save = () => {
    if (selectedAnswer.value !== null) {
        
        form.values.push(selectedAnswer.value);
        
        step.value += 1;
    } else {
        console.error('Aucune réponse sélectionnée');
    }
};
</script>

<template>
    <div class="w-full max-w-xl mx-auto my-3">
        <h1>{{ quizz.title }}</h1>
        <div>Étape {{ step }} / {{ quizz.questions.length }}</div>
        <div>{{ form }}</div>
        <br />
        <section class="flex flex-col gap-5">
            <div>{{ quizz.questions[questionIndex].question }}</div>
            <form @submit.prevent="save">
                <div
                    v-for="(answer, index) in quizz.questions[questionIndex].answers"
                    :key="index"
                >
                    <ul>
                        <Button type="submit">
                        <li>
                            <input
                                type="radio"
                                :value="index"
                                v-model="selectedAnswer"
                                name="choice"
                            />
                            <label>{{ answer }}</label>
                        </li>
                        </Button>
                    </ul>
                </div>
            </form>
        </section>
    </div>
</template>
