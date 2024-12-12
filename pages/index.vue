<script setup>
const { quizzList, fetchQuizs } = useQuizs();
await fetchQuizs(); 
</script>

<template>
    <NuxtLayout name="header">
    <div>
        <h1>Les quizziez </h1>
        <br>
        <section class="flex flex-col gap-5">
            <div v-for="quiz in quizzList">
            {{ quiz.title }}
                <p>Nombre de questions : {{ quiz.questions.length }}</p>
                <button >
                    <NuxtLink
                    :to="`/quiz/${quiz.slug}`">
                        Jouer
                    </NuxtLink>
                </button>
            </div>
        </section>
    </div>
    </NuxtLayout>
</template>