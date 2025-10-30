import { Client } from "@notionhq/client";

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID || "";

export interface WaitlistEntry {
  email: string;
}

export async function addToWaitlist(entry: WaitlistEntry) {
  try {
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Email: {
          title: [
            {
              text: {
                content: entry.email,
              },
            },
          ],
        },
      },
    });

    return { success: true, data: response };
  } catch (error) {
    console.error("Error adding to Notion waitlist:", error);
    throw error;
  }
}

