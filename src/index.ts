/**
 * AzorLink Backend - Entry Point (Demo Placeholder)
 * 
 * ⚠️ IMPORTANT: This is a DEMO PLACEHOLDER only.
 * 
 * The production backend uses NestJS. This file shows a simplified
 * structure for demonstration purposes in the public repository.
 * 
 * This code is NOT intended to run. It's a public-safe showcase.
 */

// Demo placeholder - Express is used here only as a simple example
// Production uses NestJS with a different architecture
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// TODO: This is a placeholder. Production logic is not included.

app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    note: 'This is a demo placeholder. Production backend uses NestJS.'
  });
});

// This server is NOT intended to run in this repository
// It's a structure example only

export default app;

