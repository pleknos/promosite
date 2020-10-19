<template>
  <section class="container-centered about">
    <h1>Герман Ефремов</h1>
    <h2>Стараюсь писать чистый код. Иногда получается.</h2>
    <p>Занимаюсь разработкой сайтов. Позиционирую себя как фронтендера, но достаточно много работал с Node.js.</p>
    <p>Мне доставляет некоторое удовольствие процесс изучения новых технологий, и, как следствие, я стараюсь не пропускать новинки в мире веб-разработки и хотя бы поверхностно, но знакомиться с ними.</p>
    <p>Мои контакты:</p>
    <ul>
      <li><a href="tel:+79197730409" target="_blank">+7 (919) 773 04 09</a></li>
      <li><a href="mailto:pleknosthe@gmail.com" target="_blank">pleknosthe@gmail.com</a></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style>
section.about {
  max-width: var(--screen-l);
  padding: 0 2rem;
}

section.about a {
  color: var(--color-darker);
}
</style>
