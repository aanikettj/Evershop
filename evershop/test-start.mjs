import { start } from '@evershop/evershop/dist/bin/lib/startUp.js';

console.log('Starting EverShop...');

try {
  await start({
    command: 'start',
    env: 'production',
    process: 'main'
  });
  console.log('Server started successfully');
} catch (err) {
  console.error('Error starting server:', err);
  process.exit(1);
}

// Keep the process alive
setTimeout(() => {
  console.log('Test timeout - app would have been running');
}, 15000);
