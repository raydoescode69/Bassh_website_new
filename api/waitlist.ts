import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID || "";

export default async function handler(req: VercelRequest, res: VercelResponse) {
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
      return res.status(500).json({ 
        error: "Waitlist service is not configured." 
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
    
    if (error.code === "object_not_found") {
      return res.status(500).json({ 
        error: "Database not found." 
      });
    }
    
    if (error.code === "unauthorized") {
      return res.status(500).json({ 
        error: "Authentication failed." 
      });
    }

    return res.status(500).json({ 
      error: "Failed to join waitlist." 
    });
  }
}

