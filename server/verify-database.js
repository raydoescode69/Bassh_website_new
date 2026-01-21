// Script to verify Notion database access
require('dotenv').config();
const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID;

console.log('🔍 Verifying Notion database access...');
console.log('📊 Database ID:', databaseId);

if (!databaseId) {
  console.error('❌ NOTION_DATABASE_ID is not set in .env file');
  process.exit(1);
}

if (!process.env.NOTION_API_KEY) {
  console.error('❌ NOTION_API_KEY is not set in .env file');
  process.exit(1);
}

(async () => {
  try {
    // Try to retrieve the database
    const database = await notion.databases.retrieve({ database_id: databaseId });
    
    console.log('✅ Database found!');
    
    // Safely get title
    const title = database.title && Array.isArray(database.title) && database.title.length > 0
      ? database.title[0].plain_text || database.title[0].text?.content || 'Untitled'
      : 'Untitled';
    console.log('📋 Database title:', title);
    
    // Safely get properties
    const properties = database.properties || {};
    
    if (!properties || Object.keys(properties).length === 0) {
      console.error('⚠️  No properties found in database');
      console.log('💡 This might indicate insufficient permissions');
    } else {
      console.log('🔑 Properties:', Object.keys(properties).join(', '));
      
      // Check if required properties exist
      const requiredProps = ['Name', 'Email', 'Club name & city'];
      const missingProps = requiredProps.filter(prop => !properties[prop]);
      
      if (missingProps.length > 0) {
        console.error('⚠️  Missing required properties:', missingProps.join(', '));
        console.log('📋 Available properties:', Object.keys(properties).join(', '));
      } else {
        console.log('✅ All required properties found!');
      }
    }
    
  } catch (error) {
    console.error('❌ Error accessing database:', error.message);
    
    if (error.code === 'object_not_found') {
      console.error('\n💡 Possible issues:');
      console.error('   1. Database ID is incorrect');
      console.error('   2. Integration is not connected to the database');
      console.error('\n📝 How to fix:');
      console.error('   1. Open your Notion database');
      console.error('   2. Click "..." menu → "Connections"');
      console.error('   3. Connect your integration');
      console.error('   4. Copy the database ID from the URL:');
      console.error('      https://notion.so/workspace/DATABASE_ID?v=...');
      console.error('   5. Update NOTION_DATABASE_ID in server/.env');
    } else if (error.code === 'unauthorized') {
      console.error('\n💡 API key is invalid or expired');
      console.error('   Get a new key from: https://www.notion.so/my-integrations');
    }
    
    process.exit(1);
  }
})();
