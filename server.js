import express from "express";
import { loadavg, totalmem, freemem } from "os";

import Gun from "gun";

const app = express();
const port = 3000;

// Function to get system resource usage
const getResourceUsage = () => {
  const memoryUsage = process.memoryUsage();
  const cpuLoad = loadavg();
  const totalMemory = totalmem();
  const freeMemory = freemem();

  return {
    memory: {
      rss: `${(memoryUsage.rss / (1024 * 1024)).toFixed(2)} MB`,
      heapTotal: `${(memoryUsage.heapTotal / (1024 * 1024)).toFixed(2)} MB`,
      heapUsed: `${(memoryUsage.heapUsed / (1024 * 1024)).toFixed(2)} MB`,
    },
    cpu: {
      loadAverage: {
        "1min": cpuLoad[0].toFixed(2),
        "5min": cpuLoad[1].toFixed(2),
        "15min": cpuLoad[2].toFixed(2),
      },
    },
    memoryInfo: {
      totalMemory: `${(totalMemory / (1024 * 1024)).toFixed(2)} MB`,
      freeMemory: `${(freeMemory / (1024 * 1024)).toFixed(2)} MB`,
    },
  };
};

app.use(Gun.serve);

// Middleware to log resource usage on each request
app.use((req, res, next) => {
  const resourceUsage = getResourceUsage();
  console.log("Request received at:", new Date());
  console.log("Resource Usage:", resourceUsage);
  console.log("-----------------------------");
  next(); // Pass control to the next middleware
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

Gun({ web: server });
