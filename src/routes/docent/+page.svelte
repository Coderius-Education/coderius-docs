<script lang="ts">
	import { curriculum, levelColors } from "$lib/Curriculum.ts";
	import { ExternalLink } from "@lucide/svelte";
	import { Badge } from "$lib/components/ui/badge";
	import * as Card from "$lib/components/ui/card/index.js";
	import { cn } from "$lib/utils.ts";

	const excluded = ["Code Editor"];
	const sharedTitles = ["Robotica", "Godot Tutorial"];

	const beginnerCourses = curriculum.filter(
		(c) => (c.level === "Beginner" || sharedTitles.includes(c.title)) && !excluded.includes(c.title)
	);
	const advancedCourses = curriculum.filter(
		(c) => (c.level !== "Beginner" || sharedTitles.includes(c.title)) && !excluded.includes(c.title)
	);

</script>

<div class="mx-auto w-[96%]">
	<div class="mb-12 mt-8">
		<h1 class="text-center text-5xl font-bold">Leerroute</h1>
		<p class="mt-2 text-center text-lg text-muted-foreground">
			Overzicht van het curriculum per leerjaar
		</p>
	</div>

	<!-- Timeline -->
	<div class="relative ml-4 md:ml-8">
		<!-- Vertical line -->
		<div class="absolute top-0 bottom-0 left-2 w-0.5 bg-border"></div>

		<!-- Step 1: Klas 4 -->
		<div class="relative pb-12 pl-10">
			<!-- Milestone dot -->
			<div class="absolute left-0 top-1 h-5 w-5 rounded-full border-4 border-primary bg-background"></div>

			<h2 class="text-2xl font-bold">Klas 4: Basis</h2>
			<p class="mt-1 text-muted-foreground">
				Alle leerlingen doorlopen de basiscursussen
			</p>
			<Badge variant="outline" class="mt-2">Havo 4 / VWO 4</Badge>

			<div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
				{#each beginnerCourses as course}
					<Card.Root>
						<Card.Header>
							<div class="flex items-center justify-between gap-3">
								<Card.Title class="text-lg">
									<a href={course.link} target="_blank" class="inline-flex items-center gap-1 hover:underline">
										{course.title}
										<ExternalLink class="h-4 w-4 shrink-0 text-muted-foreground" />
									</a>
								</Card.Title>
								<Badge
									variant="default"
									class={cn("text-xs whitespace-nowrap", levelColors[course.level])}
								>
									{course.level}
								</Badge>
							</div>
						</Card.Header>
					</Card.Root>
				{/each}
			</div>
		</div>

		<!-- Step 2: Klas 5+ -->
		<div class="relative pb-8 pl-10">
			<!-- Milestone dot -->
			<div class="absolute left-0 top-1 h-5 w-5 rounded-full border-4 border-primary bg-background"></div>

			<h2 class="text-2xl font-bold">Klas 5+: Verdieping</h2>
			<p class="mt-1 text-muted-foreground">
				Leerlingen kiezen meerdere verdiepingsmodules
			</p>
			<Badge variant="outline" class="mt-2">Havo 5 / VWO 5-6</Badge>

			<div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
				{#each advancedCourses as course}
					<Card.Root>
						<Card.Header>
							<div class="flex items-center justify-between gap-3">
								<Card.Title class="text-lg">
									<a href={course.link} target="_blank" class="inline-flex items-center gap-1 hover:underline">
										{course.title}
										<ExternalLink class="h-4 w-4 shrink-0 text-muted-foreground" />
									</a>
								</Card.Title>
								<Badge
									variant="default"
									class={cn("text-xs whitespace-nowrap", levelColors[course.level])}
								>
									{course.level}
								</Badge>
							</div>
						</Card.Header>
					</Card.Root>
				{/each}
			</div>
		</div>
	</div>
</div>
