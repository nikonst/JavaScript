<script>
	//export let name;
	const name = "EveryOne"
	const someStr = "<b><i>Brand New Day</i></b>"
	const someAttr = 'myHeading'
	const disabled = true
	const status = "danger"
	const isPromoted = true
</script>

<main>
	<h1>Hello {name}!</h1>
	<h3>{5 + 5}</h3>
	<h2 class="underline">Underlined Text</h2>
	<h2 class={status}>Status</h2>
	<h2 class={isPromoted ? "promoted" : "status"}>Promoted</h2>
	<h2 class:promoted={isPromoted}>Promoted V2</h2>
	<p>{@html someStr}</p>
	<!-- <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> -->
	<p id = {someAttr}>Using a HTML attribute</p>
	<p {someAttr}>Using a HTML attribute 2nd way</p>
	<button {disabled}>Some Button</button>
</main>

<style>
	.underline {
		text-decoration: underline;
	}

	.danger {
		color: red;
	}

	.success {
		color: green;
	}

	.promoted {
		font-style: italic;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>