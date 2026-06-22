<script lang="ts">
	import { Input } from "$lib/components/ui/input/index.js";
	import { Button } from "$lib/components/ui/button/index.js";

	let { placeholderText = "you@example.com", buttonText = "Join the Waitlist" } = $props();

	let email = $state("");
	let status = $state<"idle" | "loading" | "success" | "error">("idle");
	let errorMessage = $state("");

	function validateEmail(e: string): boolean {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();
		errorMessage = "";

		if (!email.trim()) {
			status = "error";
			errorMessage = "Please enter your email.";
			return;
		}

		if (!validateEmail(email)) {
			status = "error";
			errorMessage = "Please enter a valid email address.";
			return;
		}

		status = "loading";

		// ponutail: simulated delay — replace with Supabase call in Phase 4
		await new Promise((r) => setTimeout(r, 1000));

		status = "success";
		email = "";

		// Reset to idle after 3 seconds
		setTimeout(() => {
			status = "idle";
		}, 3000);
	}
</script>

<form onsubmit={handleSubmit} class="flex flex-col gap-3 w-full max-w-md">
	<div class="flex flex-col sm:flex-row gap-3">
		<div class="flex-1">
			<Input
				type="email"
				bind:value={email}
				placeholder={placeholderText}
				disabled={status === "loading"}
				aria-invalid={status === "error"}
				class="h-10 bg-background"
			/>
		</div>
		<Button type="submit" disabled={status === "loading"} size="lg">
			{#if status === "loading"}
				Joining...
			{:else}
				{buttonText}
			{/if}
		</Button>
	</div>

	{#if status === "success"}
		<p class="text-sm text-muted-foreground">
			You're on the list! We'll email you when Shift AI launches.
		</p>
	{/if}

	{#if status === "error" && errorMessage}
		<p class="text-sm text-destructive">{errorMessage}</p>
	{/if}
</form>
