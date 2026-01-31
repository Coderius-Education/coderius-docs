<script lang="ts">
	import FilterGroup from './FilterGroup.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { Activity } from '$lib/Curriculum';

	interface Props {
		activities: Activity[];
		selectedFilters: {
			programmingLanguages: string[];
			projectTypes: string[];
			operatingSystems: string[];
		};
		onFilterChange: (filters: typeof selectedFilters) => void;
	}

	let { activities, selectedFilters, onFilterChange }: Props = $props();

	// Extract unique values per category
	const availableProgrammingLanguages = $derived(
		Array.from(new Set(activities.flatMap((a) => a.programmingLanguages || []))).sort()
	);

	const availableProjectTypes = $derived(
		Array.from(new Set(activities.flatMap((a) => a.projectTypes || []))).sort()
	);

	const availableOperatingSystems = $derived(
		Array.from(new Set(activities.flatMap((a) => a.operatingSystems || []))).sort()
	);

	function toggleFilter(
		category: keyof typeof selectedFilters,
		value: string
	) {
		const newFilters = { ...selectedFilters };
		if (newFilters[category].includes(value)) {
			newFilters[category] = newFilters[category].filter((v) => v !== value);
		} else {
			newFilters[category] = [...newFilters[category], value];
		}
		onFilterChange(newFilters);
	}

	const hasActiveFilters = $derived(
		selectedFilters.programmingLanguages.length > 0 ||
			selectedFilters.projectTypes.length > 0 ||
			selectedFilters.operatingSystems.length > 0
	);

	function clearAllFilters() {
		onFilterChange({
			programmingLanguages: [],
			projectTypes: [],
			operatingSystems: []
		});
	}
</script>

<div class="mb-8 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
	<div class="mb-0 flex items-center justify-between">
		{#if hasActiveFilters}
			<Button variant="outline" size="sm" onclick={clearAllFilters}>
				Wis alle filters
			</Button>
		{/if}
	</div>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
		<FilterGroup
			title="Besturingssystemen"
			options={availableOperatingSystems}
			selected={selectedFilters.operatingSystems}
			onToggle={(value) => toggleFilter('operatingSystems', value)}
		/>

		<FilterGroup
			title="Projecttypen"
			options={availableProjectTypes}
			selected={selectedFilters.projectTypes}
			onToggle={(value) => toggleFilter('projectTypes', value)}
		/>

		<FilterGroup
			title="Programmeertalen"
			options={availableProgrammingLanguages}
			selected={selectedFilters.programmingLanguages}
			onToggle={(value) => toggleFilter('programmingLanguages', value)}
		/>
	</div>
</div>
