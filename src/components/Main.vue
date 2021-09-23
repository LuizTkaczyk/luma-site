<template>
  <div id="main">
    <h2>ENTRE EM CONTATO ATRAVÉS DAS REDES SOCIAIS</h2>

    <div class="logos">
      <a target="blank" href="https://www.instagram.com/lumaamodafeminina"
        ><img
          id="insta"
          class="logotipos"
          src="@/assets/icons/insta.png"
          alt="instagram"
      /></a>
      <a target="blank" href="https://www.facebook.com/lumaamodafeminina"
        ><img
          id="face"
          class="logotipos"
          src="@/assets/icons/face.png"
          alt="facebook"
      /></a>
      <a target="blank" href="https://wa.me/554288598851"
        ><img id="whats" class="logotipos" src="@/assets/icons/whats.png" alt="whats"
      /></a>
      <a target="blank" href="https://shopee.com.br/lumaamodafeminina"
        ><img
          id="whats"
          class="logotipos"
          src="@/assets/icons/shopee.png"
          alt="whats"
      /></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#main {
  text-align: center;
  width: 100%;
  margin: auto;

  .logos {
    padding: 10px;
    justify-content: space-between;

    .logotipos {
      width:25%;
      padding: 5px 29px;
      transition: all 200ms ease-in;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  h2 {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-size: 4vh;
    text-shadow: rgb(255, 255, 255) 0em 0em 0.2em;
  }
}
</style>