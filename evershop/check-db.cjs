const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'my_evershop',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'jadhav7007',
});

async function checkDatabase() {
  try {
    console.log('Attempting to connect to database...');
    
    // Test connection
    const client = await pool.connect();
    console.log('✓ Successfully connected to database');
    
    // Check if tables exist
    const result = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      LIMIT 10
    `);
    
    console.log(`Found ${result.rows.length} tables in public schema:`);
    result.rows.forEach(row => console.log(`  - ${row.table_name}`));
    
    if (result.rows.length === 0) {
      console.log('\n⚠ No tables found - database schema not initialized');
    } else {
      console.log('\n✓ Database appears to be initialized');
    }
    
    client.release();
    await pool.end();
  } catch (error) {
    console.error('✗ Database Error:', error.message);
    process.exit(1);
  }
}

checkDatabase();
