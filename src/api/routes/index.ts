/**
 * API Routes - Main Router (Demo Placeholder)
 * 
 * ⚠️ This is a DEMO PLACEHOLDER only.
 * Production backend uses NestJS (not included in this repo).
 * 
 * This file shows a simplified structure for demonstration.
 * TODO: This is placeholder code - not intended to run.
 */

import { Router } from 'express'; // Express used as simple demo example only

const router = Router();

// TODO: Import and configure routes
// import userRoutes from './users';
// import resourceRoutes from './resources';
// import authRoutes from './auth';

// TODO: Configure routes
// router.use('/users', userRoutes);
// router.use('/resources', resourceRoutes);
// router.use('/auth', authRoutes);

router.get('/', (req, res) => {
  res.json({ 
    message: 'AzorLink API',
    version: '1.0.0',
    endpoints: {
      // TODO: List available endpoints
    }
  });
});

export default router;

