<!-- Script -->
<script setup>
    // Import 
    import { onMounted, ref } from 'vue';

    // Data 
    const songs = ref([]);
    const artists = ref([]);
    const newSongName = ref("");
    const newArtistId =ref(null);

    // Lifecycle
    onMounted(() => {
        // to be used in my list
        fetchSongs();

        // to be used in my add songs (for the dropdown)
        fetchArtists();
    })

    // methods 
    const addSongs = () => {
        fetch('http://localhost:3000/songs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    name: newSongName.value,
                    artist_id: parseInt(newArtistId.value)
                }),
        })
            .then((res) => res.json())
            .then((data) => {
                fetchSongs();
            })
    }

    const fetchSongs = () => {
        fetch("http://localhost:3000/songs")
            .then((res) => res.json())
            .then((data) => {
                songs.value = data;
            })
    }

    const fetchArtists = () => {
        fetch("http://localhost:3000/artists")
            .then((res) => res.json())
            .then((data) => {
                artists.value = data;
            })
    }
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

        <hr/>
        <h2>
            Create new song
        </h2>
        <label>Song name</label>
        <input type="text" v-model="newSongName">

        <label> Artist</label>
        <select v-model="newArtistId">
            <option v-for="artist in artists" :key="artist.id" :value="artist.artist_id">{{ artist.name }}</option>
        </select>
        <button @click="addSongs()">
            Add song
        </button>
    </div>
 </template>