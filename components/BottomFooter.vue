<template>
<footer class="footer fix-footer">
  <div class="container">
    <div class="content has-text-centered">
      <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </div>
  </div>
</footer>
</template>

<style lang="scss">
.fix-footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: 5;
    padding: 0.5rem 1.5rem 0.5rem!important;
}

</style>