const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = 3000;

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10
});

app.get("/", async (req, res) => {
    try {
        await db.query(
            "INSERT INTO visits (message) VALUES (?)",
            ["Website visited successfully"]
        );

        const [rows] = await db.query(
            "SELECT COUNT(*) AS total FROM visits"
        );

        res.send(`
            <h1>Docker Compose Project</h1>
            <h2>Application is running successfully!</h2>
            <p>Node.js is connected to MySQL.</p>
            <p>Total website visits: ${rows[0].total}</p>
        `);
    } catch (error) {
        console.error(error);
        res.status(500).send("Database connection error");
    }
});

app.get("/health", (req, res) => {
    res.status(200).send("Application is healthy");
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Application running on port ${port}`);
});