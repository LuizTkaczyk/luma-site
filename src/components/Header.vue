<template>
<transition enter-active-class="animate__animated animate__zoomIn"  appear> 
<img id="logo" src="@/assets/logos/Logo.png" />
</transition>
  
</template>

<script>
export default {};
</script>

<style  scoped>
#logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 65%;
  padding: 1% 0% 0% 0%;
}
</style>