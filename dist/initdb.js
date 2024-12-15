import sqlite from "better-sqlite3";
const dummyNews = [
    {
        id: 1,
        slug: "aiRobot",
        title: "Will AI Replace Humans?",
        image: "aiRobot.jpg",
        date: "2021-07-01",
        content: "Since late 2022 AI is on the rise and therefore many people worry whether AI will replace humans. The answer is not that simple. AI is a tool that can be used to automate tasks, but it can also be used to augment human capabilities. The future is not set in stone, but it is clear that AI will play a big role in the future. The question is how we will use it.",
    },
    {
        id: 2,
        slug: "beaverPlague",
        title: "A Plague of Beavers",
        image: "beaverPlague.jpg",
        date: "2022-05-01",
        content: "Beavers are taking over the world. They are building dams everywhere and flooding entire cities. What can we do to stop them?",
    },
    {
        id: 3,
        slug: "coupleCooking",
        title: "Spend more time together!",
        image: "coupleCooking.jpg",
        date: "2024-03-01",
        content: "Cooking together is a great way to spend more time with your partner. It is fun and you get to eat something delicious afterwards. What are you waiting for? Get cooking!",
    },
    {
        id: 4,
        slug: "hiking",
        title: "Hiking is the best!",
        image: "hiking.jpg",
        date: "2024-01-01",
        content: "Hiking is a great way to get some exercise and enjoy the great outdoors. It is also a great way to clear your mind and reduce stress. So what are you waiting for? Get out there and start hiking!",
    },
    {
        id: 5,
        slug: "landscape",
        title: "The beauty of landscape",
        image: "landscape.jpg",
        date: "2022-07-01",
        content: "Landscape photography is a great way to capture the beauty of nature. It is also a great way to get outside and enjoy the great outdoors. So what are you waiting for? Get out there and start taking some pictures!",
    },
];
// Initialize the database
const db = sqlite("data.db");
function initdb() {
    try {
        db.prepare(`CREATE TABLE IF NOT EXISTS news (
        id INTEGER PRIMARY KEY,
        slug TEXT UNIQUE,
        title TEXT,
        content TEXT,
        date TEXT,
        image TEXT
      )`).run();
        const { count } = db
            .prepare("SELECT COUNT(*) as count FROM news")
            .get();
        if (count === 0) {
            const insert = db.prepare("INSERT INTO news (slug, title, content, date, image) VALUES (?, ?, ?, ?, ?)");
            const insertMany = db.transaction((data) => {
                data.forEach((news) => insert.run(news.slug, news.title, news.content, news.date, news.image));
            });
            insertMany(dummyNews);
            console.log("Dummy data inserted into the database.");
        }
    }
    catch (error) {
        console.error("Error initializing the database:", error);
        // console.error("Error initializing the database:", error.message);
        throw error;
    }
}
initdb();
// Next.js API Route
export default function handler(req, res) {
    if (req.method === "GET") {
        try {
            const news = db.prepare("SELECT * FROM news").all();
            res.status(200).json(news);
        }
        catch (error) {
            res.status(500).json({ error: "Failed to fetch news." });
            console.error("Failed to fetch news:", error);
            // console.error("Failed to fetch news:", error.message);
        }
    }
    else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
