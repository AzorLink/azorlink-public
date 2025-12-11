/**
 * Authentication Middleware
 * 
 * Middleware for authentication and authorization.
 * TODO: Implement authentication middleware
 */

import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from '../utils/errors';

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // TODO: Implement authentication
  // TODO: Extract token from header
  // TODO: Validate token
  // TODO: Add user to request
  
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    throw new UnauthorizedError('Token required');
  }
  
  // TODO: Validate token
  // TODO: Add user to req
  // req.user = decodedUser;
  
  next();
};

export const authorize = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // TODO: Implement role-based authorization
    // TODO: Check if user has required role
    
    // const user = req.user;
    // if (!roles.includes(user.role)) {
    //   throw new ForbiddenError('Insufficient permissions');
    // }
    
    next();
  };
};

