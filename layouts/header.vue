<template>
  <main>
    <nav class="bg-[#0b0f19] text-white py-4 px-8 flex justify-center items-center">
      <ul class="flex gap-8 list-none m-0 p-0">
        <li class="text-lg font-medium uppercase">
          <span >The quizziez</span>
        </li>
        <li class="text-lg font-medium uppercase">
          <NuxtLink to="/" class="hover:text-blue-400 transition-colors duration-300">Accueil</NuxtLink>
        </li>
      </ul>
    </nav>
    <slot />
  </main>
</template>
