/**
 * Error Handler Middleware
 * 
 * Middleware for centralized error handling.
 * TODO: Implement complete error handling
 */

import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/errors';
import { Logger } from '../utils/logger';

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // TODO: Implement error handling
  // TODO: Log error
  // TODO: Return appropriate response
  
  if (err instanceof AppError) {
    Logger.error(`AppError: ${err.message}`);
    return res.status(err.statusCode).json({
      error: err.message,
      // TODO: Add more details if needed
    });
  }

  // Unexpected error
  Logger.error(`Unexpected error: ${err.message}`);
  res.status(500).json({
    error: 'Internal server error',
    // TODO: Don't expose details in production
  });
};

