<script setup lang="ts">
import Polarbear from "../components/Polarbear.vue";
import Countdown from "../components/Countdown.vue";
</script>
<template>
  <div class="d-flex justify-content-center align-items-center flex-column">
    <Polarbear />
    <Countdown />
    <div class="mt-3">
      <router-link to="timeline" class="link-primary text-decoration-none"
        >Check our timeline ❤️</router-link
      >
    </div>
  </div>
</template>
