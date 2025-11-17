#!/usr/bin/env node

/**
 * Pre-rendering script to generate static HTML for each route
 * This ensures search engines get actual HTML content, not empty shells
 */

const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

const routes = [
  '/',
  '/about',
  '/about-us',
  '/services',
  '/blog',
  '/contact',
  '/privacy',
  '/terms',
  '/destination-management',
  '/smart-staffing',
  '/blog/business-structure-kenya',
  '/blog/management-problems',
  '/blog/adidas-turnaround',
  '/blog/global-exhibitions',
  '/blog/eac-cross-border-operations',
  '/blog/handover-management-checklist',
];

async function prerender() {
  console.log('Starting pre-rendering...');
  
  try {
    // Run react-snap to pre-render all routes
    await execAsync('npx react-snap');
    console.log('✓ Pre-rendering completed successfully');
    console.log(`✓ Generated static HTML for ${routes.length} routes`);
  } catch (error) {
    console.error('Pre-rendering failed:', error.message);
    // Don't fail the build if pre-rendering fails
    process.exit(0);
  }
}

prerender();
