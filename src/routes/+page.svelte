<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import { Badge } from "$lib/components/ui/badge";
    import { Button } from "$lib/components/ui/button";
    import {ownCurriculum, levelColors} from "$lib/Curriculum.ts";
    import {cn} from "$lib/utils.ts";
    import { Separator } from "$lib/components/ui/separator/index.js";


    // Extract all unique labels from documents
    $: allLabels = Array.from(
      new Set(ownCurriculum.flatMap(activity => activity.labels))
    ).sort();

    let selectedLabels: string[] = [];

    // Filter documents based on selected labels
    $: filteredCurriculum = selectedLabels.length === 0
      ? ownCurriculum
      : ownCurriculum.filter(activity =>
        selectedLabels.every(label => activity.labels.includes(label))
      );

    function toggleLabel(label: string) {
        if (selectedLabels.includes(label)) {
            selectedLabels = selectedLabels.filter(l => l !== label);
        } else {
            selectedLabels = [...selectedLabels, label];
        }
    }

    function openLink(link: string) {
        window.open(link, "_blank");
    }
</script>

<div class="w-[96%] mx-auto">
    <div class="mt-8">
        <h1 class="text-7xl text-center font-bold">Coderius Education</h1>
    </div>

    <div>
        <!-- Filter Section -->
        <div class="mb-8">
            <h2 class="text-lg font-semibold mb-4">Filter Labels</h2>
            <div class="flex flex-wrap gap-2">
                {#each allLabels as label}
                    <Badge
                      variant={selectedLabels.includes(label) ? "default" : "secondary"}
                      class="cursor-pointer hover:opacity-80 transition-opacity px-3 py-1"
                      onclick={() => toggleLabel(label)}
                    >
                        {label}
                    </Badge>
                {/each}
            </div>
        </div>

        <!-- Documents Grid -->
        <div class="mb-6">
            <h2 class="text-2xl font-bold">Lesmateriaal</h2>
            <p class="text-sm mt-1">{filteredCurriculum.length} cursussen gevonden</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each filteredCurriculum as curriculum}
                <Card.Root class="flex flex-col h-full">
                    <Card.Header>
                        <Card.Title class="text-lg">{curriculum.title}</Card.Title>
                        <div class="flex flex-wrap gap-2 mt-3">
                            <!--            Display curriculum level as badge -->
                            <Badge variant="default" class={cn("text-xs ", levelColors[curriculum.level])}>
                                Niveau: {curriculum.level}
                            </Badge>
                            {#each curriculum.labels as label}
                                <Badge variant="outline" class="text-xs">
                                    {label}
                                </Badge>
                            {/each}
                        </div>
                    </Card.Header>
                    <Card.Content class="mt-auto">
                        <Button
                          class="w-full"
                          onclick={() => openLink(curriculum.link)}
                        >
                            Bekijk lesmateriaal
                        </Button>
                    </Card.Content>
                </Card.Root>
            {/each}
        </div>

        {#if filteredCurriculum.length === 0}
            <div class="text-center py-12">
                <p class="text-gray-500 text-lg">Geen lesmaterialen gevonden met de geselecteerde filters.</p>
                <Button
                  variant="outline"
                  class="mt-4"
                  onclick={() => selectedLabels = []}
                >
                    Leeg filters
                </Button>
            </div>
        {/if}
    </div>

    <Separator class="my-4" />

    <div class="flex mt-8">
        <Card.Root class="mr-2 w-5/12">
            <Card.Header>
                <Card.Title class="text-4xl">Lesmateriaal</Card.Title>
                <Card.Description class="text-xl">Wij maken ons eigen lesmateriaal, gratis voor niets</Card.Description>
            </Card.Header>
            <Card.Content class="text-sm">
                <p>
                    Wij blijven voortdurend zoeken naar manieren om ons lesmateriaal te verbeteren, zowel didactisch als inhoudelijk. 
                    Al ons lesmateriaal is open source, zodat iedereen het vrij kan gebruiken, aanpassen en verder ontwikkelen. 
                    Veel van het materiaal is opgebouwd met eigen ontwikkelde tools en frameworks, waarmee we de best mogelijke leerervaring willen creëren. 
                    We nodigen leraren van harte uit om onze lessen te gebruiken, aan te passen en te delen op een manier die past bij hun leerlingen. 
                    Heb je ideeën, suggesties of wil je zelf bijdragen aan nieuw lesmateriaal? Neem dan gerust contact met ons op!
                </p>
            </Card.Content>
        </Card.Root>
        <Card.Root class="w-7/12">
            <Card.Header>
                <Card.Title class="text-4xl">Visie</Card.Title>
                <Card.Description class="text-lg">Onze visie is gebaseerd op leren met de praktijk</Card.Description>
            </Card.Header>
            <Card.Content class="text-sm">
                <p>
                    Wij geloven dat leren het beste gebeurt door te doen. Daarom is ons lesmateriaal zo ontwikkeld dat studenten actief worden betrokken bij het leerproces. 
                    In onze cursussen combineren we theorie met praktische opdrachten, projecten en realistische voorbeelden die de leerstof tot leven brengen. 
                    Ons doel is om lesmateriaal te maken dat niet alleen informatief is, maar ook inspirerend en leuk om mee te werken. 
                    Door studenten volop de kans te geven hun kennis direct toe te passen, bereiden we hen beter voor op de echte uitdagingen binnen de technologie-industrie. 
                    Samen met docenten blijven we ons materiaal voortdurend verbeteren, zodat de leerervaring steeds beter en effectiever wordt.
                </p>
            </Card.Content>
        </Card.Root>
    </div>

</div>