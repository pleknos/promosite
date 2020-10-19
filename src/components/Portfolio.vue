<template>
  <section class="container-centered portfolio">
    <div class="portfolio-items">
      <div class="portfolio-item" v-for="portfolioItem in portfolioItems" :key="portfolioItem._id">
        <a :href="portfolioItem.href" target="_blank" rel="nofollow noreferrer">
          <img :src="portfolioItem.src"  :alt="portfolioItem.name">
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      portfolioItems: [
        {_id: 0, src: '/src/assets/img/portfolio/alfa.png', alt: 'alfa-suvenir', href: "https://alfa-suvenir.ru/"},
        {_id: 1, src: '/src/assets/img/portfolio/helen.png', alt: 'helen gifts', href: 'https://helengifts.ru/'},
        {_id: 2, src: '/src/assets/img/portfolio/totti.png', alt: 'totti-shop', href: 'https://totti-shop.ru/'},
        {_id: 3, src: '/src/assets/img/portfolio/snpro.png', alt: 'snpro-expo', href: 'https://snpro-expo.com/'},
        {_id: 4, src: '/src/assets/img/portfolio/bikeupgrade.png', alt: 'bikeupgrade', href: 'https://bikeupgrade.ru/'},
        {_id: 5, src: '/src/assets/img/portfolio/zapomnibrand.png', alt: 'zapomnibrand', href: 'https://zapomnibrand.ru/'},
      ]
    }
  }
}
</script>

<style>
.portfolio-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: .2rem;
}

.portfolio-item {
  display: flex;
  border: 1rem solid var(--color-black);
  
  filter: brightness(.8);
}

.portfolio-item:hover {
  filter: none;
}

.portfolio-item a {
  display: flex;
}

.portfolio-item img {
  width: 100%;
  height: inherit;
}

@media screen and (max-width: 1140px) {
  .portfolio-items {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 480px) {
  .portfolio-items {
    grid-template-columns: 1fr;
  }
}
</style>
