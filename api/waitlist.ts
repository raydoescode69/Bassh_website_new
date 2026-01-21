import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID || "";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, name, clubNameCity } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Validate name
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    // Validate club name & city
    if (!clubNameCity) {
      return res.status(400).json({ error: "Club name & city is required" });
    }

    // Check if Notion credentials are configured
    if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
      console.error("Notion credentials not configured");
      console.error("NOTION_API_KEY exists:", !!process.env.NOTION_API_KEY);
      console.error("NOTION_DATABASE_ID exists:", !!process.env.NOTION_DATABASE_ID);
      return res.status(500).json({ 
        error: "Waitlist service is not configured. Please check your environment variables." 
      });
    }

    // Add to Notion database
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Email: {
          title: [
            {
              text: {
                content: email,
              },
            },
          ],
        },
        Name: {
          rich_text: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        "Club Name & City": {
          rich_text: [
            {
              text: {
                content: clubNameCity,
              },
            },
          ],
        },
      },
    });

    return res.status(200).json({ 
      success: true, 
      message: "Successfully added to waitlist!",
      id: response.id 
    });
  } catch (error: any) {
    console.error("Waitlist error:", error);
    console.error("Error details:", {
      message: error.message,
      code: error.code,
      status: error.status,
    });
    
    if (error.code === "object_not_found") {
      return res.status(500).json({ 
        error: "Database not found. Please check your NOTION_DATABASE_ID." 
      });
    }
    
    if (error.code === "unauthorized") {
      return res.status(500).json({ 
        error: "Authentication failed. Please check your NOTION_API_KEY." 
      });
    }

    return res.status(500).json({ 
      error: error.message || "Failed to join waitlist. Please try again." 
    });
  }
}

