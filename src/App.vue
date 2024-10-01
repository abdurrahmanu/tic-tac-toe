<template>
<div class="min-h-screen m-auto bg-neutral-800 max-w-[900px]">
    <Header />
    <boxesComponent />
  </div>
</template>

<script setup>
import boxesComponent from './components/boxesComponent.vue';
import Header from './components/Header.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Caveat:wght@400..700&family=Exo:ital,wght@0,100..900;1,100..900&family=Itim&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Pacifico&family=Reddit+Mono:wght@200..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Shadows+Into+Light&display=swap');

@supports (scrollbar-color: auto) {
  .scrollbar-color {
    scrollbar-color:  #2a2731;
    scrollbar-width: 5px;
    scroll-behavior: smooth;
  }

  .scrollbar-color:hover {
    scrollbar-color:  #faf8f8;
  }
}

::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    background: #2a2731;
}

::-webkit-scrollbar-thumb {
    background: #9b9a9a;
}

::-webkit-scrollbar-thumb:hover {
    background: #faf8f8;
}

.caveat {
  font-family: "Caveat", cursive;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}

.exo {
  font-family: 'Exo', monospace;
}

.redit-font {
  font-family: 'Reddit Mono', sans-serif
}

.pacifico {
  font-family: 'Pacifico', cursive;
  font-weight: 400;
  font-style: normal;
}
</style>
