<script setup lang="ts">
const items = [
  {
    title: "31/10/2023",
    description: "When it all started !",
    color: "green-lighten-1",
    icon: "mdi-message",
  },
  {
    title: "17/11/2023",
    description: "Our first date !",
    color: "red-lighten-1",
    icon: "mdi-book-variant",
  },
  {
    title: "17/12/2023",
    description: "Your departure for Hungary & our 1 month anniversary !",
    color: "green-lighten-1",
    icon: "mdi-airballoon",
  },
  {
    title: "25/12/2023",
    description: "My departure for Greece !",
    color: "indigo-lighten-2",
    icon: "mdi-layers-triple",
  },
  {
    title: "31/12/2023",
    description: "Your return from Hungary !",
    color: "green-lighten-1",
    icon: "mdi-airballoon",
  },
  {
    title: "01/01/2024",
    description:
      "2024 is gonna be the best year of our lives, because we are together kedvesem. I love you the most in my life",
    color: "green-lighten-1",
    icon: "mdi-airballoon",
  },
  {
    title: "05/01/2024",
    description: "My return from Greece !",
    color: "green-lighten-1",
    icon: "mdi-airballoon",
  },
  {
    title: "05/01/2024",
    description: "We are finally together again babám!",
    color: "red-lighten-1",
    icon: "mdi-airballoon",
  },
];
</script>
<template>
  <div class="d-flex justify-content-center mt-4">
    <router-link to="/" class="link-dark text-decoration-none"
      >Back to home</router-link
    >
  </div>
  <div class="m-5">
    <v-timeline align="start">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :dot-color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card>
          <v-card-title :class="[`bg-${item.color}`]">
            {{ item.title }}
          </v-card-title>
          <v-card-text class="bg-white text-dark mt-4">
            <p>{{ item.description }}</p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
