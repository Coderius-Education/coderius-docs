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
        order: 2,
				ownMaterials: true
    },
    {
        title: "Robotica",
        labels: ["Robotics", "Python"],
        level: "Beginner",
        link: "https://robotica.coderius.nl/",
        order: 3,
				ownMaterials: true
    },
    {
        title: "Vulnerable Web Application",
        labels: ["Security", "Web"],
        level: "Advanced",
        link: "https://dvwa.coderius.nl/",
        order: 5,
        ownMaterials: true
    },
    {
        title: "Godot Tutorial",
        labels: ["Game Development", "Godot", "2D", "3D", "GDScript"],
        level: "Medium",
        link: "https://godot.coderius.nl/",
        order: 6,
        ownMaterials: true
    }
];

export let ownCurriculum: Activity[] = curriculum.filter(activity => activity.ownMaterials);

export let levelColors: { [key in Activity["level"]]: string } = {
    "Beginner": "green",
    "Medium": "orange",
    "Advanced": "red"
}