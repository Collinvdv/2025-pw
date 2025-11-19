<!-- Script -->
<script setup>
// Import 
    import { onMounted, ref, reactive } from 'vue';
    import { useRouter } from 'vue-router'
    const router = useRouter()
    // Data 
    const songs = ref([]);
    const activeSongIndex = ref(0);
    let vote2 = ref(false);
    let vote4 = ref(false);
    let vote6 = ref(false);

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

    const nextSong = () => {
        activeSongIndex.value++;
    }

    const prevSong = () => {
        activeSongIndex.value--;
    }

    const vote = (points) => {
        fetch('http://localhost:3000/voting', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    points: points,
                    song_id: songs.value[activeSongIndex.value].song_id
                }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (points == 2) {
                    vote2.value = true
                } else if (points == 4) {
                    vote4.value = true
                } else if (points == 6) {
                    vote6.value = true
                }

                if (vote2.value == true && vote4.value == true && vote6.value == true) {
                    // redirect to ranking
                    router.push('/ranking');
                }
            })
    }
</script>

<!-- Template -->
 <template>
    <h1>
        Voting
    </h1>

    <div>
        <div v-for="(song, index) in songs" :key="song.id" >
            <div v-if="index == activeSongIndex">
                {{ song.artists.name }} - {{  song.name }}
            </div>
        </div>

        <button @click="prevSong()" :disabled="activeSongIndex <= 0">
            Prev song
        </button>
        <button @click="nextSong()" :disabled="activeSongIndex >= (songs.length - 1)">
            Next song
        </button>
    </div>

    <hr/>
    <button @click="vote(2)" :disabled="vote2 != false">Vote 2 points</button>
    <button @click="vote(4)" :disabled="vote4 != false">Vote 4 points</button>
    <button @click="vote(6)" :disabled="vote6 != false">Vote 6 points</button>

 </template>

 <!--  I WANT TO A LIST OF ALL THE SONGS -->