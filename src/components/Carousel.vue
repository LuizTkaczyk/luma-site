<template>
  <v-app id="carou" >
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src:require('@/assets/logos/logo1.jpg'),
          },
          {
            src: require('@/assets/logos/logo2.jpg'),
          },
          {
            src: require('@/assets/logos/logo3.png'),
          },
          
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
#carou {
  margin-top: 10px;
  width: 100%;
}
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
</style>