<script setup>
const quizz = await queryContent('quizz').find()
</script>

<template>
    <NuxtLayout name="blog">
    <div>
        <h1>Les quizziez </h1>
        <br>
        <section class="flex flex-col gap-5">
            <div v-for="quiz in quizz">
            {{ quiz.title }}

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