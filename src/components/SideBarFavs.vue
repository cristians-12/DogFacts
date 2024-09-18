<script setup>
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  sideFav: Boolean,
  favorites: Array,
});

const emit = defineEmits(["close", "removeFavorite"]);

const closeSideBar = () => {
  emit("close");
};

const removeFavorite = (fact) => {
  emit("removeFavorite", fact);
};
</script>

<template>
  <div
    class="fixed right-0 w-[30%] top-0 bg-gray-700 h-screen px-5 py-10 text-white"
  >
    <span class="font-bold text-[30px]">Your favorite facts are:</span>

    <ul>
      <li class="my-5" v-for="(fav, index) in favorites" :key="index">
        <div class="flex items-center">
          <p class="flex-grow">{{ fav }}</p>
          <div @click="removeFavorite(fav)" class="cursor-pointer ml-2 bg-red-600 py-1 px-3 h-fit text-[20px] hover:scale-105">x</div>
        </div>
      </li>
    </ul>

    <div @click="closeSideBar" class="w-10 cursor-pointer fixed right-5 top-5">
      <img class="w-full invert" src="/images/close.png" alt="Close" />
    </div>
  </div>
</template>
