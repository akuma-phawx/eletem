<script setup lang="ts">
import { onMounted, ref, onUnmounted, computed } from "vue";

const today = ref(new Date());
const targetDay = ref(new Date("2024-01-05"));
const dayHasReached = computed(() => {
  return targetDay - today <= 0;
});
const timeRemaining = computed(() => {
  const difference = targetDay.value - today.value;
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
});
const interval = ref(null);

const updateTime = (): void => {
  today.value = new Date();
};

const surprise = (): void => {
  alert("Nagyon hyanizol babám ❤️");
};
onMounted(() => {
  interval.value = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  clearInterval(interval.value);
});
</script>
<template>
  <div
    class="countdown-container d-flex justify-content-center align-items-center flex-column"
  >
    <div v-if="dayHasReached">The day has come ❤️</div>
    <div v-else>
      <span class="lead"
        >{{ timeRemaining.days }} days, {{ timeRemaining.hours }} hours,
        {{ timeRemaining.minutes }} minutes,
        {{ timeRemaining.seconds }} seconds</span
      >
    </div>
    <div class="button-container">
      <v-btn color="primary" size="small" class="mt-2 mr-2" @click="surprise"
        >Click for a surprise</v-btn
      >
      <a
        href="https://www.notion.so/Our-Virtual-Home-c74c43be623a4df99fedffe71eee11af
        "
        target="_blank"
        ><v-btn color="secondary" class="mt-2" size="small" variant="outlined"
          >Go to notion</v-btn
        >
      </a>
    </div>
  </div>
</template>
