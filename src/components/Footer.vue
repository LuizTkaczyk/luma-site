<template>
<div id="footer">
    <p>Rua 10 de setembro Nº117</p>

        <p>Bairro Morro Alto</p>
        <p>Guarapuava - Paraná </p>
        <a target="blank"
            href="https://www.google.com/maps/place/Luma+Moda+Feminina/@-25.3705097,-51.4623606,17z/data=!3m1!4b1!4m5!3m4!1s0x94ef3706ad9a38ef:0xa40e316205955f44!8m2!3d-25.3705146!4d-51.4601719"><img
                id="maps" src="@/assets/icons/maps.png" alt="mapas" class="logotipos"></a>
</div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#footer {
  //border: 1px solid black;
  padding: 10px;
  text-align: center;
  font-size: 4vh;
  font-weight: bolder;
  text-shadow: rgb(255, 255, 255) 0em 0em 0.2em;

  p {
    margin: auto;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
  }

  #maps {
    padding: 20px 0px;
    width: 17%;
    display: inline-block;
    transition: all 200ms ease-in;

    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>