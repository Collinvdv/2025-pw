<script setup>

</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/Artists">Artists</RouterLink>
      <RouterLink to="/Ranking">Ranking</RouterLink>
      <RouterLink to="/Songs">Songs</RouterLink>
      <RouterLink to="/Voting">Voting</RouterLink>
    </nav>
    <RouterView/>
  </div>
</template>
