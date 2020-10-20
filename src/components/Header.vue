<template>
  <header>
    <div class="container-centered">
      <div class="inner">
        <nav>
          <ul>
            <li><router-link to="portfolio">Портфолио</router-link></li>
            <li><router-link to="about">О себе</router-link></li>
            <li><a href="https://github.com/pleknos?tab=repositories" rel="nofollow noreferrer" target="_blank">github</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style>
header .inner {
  display: flex;
  justify-content: flex-end;
  padding: 2rem .2rem;
}

header nav > ul {
  display: flex;
  margin: 0;
  padding: 0;
}

header nav li {
  margin: 0 1rem;

  list-style: none;
}

header nav a, header nav a:link, header nav a:visited, header nav a:active {
  position: relative;

  display: block;

  text-decoration: none;
  text-transform: uppercase;

  color: var(--color-dark);
}

header nav a::after {
  content: '';

  position: absolute;
  bottom: -.3rem;
  left: 0;

  width: 0;
  height: .2rem;
  background-color: var(--color-dark);

  transition: width .2s  ease-out;
}

header nav a.router-link-active::after {
  content: '';

  position: absolute;
  bottom: -.3rem;
  left: 0;

  width: 100%;
  height: .2rem;
  background-color: var(--color-dark);
}

header nav a:hover::after {
  content: '';

  position: absolute;
  bottom: -.3rem;
  left: 0;

  width: 100%;
  height: .2rem;
  background-color: var(--color-dark);
}
</style>
