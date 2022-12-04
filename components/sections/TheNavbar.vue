<template>
  <nav
      class="bottom-0 px-3 py-3 flex justify-between items-center
      border-b-[1px] border-border_sm fixed w-full bg-navbar_back backdrop-blur-sm sm:top-0
      sm:bottom-auto sm:px-6 lg:py-4"
  >
    <div class="h-[1px] top-0 absolute left-0 w-full bg-topbar lg:h-1" style="background-image: linear-gradient(to right, rgb(70 239 91), rgb(38 220 46), rgb(60 251 97));"></div>
    <NuxtLink
        class="font-logo text-3xl font-normal select-none slg:font-semibold lg:text-4xl"
        to="/"
    >
      ElismarGonçalves
    </NuxtLink>
    <div class="flex text-sm items-center gap-1 sm:gap-2">
      <NavbarItem to="/">
        Sobre Mim
      </NavbarItem>
            <NavbarItem to="/projects">
        Projetos
      </NavbarItem>
      <NavbarItem to="/hoobie">
        Hoobies
      </NavbarItem>
    </div>
  </nav>
</template>
