<template>
  <div>
    <NuxtLayout name="page">
      <div class="flex flex-col gap-6 lg:gap-9 mx-auto w-full md:w-10/12">
        <SectionParagraph>
            Estes são os meus Hobbies: As atividades que desempenho no periodo de lazeres e devirtimento...
        </SectionParagraph>
      </div>
      
      <center>
        <SectionTitle>Ouvir Música</SectionTitle><br>
        <img :src="img1" class="w-80 h-30 rounded-xl object-cover"/>
        <SectionParagraph><br> 
         <LinkBtn link="https://open.spotify.com/user/31bbfv35r5n7w2nkulle5uv7huli?si=Cdx8m2EjSCCulWXkjaJ4wA&nd=1&utm_medium=organic&_branch_referrer=H4sIAAAAAAAAA72NXwuCMADEP818VNw0I5AQy4dee6i3mHPLubmN%2FdH69s2grxAcd3DHjxu9N%2B6QZc5oz9k7xcakkiuRHY3VQyC%2B1oaqBMCCBSkfwcp63BCAGgC7qG1OfzTRc6yCozYGyvueLai0papWqETkaRmWagySA9S5aKd2eO1neJ6ubRvk7S4mfCnW5nuHpewxEX%2B6BHCnhrjmCaPYB0trbZ9YcfIBfXzXOSEBAAA%3D&product=open&%24full_url=https%3A%2F%2Fopen.spotify.com%2Fuser%2F31bbfv35r5n7w2nkulle5uv7huli%3Fsi%3DCdx8m2EjSCCulWXkjaJ4wA&feature=organic&_branch_match_id=1127658954445291366" text="Spotify"/>
        </SectionParagraph>
      </center>
       <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6"/>
      <center>
        <SectionTitle>Jogar Basquetebol</SectionTitle><br>
        <center> <img :src="img2" class="w-80 h-30 rounded-xl object-cover"/> </center> <br>
        <SectionParagraph>Variação do basquete jogado geralmente em quadras abertas</SectionParagraph>
      </center>
      <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6"/>
      <center>
        <SectionTitle>Jogar Games</SectionTitle><br>
        <img :src="img3" class="w-80 h-50 rounded-xl object-cover"/><br>
        <SectionParagraph> <LinkBtn link="https://www.unspeakable.com/pages/play-games" text="Jogos"/> </SectionParagraph>
      </center>
      
      <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6"/>
      <div class="flex flex-col gap-5">
        <NuxtLayout name="section">
          <WorkListItem v-for="work in works" :key="work.id" :work="work"/>
        </NuxtLayout>
      </div>
      <TheSocials />
    </NuxtLayout>
  </div>
</template>
<script setup>
import {useWorkStore} from "../store/workStore";
import img1 from "../assets/imgs/music.png";
import img2 from "../assets/imgs/basketball.png";
import img3 from "../assets/imgs/games.png";


const workStore = useWorkStore();
const works = workStore.getAllWorks;
</script>
