/**
 * API Routes - Main Router
 * 
 * This file centralizes all API routes.
 * TODO: Implement complete routing
 */

import { Router } from 'express';

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

