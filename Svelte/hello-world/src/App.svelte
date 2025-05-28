<script>
	//export let name;
	const name = "EveryOne"
	const someStr = "<b><i>Brand New Day</i></b>"
	const someAttr = 'myHeading'
	const disabled = true
	const status = "danger"
	const isPromoted = true

	const num = 0

	const names = ["Ann", "Mary", "Sofia"]
	const fullNames = [
		{first:"Helen", last:"Hoe"},
		{first:"Suzan", last:"May"},
		{first:"Sue", last:"Miller"}
	] 

	let count = 0

	const handleClick = (event, stepSize) => {
		count += stepSize
		console.log(event)
	}
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
	<hr>
	<button on:click={() => {
		count = count + 1
	}}>Count  {count}</button>
	<button on:click={(event) => handleClick(event, 10)}>Increment by 10 {count}</button>

	{#if num === 0}
		<h4>The number is zero (if statement)</h4>
	{:else if num > 0}
		<h4>The number is postitive (if statement)</h4>
	{:else if num < 0}
		<h4>The number is negative (if statement)</h4>
	{:else}
		<h4>Num is not a number (if statement)</h4>
	{/if}
	<hr>
	{#each names as name, index}
		<p>{index} {name}</p>
	{/each}

	<hr>
	{#each fullNames as fullname, index}
		<p>{index} {fullname.first} {fullname.last}</p>
	{/each}
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