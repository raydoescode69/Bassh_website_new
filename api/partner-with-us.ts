import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_PARTNER_DB_ID || process.env.NOTION_DATABASE_ID || "";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { ownerName, email, clubNameGstin, mobileNumber } = req.body;

    if (!ownerName) {
      return res.status(400).json({ error: "Owner name is required" });
    }

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    if (!process.env.NOTION_API_KEY || !databaseId) {
      console.error("Notion credentials not configured for partner-with-us");
      return res.status(500).json({
        error: "Service is not configured. Please check environment variables."
      });
    }

    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Email: {
          title: [{ text: { content: email } }],
        },
        Name: {
          rich_text: [{ text: { content: ownerName } }],
        },
        "Club Name & City": {
          rich_text: [{ text: { content: clubNameGstin || "" } }],
        },
        ...(mobileNumber ? {
          Phone: {
            rich_text: [{ text: { content: mobileNumber } }],
          },
        } : {}),
      },
    });

    return res.status(200).json({
      success: true,
      message: "Partner request submitted successfully!",
    });
  } catch (error: any) {
    console.error("Partner request error:", error);
    return res.status(500).json({
      error: error.message || "Failed to submit. Please try again.",
    });
  }
}
