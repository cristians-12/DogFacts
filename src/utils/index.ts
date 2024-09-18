// function unicodeToEmoji(unicodeStr) {
//     const codePoint = parseInt(unicodeStr.replace("U+", ""), 16);
//     return String.fromCodePoint(codePoint);
//   }
  
//   const emoji = computed(() => {
//     if (data.value && data.value.unicode) {
//       return unicodeToEmoji(data.value.unicode[0]);
//     }
//     return "";
//   });