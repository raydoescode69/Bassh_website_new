const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Client } = require('@notionhq/client');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID || '';

// Log server startup
console.log('🚀 Server starting...');
console.log('📊 NOTION_DATABASE_ID:', databaseId || 'NOT SET');
console.log('📊 NOTION_DATABASE_ID (full):', databaseId);
console.log('🔑 NOTION_API_KEY:', process.env.NOTION_API_KEY ? 'SET' : 'NOT SET');

// Safe database verification helper
async function verifyDatabase(notion) {
  try {
    console.log('🔍 Verifying Notion database access...');
    console.log('📊 Database ID:', process.env.NOTION_DATABASE_ID);

    const db = await notion.databases.retrieve({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    console.log('✅ Database found!');

    const title =
      Array.isArray(db.title) && db.title.length > 0
        ? db.title[0].plain_text
        : 'Untitled';

    console.log('📋 Database title:', title);

    if (!db.properties || typeof db.properties !== 'object') {
      console.warn('⚠️  Database properties missing or invalid');
      return;
    }

    const propertyNames = Object.keys(db.properties);
    console.log(
      '🧱 Database properties:',
      propertyNames.join(', ')
    );
    
    // Log property details for debugging
    propertyNames.forEach(propName => {
      const prop = db.properties[propName];
      console.log(`   - ${propName}: ${prop.type}`);
    });
  } catch (err) {
    console.error('❌ Error accessing database:', err.message);
  }
}

// Verify database access on startup
if (process.env.NOTION_API_KEY && databaseId) {
  verifyDatabase(notion);
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Waitlist server is running' });
});

// Waitlist submission endpoint
app.post('/waitlist', async (req, res) => {
  console.log('📥 Incoming waitlist submission:', JSON.stringify(req.body, null, 2));

  try {
    // Accept both 'club' and 'clubNameCity' for backward compatibility
    const { email, name, club, clubNameCity } = req.body;
    const clubValue = club || clubNameCity;

    // Validate email
    if (!email) {
      console.error('❌ Validation failed: Email is required');
      return res.status(400).json({ error: 'Email is required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('❌ Validation failed: Invalid email format');
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Validate club
    if (!clubValue) {
      console.error('❌ Validation failed: Club is required');
      return res.status(400).json({ error: 'Club is required' });
    }

    // Check if Notion credentials are configured
    if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
      console.error('❌ Notion credentials not configured');
      return res.status(500).json({ 
        error: 'Waitlist service is not configured. Please check your environment variables.' 
      });
    }

    // Add to Notion database
    // Schema: Name (Title), Email (Email), Club name & city (Text)
    console.log('📝 Creating Notion page...');
    console.log('📋 Data to insert:', { name: name || email, email, club: clubValue });
    
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name || email,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        "Club name & city": {
          rich_text: [
            {
              text: {
                content: clubValue,
              },
            },
          ],
        },
      },
    });

    console.log('✅ Successfully added to Notion:', response.id);

    return res.status(200).json({ 
      success: true, 
      message: 'Successfully added to waitlist!',
      id: response.id 
    });
  } catch (error) {
    console.error('❌ Waitlist error:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      status: error.status,
    });
    
    // If property error, try to fetch and log actual properties
    if (error.message && error.message.includes('property')) {
      try {
        const db = await notion.databases.retrieve({ database_id: databaseId });
        if (db.properties) {
          console.error('📋 Available properties in database:');
          Object.keys(db.properties).forEach(propName => {
            const prop = db.properties[propName];
            console.error(`   - "${propName}" (type: ${prop.type})`);
          });
        }
      } catch (dbError) {
        console.error('Could not retrieve database properties for debugging');
      }
    }
    
    if (error.code === 'object_not_found') {
      return res.status(500).json({ 
        error: 'Database not found. Please check your NOTION_DATABASE_ID.' 
      });
    }
    
    if (error.code === 'unauthorized') {
      return res.status(500).json({ 
        error: 'Authentication failed. Please check your NOTION_API_KEY.' 
      });
    }

    return res.status(500).json({ 
      error: error.message || 'Failed to join waitlist. Please try again.' 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/health`);
  console.log(`📮 Waitlist endpoint: http://localhost:${PORT}/waitlist`);
});
