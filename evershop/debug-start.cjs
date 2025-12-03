#!/usr/bin/env node
// This script runs the start command with error event listeners to catch what's happening
const { spawn } = require('child_process');
const path = require('path');

const child = spawn('npm', ['run', 'start'], {
  cwd: process.cwd(),
  stdio: 'pipe',
  env: { ...process.env }
});

let output = '';
let errorOutput = '';

child.stdout.on('data', (data) => {
  const str = data.toString();
  output += str;
  process.stdout.write(data);
});

child.stderr.on('data', (data) => {
  const str = data.toString();
  errorOutput += str;
  process.stderr.write(data);
});

child.on('exit', (code, signal) => {
  console.log(`\n\n=== Process Exit ===`);
  console.log(`Exit Code: ${code}`);
  console.log(`Signal: ${signal}`);
  console.log(`\n=== Combined Output ===`);
  console.log(output);
  if (errorOutput) {
    console.log(`\n=== Error Output ===`);
    console.log(errorOutput);
  }
});

child.on('error', (err) => {
  console.error(`Failed to start process: ${err}`);
});

// Keep parent process alive
setTimeout(() => {
  process.exit(0);
}, 10000);
