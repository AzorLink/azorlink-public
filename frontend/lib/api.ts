/**
 * API Client
 * 
 * Client for communication with the backend API.
 * TODO: Implement complete API client
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

export class ApiClient {
  private baseUrl: string

  constructor(baseUrl: string = API_URL) {
    this.baseUrl = baseUrl
  }

  /**
   * GET request
   * TODO: Implement
   */
  async get<T>(endpoint: string): Promise<T> {
    // TODO: Implement GET request
    const response = await fetch(`${this.baseUrl}${endpoint}`)
    // TODO: Handle errors
    return response.json()
  }

  /**
   * POST request
   * TODO: Implement
   */
  async post<T>(endpoint: string, data: any): Promise<T> {
    // TODO: Implement POST request
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    // TODO: Handle errors
    return response.json()
  }

  /**
   * PUT request
   * TODO: Implement
   */
  async put<T>(endpoint: string, data: any): Promise<T> {
    // TODO: Implement PUT request
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    // TODO: Handle errors
    return response.json()
  }

  /**
   * DELETE request
   * TODO: Implement
   */
  async delete<T>(endpoint: string): Promise<T> {
    // TODO: Implement DELETE request
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'DELETE',
    })
    // TODO: Handle errors
    return response.json()
  }
}

export const apiClient = new ApiClient()

