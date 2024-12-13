<script setup>
const error = useError();

const errorStatusCode = error.statusCode || 500;
const errorMessage = error.statusMessage || "Une erreur est survenue";

let errorDescription = "";
if (errorStatusCode === 404) {
  errorDescription = "La page que vous recherchez est introuvable.";
} else if (errorStatusCode === 500) {
  errorDescription = "Une erreur interne du serveur est survenue.";
} else {
  errorDescription = "Quelque chose s'est mal passé.";
}

</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-red-600 to-red-800 flex flex-col items-center justify-center text-center text-white px-6"
  >
    <div class="animate-bounce mb-6">
      <svg
        class="w-28 h-28 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10.29 3.86L1.82 12.34a2.5 2.5 0 000 3.54l8.47 8.47a2.5 2.5 0 003.54 0l8.47-8.47a2.5 2.5 0 000-3.54L13.83 3.86a2.5 2.5 0 00-3.54 0z"
        ></path>
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v4m0 4h.01"
        ></path>
      </svg>
    </div>

    <h1 class="text-7xl font-extrabold mb-4 drop-shadow-lg">
      {{ error.statusCode }}
    </h1>

    <h2 class="text-3xl font-semibold mb-4">
      {{ errorMessage }}
    </h2>

    <p class="text-lg mb-8 max-w-md">
      {{ errorDescription }}
    </p>

    <NuxtLink
      to="/"
      class="bg-white text-red-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-red-600 hover:text-white transition duration-300"
    >
      Retour à l'accueil
    </NuxtLink>
  </div>
</template>
