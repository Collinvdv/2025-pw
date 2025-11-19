<!-- Script -->
<script setup>
// Import 
    import { onMounted, ref } from 'vue';

    // Data 
    const songs = ref([]);

    // Lifecycle
    onMounted(() => {
        // to be used in my list
        fetchSongs();
    })

    // methods 
    const fetchSongs = () => {
        fetch("http://localhost:3000/songs")
            .then((res) => res.json())
            .then((data) => {
                songs.value = data;
            })
    }
</script>

<!-- Template -->
 <template>
    <h1>
        Voting
    </h1>

    <ul>
        <li v-for="song in songs" :key="song.id">
            {{ song.artists.name }} - {{  song.name }}
        </li>
    </ul>

 </template>

 <!--  I WANT TO A LIST OF ALL THE SONGS -->