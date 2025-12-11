/**
 * Type Definitions
 * 
 * TypeScript type definitions for the application.
 * TODO: Define complete types
 */

// TODO: Define types for DTOs
// TODO: Define types for requests/responses
// TODO: Define types for configurations
// TODO: Define types for services

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

