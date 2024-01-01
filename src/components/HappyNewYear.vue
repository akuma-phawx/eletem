<script setup lang="ts">
import { NewYearPage } from "../types/NewYear";
import { ref, computed } from "vue";
const pages: NewYearPage[] = [
  {
    pageContent:
      "To the girl who stole my heart, the one that I love the most in the world with all my heart, to my one and only, to you Lillam.",
    pageNumber: 1,
  },
  {
    pageContent:
      "Who would have told me what a life journey was about to unfold at that day that we spoke for the very first time on 31st of October. Who would have told me that that extension in the bumble (shanks bumble) would change my world. Literally, change my world forever.",
    pageNumber: 2,
  },
  {
    pageContent:
      "Do you remember our first date? How it kicked off? The way I saw you looking at me and the way I looked at you as I crossed that boulevard? Oh my heart could not stop beating hard and strong and fast. I wanted to kiss your puha lips from the very first moment. Every moment from that day has been like living in a dream, a dream I do not want to wake up from. A dream with you and me being the protagonists.",
    pageNumber: 3,
  },
  {
    pageContent:
      "You know, in the grand scheme of things, it's pretty wild that out of everyone in the world, we found each other. It feels like we've hit the jackpot of love and happiness. Our time might be a blip in the universe, but what we have is beyond time – it's a forever kind of love. Billions of people throughout aaaaall the years, and yet here we are, in the Netherlands, you the sweetest bonbon that ever walked on earth, and me just giving you my self truly and fully. My heart beats harder and faster with you. But not just with you. For you too. Because I am the most alive with you babám.",
    pageNumber: 4,
  },
  {
    pageContent:
      "Looking ahead, all I see is you – my world, my life, my future. Our world, our life, our future now. With you, every little thing feels like a big adventure. Whether it's those lazy evenings at OUR home, those mornings that we spend in the bed and we don’t move and you are laying on my chest, or wandering around new places, every second with you is a treasure.",
    pageNumber: 5,
  },
  {
    pageContent:
      "Right now, in this very moment, being with you is everything. The way we laugh, the way we talk, the way we just get each other – it's like magic. And the horny moments… Oh those horny moments kedvesem drive me insane. And I wouldn't trade these perfect moments for anything in the world.",
    pageNumber: 6,
  },
  {
    pageContent:
      "Like, how a simple brunch date with you can feel like an epic journey, or how just a glance from you can light up my whole day. It's in these moments, these beautiful, everyday moments, that I find the true magic of our love. Have you heard the expression love is in the air? Yesh, that becomes a real thing with you. When you are around me I can feel it. If they put you between thousands of thousands of people, I will see you, I will feel you. You stand out in the biggest crowds for me. You are truly amazing and my heart is set on you.",
    pageNumber: 7,
  },
  {
    pageContent:
      "And then there's the way you love me – so completely, so effortlessly. It's like you've wrapped my heart in a warmth I never knew I needed. With you, I feel seen, understood, loved. I feel like I can conquer the world and yet, at the same time, like I want nothing more than to just be still, with you by my side. You're not just my partner, Lillam - you're a dream come true - you are everything for me. In your eyes, I see not just my present and future, but also a reflection of the best version of myself. That's the gift you give me every day, just by being you.",
    pageNumber: 8,
  },
  {
    pageContent:
      "Stepping into the new year, I'm all in – for the laughs, the tears, and everything in between. I'm here to be your rock, your cheerleader, and your partner in crime. We're gonna make memories so amazing, we'll still be talking about them when we reach 70 + years old and we eat our ice cream while walking on a boulevard next to a beach.",
    pageNumber: 9,
  },
  {
    pageContent:
      "I will take care of you with my whole love for my whole life.",
    pageNumber: 10,
  },
  {
    pageContent: "repeat it",
    pageNumber: 11,
  },
  {
    pageContent:
      "I will take care of you with my whole love for my whole life.",
    pageNumber: 12,
  },
  {
    pageContent:
      "From now till forever. Not just for 2024 but for all the years ahead of us, for all my years on this world because you are my one and only. Let’s make this life unforgettable ❤️",
    pageNumber: 13,
  },
  {
    pageContent:
      "With a heart full of love for you and the sparkiest of eyes, your Chris",
    pageNumber: 14,
  },
  {
    pageContent:
      "P.S. I am writing this now, its not from before. Many things might change throughout the years. We will change houses, jobs, hobbies. The world around us might change. It might become better or worse. But in this world, regardless of what it becomes you will always have your greek boi by your side, in our world my love. You and me. And that is all we need.Σε αγαπάω άπειρα!!! happy new year eletem✨❤️",
    pageNumber: 15,
  },
];
const totalPages = computed(() => {
  return pages.length;
});
const activePageContent: string = computed(() => {
  const foundPage = pages.find((page) => {
    return page.pageNumber === activePage.value;
  });
  return foundPage?.pageContent;
});
const activePage = ref<number>(1);
</script>
<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div id="text-container" class="text-center mx-15 my-5 lead">
      {{ activePageContent }}
    </div>
    <div class="button-container">
      <v-btn
        class="mx-2"
        color="info"
        size="small"
        v-if="activePage > 1"
        @click="activePage--"
        >Previous Page</v-btn
      >
      <v-btn
        color="primary"
        size="small"
        @click="activePage++"
        v-if="activePage < totalPages"
        >Next Page</v-btn
      >
    </div>
    <router-link to="/"
      ><v-btn color="secondary" class="mt-10" size="small" variant="outlined"
        >Back to our homepage</v-btn
      >
    </router-link>
  </div>
</template>
<style scoped>
#text-container {
  font-family: "Poppins", Courier, monospace;
}
</style>
