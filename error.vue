<template>
  <div class="error-page">
    <h1>{{ errorStatusCode }} - {{ errorMessage }}</h1>
    <p>{{ errorDescription }}</p>
    <NuxtLink to="/">Retour à l'accueil</NuxtLink>
  </div>
</template>

<script setup>
// Utilisation du hook `useError()` pour récupérer les informations d'erreur
const { error } = useError()

// Récupération du code d'erreur et du message
const errorStatusCode = error.statusCode || 500
const errorMessage = error.statusMessage || 'Une erreur est survenue'

// Description basée sur le code d'erreur
let errorDescription = ''
if (errorStatusCode === 404) {
  errorDescription = "La page que vous recherchez n'existe pas."
} else if (errorStatusCode === 500) {
  errorDescription = "Une erreur interne est survenue."
} else {
  errorDescription = "Une erreur inconnue est survenue."
}
</script>

