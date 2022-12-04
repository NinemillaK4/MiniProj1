<template>
  <NuxtLayout name="default">
    <NuxtPage v-slot="{ Component }">
      <component :is="Component"/>
    </NuxtPage>
  </NuxtLayout>
  <Teleport to="body">
    <TheNavbar/>
    <CookiesNotification/>
  </Teleport>
</template>

<script lang="ts" setup>
import {useHead} from "#head";

const images = import.meta.glob("./assets/pageMeta/*.{jpg,png,svg,ico}", {as: 'url', eager: true});


useHead({
  title: "Elismar Gonçalves - Miniproj1 Desenvolvimento Web Avançado",
  link: [
    
    {
      rel: "icon",
      type: "image/png",
    href: images["./assets/pageMeta/logo.png"],
      sizes: "200x200",
    },
    
    {
      property: "twitter:title",
      content: "Elismar Gonçalves - Mini"
    },
  ],
})
</script>

