<!--
    Settings van de pagina
-->
<script setup>
    // Imports
    import { ref } from 'vue';

    // Data (ref)
    let artists = ref([])
</script>

<!--
    Template
-->
<template>
    <h1>
        Artists
    </h1>

    <ul v-if="artists.length > 0">
        <li v-for="artist in artists" :key="artist.artist_id">
            {{ artist.name }}
        </li>
    </ul>

    <p v-if="artists.length == 0">
        Geen artiesten beschikbaar
    </p>
</template>