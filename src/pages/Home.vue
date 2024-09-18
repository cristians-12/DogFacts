<script setup>
import { ref } from "vue";
import { useFetch } from "../composables/useFetch";
import SideBarFavs from "../components/SideBarFavs.vue";

let facts = ref(null);
let dogImg = ref(null);
let sideFav = ref(false);
let favorites = ref([]);

facts.value = useFetch("https://dogapi.dog/api/facts");
dogImg.value = useFetch("https://random.dog/woof.json");

const refreshFacts = async () => {
  facts.value = useFetch("https://dogapi.dog/api/facts");
  dogImg.value = useFetch("https://random.dog/woof.json");
};

const addToFavorites = (fact) => {
  if (fact && !favorites.value.includes(fact)) {
    favorites.value.push(fact);
  }
};

const handleRemoveFavorite = (fact) => {
  favorites.value = favorites.value.filter((fav) => fav !== fact);
};
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen gap-10">
    <div class="flex items-center gap-10 font-bold">
      <img class="lg:w-20 w-10" src="/images/dog-paw.png" alt="Dog Paw" />
      <h1 class="lg:text-[40px] text-[1.5rem]">Dog Facts 🐕</h1>
    </div>

    <div v-if="facts.data" class="flex justify-center">
      <p
        class="w-[60%] text-center cursor-pointer"
        v-for="(fact, i) in facts.data.facts"
        :key="i"
        @click="addToFavorites(fact)"
      >
        {{ fact }} 🐶
      </p>
    </div>

    <div
      class="lg:w-[20%] rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl"
      v-if="dogImg?.data?.url"
    >
      <img class="w-full" :src="dogImg.data.url" alt="dog_image" />
    </div>

    <div class="flex gap-10">
      <div
        class="bg-violet-950 hover:text-white text-gray-400 font-extrabold px-10 py-5 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl"
        @click="refreshFacts"
      >
        Get a new fact
      </div>

      <div
        class="bg-violet-200 px-10 py-5 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl"
        @click="addToFavorites(facts.data.facts[0])"
      >
        Add fact to favorites. ⭐
      </div>
    </div>

    <div
      @click="sideFav = true"
      class="fixed bottom-5 right-5 lg:w-28 w-10 cursor-pointer hover:scale-105 hover:shadow-2xl rounded-full px-10 py-5 bg-gray-500"
    >
      <img class="lg:w-[40px] w-[20px]" src="/images/menu.png" alt="Menu" />
    </div>

    <SideBarFavs
      @close="sideFav = false"
      :sideFav="sideFav"
      v-show="sideFav"
      :favorites="favorites"
      @removeFavorite="handleRemoveFavorite"
    />
  </div>
</template>
