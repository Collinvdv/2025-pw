<!-- Script -->
<script setup>
    // import lifecycles (onMounted will be exectued on render)
    import { onMounted, ref } from 'vue'
    
    //
    let artists = ref([]);
    let newArtist = ref("");

    // Life cycle
    onMounted(() => {
        getArtists();
    })

    // Methods 
    const getArtists = () => {
        fetch("http://localhost:3000/artists")
            .then((res) => res.json())
            .then((data) => {
                artists.value = data;
                console.log(data);
            })
    }

    const addArtist = () => {
        fetch('http://localhost:3000/artists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    name: newArtist.value
                }),
        })
            .then((res) => res.json())
            .then((data) => {
                getArtists();
            })
    }

    const deleteArtist = (artistId) => {
        fetch("http://localhost:3000/artists/" + artistId, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                getArtists();
            })

    }
</script>

<!-- Template -->
 <template>
    <h1>
        Artists
    </h1>

    <ul>
        <li v-for="artist in artists" :key="artist.id">
            {{ artist.name }}

            <button @click="deleteArtist(artist.artist_id)">
                Delete artists
            </button>
        </li>
    </ul>

    <hr />

    <h2>
        Create new artist
    </h2>

    <label> name of new artist</label>
    <input type="text" v-model="newArtist"/>
    <button @click="addArtist()">
        Add artist
    </button>
 </template>