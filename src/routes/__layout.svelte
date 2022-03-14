<script>
  import Header from './Components/Header.svelte';
  import Hero from './Components/Hero.svelte';
  import About from './Components/About.svelte';
  import Projects from './Components/Projects.svelte';
  import Service from './Components/Service.svelte';
  import Footer from './Components/Footer.svelte';
  import "../app.css";
</script>

<header>
  <Header  />
</header>
<main>
  <!---hero-->
   <Hero />
  <!--hero section-->
  <!---about-->
    <About />
  <!---about-->
  <Service />
  <!--projects--->
    <Projects />
  <!--projects--->
    <div class="overflow-x-auto" data-theme="light">
      <!-- The button to open modal -->
     <label for="my-modal" class="btn modal-button">open modal</label>
      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="my-modal" class="modal-toggle">
        <div class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div class="modal-action">
              <label for="my-modal" class="btn">Yay!</label>
            </div>
          </div>
        </div>
    </div>
  
</main>
 <Footer />