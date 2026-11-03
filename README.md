# Docker Compose Multi-Container Project

## 1. Project Overview

This project demonstrates a multi-container
application using Docker Compose.

It contains:
- Node.js web application
- MySQL database
- Docker network
- Persistent Docker volume

## 2. Architecture

Browser -> Node.js -> MySQL Database

## 3. Technologies Used

- Docker
- Docker Compose
- Node.js
- Express.js
- MySQL
- SQL
- Git and GitHub

## 4. Project Structure

Docker-Compose-Project/
- docker-compose.yml
- .env.example
- .gitignore
- app/
  - app.js
  - package.json
  - Dockerfile
- db/
  - init.sql
- docs/
  - screenshots/

## 5. Setup Instructions

1. Install Docker Desktop.
2. Clone the repository.
3. Create a local .env file using .env.example.
4. Set your local database passwords.
5. Open the project directory.
6. Run:

docker compose up --build -d

## 6. Verify Application

Open:

http://localhost:3000

Health check:

http://localhost:3000/health

## 7. Useful Commands

docker compose up --build -d

docker ps

docker compose logs

docker compose stop

docker compose start

docker compose down

## 8. Persistence

The MySQL database uses a named Docker
volume called db_data.

This preserves database records when
containers are stopped or recreated.

## 9. Cleanup

Run:

docker compose down

To remove database volume too, after
finishing the persistence demonstration:

docker compose down -v