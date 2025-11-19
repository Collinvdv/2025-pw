<!-- Script -->
<script setup>
    // Import 
    import { onMounted, ref } from 'vue';

    // Data 
    const songs = ref([])

    // Lifecycle
    onMounted(() => {
        fetch("http://localhost:3000/songs")
            .then((res) => res.json())
            .then((data) => {
                songs.value = data;
            })
    })
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