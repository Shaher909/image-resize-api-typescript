import express from "express";

const logger = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const currentTime = new Date().toISOString();
  let url = req.url;
  let resCode = res.statusCode;
  console.log(
    `[${currentTime}] ${url} was visited response status code: ${resCode}`
  );
  next(); // Call the next middleware or route handler
};

export default logger;
