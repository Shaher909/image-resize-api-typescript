import logger from '../utilities/logger';
import { Request, Response, NextFunction } from 'express';

describe('Logger Middleware', () => {
  it('should log the correct request information', () => {
    // Mock the request, response, and next function
    const mockReq = {
      url: '/test',
    } as Request;

    const mockRes = {
      statusCode: 200,
    } as Response;

    const mockNext = jasmine.createSpy('next');

    // Spy on console.log
    spyOn(console, 'log');

    // Call the logger middleware
    logger(mockReq, mockRes, mockNext);

    // Assertions
    expect(console.log).toHaveBeenCalledWith(
      jasmine.stringContaining('/test was visited response status code: 200'),
    );
    expect(mockNext).toHaveBeenCalled();
  });
});
