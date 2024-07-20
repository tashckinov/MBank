<script setup lang="ts">
import Shot from "~/components/MainScreen/Shot.vue";

const shots = ref([
  {
    text: 'Best shops',
    preview: 'https://polinka.top/uploads/posts/2023-05/1685113870_polinka-top-p-kvadratnie-kartinki-krasivo-12.jpg',
    content: [
      'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZ54TVtBbeRcw5JuSr2_gDUWaa3te1Bz2myNWCjgZaDyVvIEiHUQiO9WFRrJmS6SChJTVKfCv7GfIpj4SiaHyhEuxA1MFfOTQ=w1872-h964-rw-v1',
      'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbiDaO-lMF6d0yMjO4A14pevj15s6aDtqzPTUHZOKPJVJBjSmmTXWfjPwEQKUH-dk8118kEVO5xoeVlmSLwpdii7tqW5RB7Bg=w1872-h964-rw-v1'
    ]
  },
  {
    text: 'Win travel to the Hawaii',
    preview: 'https://gas-kvas.com/grafic/uploads/posts/2023-10/1696520592_gas-kvas-com-p-kartinki-kvadratnie-1.jpg',
    content: [
      'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZ54TVtBbeRcw5JuSr2_gDUWaa3te1Bz2myNWCjgZaDyVvIEiHUQiO9WFRrJmS6SChJTVKfCv7GfIpj4SiaHyhEuxA1MFfOTQ=w1872-h964-rw-v1',
      'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbiDaO-lMF6d0yMjO4A14pevj15s6aDtqzPTUHZOKPJVJBjSmmTXWfjPwEQKUH-dk8118kEVO5xoeVlmSLwpdii7tqW5RB7Bg=w1872-h964-rw-v1'
    ]
  },
  {
    text: 'Best shops',
    preview: 'https://polinka.top/uploads/posts/2023-05/1685113870_polinka-top-p-kvadratnie-kartinki-krasivo-12.jpg',
    content: [
      'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZ54TVtBbeRcw5JuSr2_gDUWaa3te1Bz2myNWCjgZaDyVvIEiHUQiO9WFRrJmS6SChJTVKfCv7GfIpj4SiaHyhEuxA1MFfOTQ=w1872-h964-rw-v1',
      'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbiDaO-lMF6d0yMjO4A14pevj15s6aDtqzPTUHZOKPJVJBjSmmTXWfjPwEQKUH-dk8118kEVO5xoeVlmSLwpdii7tqW5RB7Bg=w1872-h964-rw-v1'
    ]
  },
  {
    text: 'Best shops',
    preview: 'https://polinka.top/uploads/posts/2023-05/1685113870_polinka-top-p-kvadratnie-kartinki-krasivo-12.jpg',
    content: [
      'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZ54TVtBbeRcw5JuSr2_gDUWaa3te1Bz2myNWCjgZaDyVvIEiHUQiO9WFRrJmS6SChJTVKfCv7GfIpj4SiaHyhEuxA1MFfOTQ=w1872-h964-rw-v1',
      'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbiDaO-lMF6d0yMjO4A14pevj15s6aDtqzPTUHZOKPJVJBjSmmTXWfjPwEQKUH-dk8118kEVO5xoeVlmSLwpdii7tqW5RB7Bg=w1872-h964-rw-v1'
    ]
  }
])

</script>

<template>
  <h3>Suggestions</h3>
  <div class="shots flex justify-start gap-2 overflow-auto">
    <Shot v-for="shot in shots" :item="shot"/>
  </div>
</template>

<style scoped>

</style>