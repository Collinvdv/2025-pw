<!-- Script -->
<script setup>
    // import
    import {ref , onMounted} from 'vue'

    // data 
    const ranking = ref([]);

    // lifecycles
    onMounted(() => {
        fetch("http://localhost:3000/ranking")
            .then((res) => res.json())
            .then((data) => {
                ranking.value = data;
            })
    })

</script>

<!-- Template -->
 <template>
    <h1>
        Ranking
    </h1>

    <table border="1">
        <tr>
            <th>
                Artist name
            </th>
            <th>
                Song name
            </th>
            <th>
                Points
            </th>
        </tr>
        <tr v-for="item in ranking" :key="item.song_id">
            <td>
                {{ item.artistname }}
            </td>
            <td>
                {{ item.songname }}
            </td>
            <td>
                {{ item.totalpoint }}
            </td>
        </tr>
    </table>
 </template>