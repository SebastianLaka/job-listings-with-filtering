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
      <img :src="isMobile ? HeaderImages[0] : HeaderImages[1]" alt="" class="header-image" />
    </template>
  </SiteHeader>
</template>
