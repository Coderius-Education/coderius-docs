export type Activity = {
    title: string;
    labels: string[];
    level: "Beginner" | "Medium" | "Advanced";
    link: string;
    order: number;
}

export let curriculum: Activity[] = [
    {
        title: "Python Play",
        labels: ["Python", "Game Development", "2D"],
        level: "Beginner",
        link: "https://play.coderius.nl/",
        order: 1
    },
    {
        title: "Robotica",
        labels: ["Robotics", "Python"],
        level: "Beginner",
        link: "https://robotica.coderius.nl/",
        order: 2
    },
    {
        title: "Vulnerable Web Application",
        labels: ["Security", "Web"],
        level: "Advanced",
        link: "https://dvwa.coderius.nl/",
        order: 3
    },
    {
        title: "Godot Tutorial",
        labels: ["Game Development", "Godot", "2D", "3D", "GDScript"],
        level: "Medium",
        link: "https://godot.coderius.nl/",
        order: 4
    }
];

export let levelColors: { [key in Activity["level"]]: string } = {
    "Beginner": "green",
    "Medium": "orange",
    "Advanced": "red"
}