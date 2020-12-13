<template>
<div>
 <div id="backgroundTop"></div>
    <div class="container headerContainer">
        <div class="titleContainer">
          <div class="title">
            <h1>Wil je</h1><h1>Samen</h1><h1>Werken?</h1>
                    <p>Mediavormgever &amp; Allround&nbsp;Desktop&nbsp;Publisher.<br>
Uw one-stop-shop voor vormgeving.</p>
        </div>
    </div>
  </div> 
  <div class="container content">
    <div id="AboutMe" class="imageContent AboutMeImg"></div>
      <div class="textOverlap">
        <h1>Hallo.</h1>
        <h3>Ik ben visueel vormgever met jaren van ervaring in het creëren van veel verschillende vormen van design.</h3>
      </div>
          <span class="FlavorText">Realize&nbsp;your&nbsp;ideas</span>
      <div id="Cases">
        <h1>Cases</h1>
            <div id="Case1" class="imageContent"></div>
          <div class="textOverlap">
            <h2>Volare</h2>
            <h3 class="description">14 september 2020</h3>
          </div>
            <div id="Case2" class="imageContent"></div>
          <div class="textOverlap">
            <h2>Volare</h2>
            <h3 class="description">14 september 2020</h3>
          </div>
            <div id="Case3" class="imageContent"></div>
          <div class="textOverlap">
            <h2>Volare</h2>
            <h3 class="description">14 september 2020</h3>
          </div>
        </div>
        <span class="FlavorText Anim-F">More&nbsp;coming&nbsp;soon</span>

        
        <div class="LinkedIn">
        <h3><img src="~/assets/img/phone-solid.svg" class="icon"/>06 37307692</h3>
        <h3><img src="~/assets/img/phone-solid.svg"class="icon"/>rick@rick.graphics</h3>   
        <h3>Je kunt mij ook op <a target="_blank" href="https://www.linkedin.com/in/rick-jonk-130abb141/">LinkedIn</a> vinden.<br><br>
        Leer mij daar ook kennen en deel mee aan mijn netwerk.</h3>
        <p class="description">Ga door mijn  vorige stage plekken, opleidingen &amp; werkgevers.</p>
        </div>
        <div style="margin-top: 10vh;" id="Cases">
             <div id="CV" class="imageContent"></div>
          <div>
            <h2 class="CV">Curriculum Vitae</h2>
            <h3 style="text-align: center;margin-bottom: 10vh;"class="description">Laatste update: 17/11/2020</h3>
          </div>  
          <p style="text-align: center;"class="description">Ontworpen &amp; gerealiseerd door <br>Rick Jonk</p>
        </div>
        
</div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        title: "Rick's Portfolio"
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Portfolio ontwikkeld door Rick Jonk'
          }
        ]
      }
    }
  }

  window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);
</script>

<style>
</style>