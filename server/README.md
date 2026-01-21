# Bassh Waitlist Server

Express backend server for handling waitlist form submissions and saving them to Notion.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Environment variables are already configured in `.env`

## Running the Server

```bash
npm start
```

or

```bash
node index.js
```

The server will start on `http://localhost:3001`

## Endpoints

- `GET /health` - Health check endpoint
- `POST /waitlist` - Submit waitlist form data to Notion

## Environment Variables

- `NOTION_API_KEY` - Your Notion integration API key
- `NOTION_DATABASE_ID` - Your Notion database ID
- `PORT` - Server port (default: 3001)
