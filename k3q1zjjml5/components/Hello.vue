<template>
	<div class="hello">
		<nav id="menu">
			<div>Menu</div>
		</nav>

		<main id="panel">
			<header>
				<div><button class="toggle-button">☰</button>Panel</div>
				<div class="another-toggle"> <button>another</button></div>
				<div class="not-a-toggle"> <button>this one wont work</button></div>
			</header>
		</main>
	</div>
</template>

<script>
	export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }

</script>

<style>

</style>