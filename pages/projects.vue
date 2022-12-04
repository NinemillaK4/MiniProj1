<template>
  <NuxtLayout name="page">
      <MainTitle>Projetos</MainTitle>
      <MainParagraph class="-mt-2">
      Estes são os projetos que ultimamente estou trabalhando e sou grato por cada um, no entanto concedi inumeras experiencia nos seus desenvolvimentos.
      </MainParagraph>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25"/>
    <div class="flex flex-col items-center justify-center gap-28">
      <MainProjectItem
          v-for="proj in projects"
          :key="proj.id"
          :description="proj.description"
          :image="proj.image"
          :link="proj.link"
          :name="proj.name"       
      />

    </div>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25"/>
    <TheSocials />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import {useProjectStore} from "~/store/projectStore";

const {getAllProjects, getGraveProjects} = useProjectStore();

const projects = getAllProjects;

</script>
