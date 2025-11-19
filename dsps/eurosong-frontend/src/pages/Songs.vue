<!-- Script -->
<script setup>
    // Import 
    import { onMounted, ref } from 'vue';

    // Data 
    const songs = ref([
        {
            "song_id": 1,
            "name": "Waterloo",
            "artist_id": 1,
            "artists": {
                "artist_id": 1,
                "name": "ABBA"
            }
        },
        {
            "song_id": 2,
            "name": "Ne partez pas sans moi",
            "artist_id": 2,
            "artists": {
                "artist_id": 2,
                "name": "Celine Dion"
            }
        },
    ])
</script>

<!-- Template -->
 <template>
    <div>
        <h1> Songs overview </h1>

        <ul>
            <li v-for="song in songs" :key="song.id">
                {{ song.artists.name }} - {{  song.name }}
            </li>
        </ul>
    </div>
 </template>