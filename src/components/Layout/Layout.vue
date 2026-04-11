<script setup lang="ts">
import { ref,onMounted,onUnmounted } from 'vue';
import SiteHeader from './Header/SiteHeader.vue';
import HeaderImageMobile from '../icons/bg-header-mobile.svg';
import HeaderImageDesktop from '../icons/bg-header-desktop.svg';

const isMobile = ref(false)
const handleResize = () => {
  isMobile.value = window.innerWidth <= 992
}
const HeaderImages = ref<string[]>([HeaderImageMobile, HeaderImageDesktop])
onMounted(()=> {
    handleResize()
    window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
<template>
  <SiteHeader>
    <template #site-header>
      <img v-if="isMobile" :src="HeaderImages[0]" alt="Header image at mobile" class="header-image" loading="lazy"/>
      <img v-else :src="HeaderImages[1]" alt="Header image at desktop" class="header-image" loading="lazy"/>
    </template>
  </SiteHeader>
</template>
