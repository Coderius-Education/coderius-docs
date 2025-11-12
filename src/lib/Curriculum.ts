export type Activity = {
    title: string;
    labels: string[];
    level: "Beginner" | "Medium" | "Advanced";
    link: string;
    order: number;
		ownMaterials: boolean;
}

export let curriculum: Activity[] = [
    {
        title: "Python Play",
        labels: ["Python", "Game Development", "2D"],
        level: "Beginner",
        link: "https://play.coderius.nl/",
        order: 1,
				ownMaterials: true
    },
    {
        title: "Robotica",
        labels: ["Robotics", "Python", "Building"],
        level: "Beginner",
        link: "https://robotica.coderius.nl/",
        order: 2,
				ownMaterials: true
    },
    {
        title: "Damn Vulnerable Web Application",
        labels: ["Security", "Web"],
        level: "Medium",
        link: "https://dvwa.coderius.nl/",
        order: 5,
				ownMaterials: false
    }
];

export let ownCurriculum: Activity[] = curriculum.filter(activity => activity.ownMaterials);

export let levelColors: { [key in Activity["level"]]: string } = {
    "Beginner": "green",
    "Medium": "orange",
    "Advanced": "red"
}