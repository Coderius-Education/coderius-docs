export type Activity = {
	title: string;
	labels: string[]; // Keep for backward compatibility

	// New categorical fields
	programmingLanguages?: string[];
	projectTypes?: string[];
	operatingSystems?: string[];

	level: "Beginner" | "Medium" | "Advanced";
	link: string;
	order: {
		vwo: number;
		havo: number;
	};
};

export let curriculum: Activity[] = [
	{
		title: "Web Development",
		labels: [],
		programmingLanguages: ["HTML", "CSS"],
		projectTypes: ["Web Development"],
		operatingSystems: ["Windows", "Linux", "macOS", "ChromeOS"],
		level: "Beginner",
		link: "https://web.coderius.nl/",
		order: {
			vwo: 1,
			havo: 1,
		}
	},
	{
		title: "Python",
		labels: [],
		programmingLanguages: ["Python"],
		projectTypes: [],
		operatingSystems: ["Windows", "Linux", "macOS", "ChromeOS"],
		level: "Beginner",
		link: "https://python.coderius.nl/",
		order: {
			vwo: 2,
			havo: 2,
		}
	},
	{
		title: "Python Play",
		labels: [],
		programmingLanguages: ["Python"],
		projectTypes: ["Game Development"],
		operatingSystems: ["Windows", "Linux", "macOS"],
		level: "Beginner",
		link: "https://play.coderius.nl/",
		order: {
			vwo: 2,
			havo: 2,
		}
	},
	{
		title: 'Code Editor',
		labels: [],
		programmingLanguages: [],
		projectTypes: ["Code Editor"],
		operatingSystems: ["Windows", "Linux", "macOS"],
		level: "Beginner",
		link: "https://editor.coderius.nl/",
		order: {
			vwo: 2,
			havo: 2,
		}
	},
	{
		title: 'coderius-ctf',
		labels: [],
		programmingLanguages: [],
		projectTypes: ["Cybersecurity"],
		operatingSystems: ["Windows", "Linux", "macOS"],
		level: "Beginner",
		link: "https://ctf.coderius.nl/",
		order: {
			vwo: 2,
			havo: 2,
		}
	},
	{
		title: "Robotica",
		labels: ["Robotics", "Python"],
		programmingLanguages: ["Python"],
		projectTypes: ["Robotics"],
		operatingSystems: ["Windows", "Linux", "macOS"],
		level: "Beginner",
		link: "https://robotica.coderius.nl/",
		order: {
			vwo: 3,
			havo: 3,
		}
	},
	{
		title: "Godot Tutorial",
		labels: [],
		programmingLanguages: ["GDScript"],
		projectTypes: ["Game Development"],
		operatingSystems: ["Windows", "Linux", "macOS"],
		level: "Medium",
		link: "https://godot.coderius.nl/",
		order: {
			vwo: 5,
			havo: 5,
		}
	},
	{
		title: "Vulnerable Web Application",
		labels: ["Cybersecurity", "Web"],
		programmingLanguages: ["Linux Shell"],
		projectTypes: ["Cybersecurity", "Web Development"],
		operatingSystems: ["Windows", "Linux"],
		level: "Advanced",
		link: "https://dvwa.coderius.nl/",
		order: {
			vwo: 5,
			havo: 5,
		}
	},
		{
		title: "Full stack web development",
		labels: ["Javascript", "Python"],
		programmingLanguages: ["HTML", "CSS", "JavaScript", "Python"],
		projectTypes: ["Web Development"],
		operatingSystems: ["Windows", "Linux", "macOS"],
		level: "Advanced",
		link: "https://fullstack.coderius.nl/",
		order: {
			vwo: 5,
			havo: 5,
		}
	},
];

export let ownCurriculum: Activity[] = curriculum;

export let levelColors: { [key in Activity["level"]]: string } = {
	Beginner: "green",
	Medium: "orange",
	Advanced: "red",
};
