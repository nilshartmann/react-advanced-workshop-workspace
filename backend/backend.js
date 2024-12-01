const express = require("express");
const cors = require("cors");

const app = express();
// Use the first command line argument as the port or default to 3002
const port = process.argv[2] || 3002;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

let requestCounter = 0;

// Slowdown middleware
const slowdownMiddleware = (req, res, next) => {
  const slowdownParam = req.query.slowdown;
  let delay = 0;

  if (slowdownParam !== undefined) {
    delay = parseInt(slowdownParam) || 1200;
  }

  if (delay > 0) {
    setTimeout(() => {
      next();
    }, delay);
  } else {
    next();
  }
};

app.use(slowdownMiddleware);

// Mock Data
const tasks = [
  {
    id: "1",
    title: "Fix Header Bug",
    description:
      "The website header is not rendering correctly on mobile devices, causing significant usability issues for users accessing the site on smaller screens. This bug seems to be related to the responsive design implementation and CSS rules. Investigating and resolving this issue will ensure the header adapts properly to all screen sizes. Additionally, testing on different browsers is required to confirm the fix works universally.",
    effort: 5,
    state: "in_progress",
    votes: 12,
    dueDate: "2024-12-01",
  },
  {
    id: "2",
    title: "Write API Docs",
    description:
      "The API documentation is incomplete, making it difficult for developers to integrate and utilize our services effectively. This task involves documenting all the available endpoints, including their request/response formats, authentication methods, and potential error codes. Clear examples should be provided for common use cases, such as creating, updating, or deleting records. Including diagrams and workflows for complex API interactions will enhance the overall usability of the documentation.",
    effort: 3,
    state: "new",
    votes: 8,
    dueDate: "2024-12-05",
  },
  {
    id: "3",
    title: "Refactor Backend",
    description:
      "The backend codebase has grown significantly and now contains redundant, poorly structured logic that needs to be refactored. This task involves modularizing the code to improve maintainability and reduce technical debt. Key areas to focus on include replacing nested callback chains with promises or async/await and centralizing configuration values. Comprehensive testing will be necessary after refactoring to ensure no regressions or unexpected behavior occur.",
    effort: 7,
    state: "done",
    votes: 5,
    dueDate: "2024-11-29",
  },
  {
    id: "4",
    title: "Improve UI Design",
    description:
      "The current UI design lacks polish and fails to provide a cohesive user experience. This task involves refining the visual elements of the application, such as typography, spacing, and color schemes, to make the interface more intuitive and visually appealing. Accessibility improvements, such as better contrast ratios and keyboard navigation support, should also be included. Conducting user testing will provide valuable feedback to iterate on the design changes effectively.",
    effort: 4,
    state: "in_progress",
    votes: 15,
    dueDate: "2024-12-03",
  },
  {
    id: "5",
    title: "Optimize Database",
    description:
      "Database queries are taking too long to execute, especially under heavy load, leading to performance bottlenecks. This task involves optimizing existing SQL queries, adding indexes to frequently queried columns, and ensuring proper normalization of tables. Profiling tools should be used to identify slow queries and areas of improvement. Once optimizations are applied, stress testing should be conducted to confirm the system can handle a high volume of transactions efficiently.",
    effort: 6,
    state: "new",
    votes: 10,
    dueDate: "2024-12-07",
  },
  {
    id: "6",
    title: "Test Payment Flow",
    description:
      "The payment flow has been updated to support additional payment methods, and extensive testing is required to ensure all methods work seamlessly. This task involves verifying credit card payments, digital wallets, and PayPal integration. Edge cases, such as failed payments and retries, should also be tested thoroughly. Documentation of the test cases and results will ensure that future updates to the payment flow can be validated efficiently.",
    effort: 8,
    state: "done",
    votes: 3,
    dueDate: "2024-11-30",
  },
];

let insights = [
  // Insights for Task 1: Fix Header Bug
  {
    id: "101",
    taskId: "1",
    author: "Alice",
    text: "This issue might be related to how CSS rules are being applied to the header component.",
    confidence: 3,
  },
  {
    id: "102",
    taskId: "1",
    author: "Bob",
    text: "Check for browser-specific behavior, especially with Safari and older versions of Edge.",
    confidence: 2,
  },
  {
    id: "103",
    taskId: "1",
    author: "Charlie",
    text: "The issue seems to be intermittent, possibly due to cached stylesheets.",
    confidence: 4,
  },

  // Insights for Task 2: Write API Documentation
  {
    id: "201",
    taskId: "2",
    author: "Dana",
    text: "We need to include examples for the POST and PUT endpoints to help new developers.",
    confidence: 3,
  },
  {
    id: "202",
    taskId: "2",
    author: "Eve",
    text: "Consider adding a section about error codes and how to handle them gracefully.",
    confidence: 4,
  },
  {
    id: "203",
    taskId: "2",
    author: "Frank",
    text: "We should also document rate limits for API requests to avoid unexpected throttling.",
    confidence: 2,
  },

  // Insights for Task 3: Refactor Backend
  {
    id: "301",
    taskId: "3",
    author: "Grace",
    text: "Using async/await instead of nested promises can make the codebase much cleaner.",
    confidence: 5,
  },
  {
    id: "302",
    taskId: "3",
    author: "Hank",
    text: "We could modularize the services to reduce dependencies between components.",
    confidence: 4,
  },
  {
    id: "303",
    taskId: "3",
    author: "Ivy",
    text: "Some of the database queries are redundant and could be optimized during the refactor.",
    confidence: 4,
  },

  // Insights for Task 4: Improve UI Design
  {
    id: "401",
    taskId: "4",
    author: "Jake",
    text: "The font sizes on smaller screens are inconsistent and need standardization.",
    confidence: 3,
  },
  {
    id: "402",
    taskId: "4",
    author: "Liam",
    text: "Adding more whitespace between sections will improve readability.",
    confidence: 3,
  },
  {
    id: "403",
    taskId: "4",
    author: "Mia",
    text: "The color contrast in the buttons does not meet accessibility standards.",
    confidence: 4,
  },

  // Insights for Task 5: Optimize Database
  {
    id: "501",
    taskId: "5",
    author: "Noah",
    text: "Adding an index on the `users` table will significantly speed up lookups.",
    confidence: 5,
  },
  {
    id: "502",
    taskId: "5",
    author: "Olivia",
    text: "Check for unused columns in the `orders` table that can be removed or archived.",
    confidence: 5,
  },
  {
    id: "503",
    taskId: "5",
    author: "Paul",
    text: "Partitioning the `logs` table by date could reduce query times for older records.",
    confidence: 4,
  },

  // Insights for Task 6: Test Payment Flow
  {
    id: "601",
    taskId: "6",
    author: "Quinn",
    text: "PayPal integration needs more robust error handling for failed transactions.",
    confidence: 3,
  },
  {
    id: "602",
    taskId: "6",
    author: "Riley",
    text: "Credit card processing seems stable, but edge cases like expired cards need more testing.",
    confidence: 3,
  },
  {
    id: "603",
    taskId: "6",
    author: "Sophia",
    text: "The retry logic for failed payments works well but lacks feedback for users.",
    confidence: 4,
  },
];

const asInsightDto = (insight) => ({ ...insight, taskId: undefined });

// Routes

// Retrieve a single task by ID
app.get("/api/tasks/:taskId", (req, res) => {
  const { taskId } = req.params;
  const task = tasks.find((task) => task.id === taskId);
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(task);
});

app.get("/api/tasks", (req, res) => {
  const { orderBy, count } = req.query;

  const isAddCount =
    count === "true" ||
    count === "" ||
    (count !== undefined && count !== "false");

  let orderedTasks = [...tasks];

  if (orderBy === "state") {
    // Semantic sorting for state
    const stateOrder = { new: 0, in_progress: 1, done: 2 };
    orderedTasks.sort((a, b) => stateOrder[a.state] - stateOrder[b.state]);
  } else if (orderBy === "votes") {
    orderedTasks.sort((a, b) => b.votes - a.votes);
  } else if (!orderBy || orderBy === "dueDate") {
    // Default: Sort by dueDate
    orderedTasks.sort((a, b) => {
      const dateA = a.dueDate ? new Date(a.dueDate) : new Date(0); // Tasks without dueDate are considered very old
      const dateB = b.dueDate ? new Date(b.dueDate) : new Date(0);
      return dateA - dateB;
    });
  }

  if (isAddCount) {
    ++requestCounter;
    return res.json(
      orderedTasks.map((t) => ({
        ...t,
        title: `${t.title} - ${requestCounter}`,
      })),
    );
  }

  return res.json(orderedTasks);
});

// Increase vote for a task
app.patch("/api/tasks/:taskId/votes", (req, res) => {
  const { taskId } = req.params;

  // Find the task by ID
  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  // Increment the votes
  task.votes += 1;

  // Respond with the updated task
  res.json(task);
});

// Get insights for a specific task
app.get("/api/tasks/:taskId/insights", (req, res) => {
  const { taskId } = req.params;
  const taskinsights = insights
    .filter((insight) => insight.taskId === taskId)
    .map(asInsightDto);
  res.json(taskinsights);
});

// Create a new insight
app.post("/api/tasks/:taskId/insights", (req, res) => {
  const { taskId } = req.params;
  const { author, text, rating } = req.body;

  // Validate input
  if (!author) {
    console.log("Invalid insight data", req.body);
    return res
      .status(400)
      .json({ error: `Invalid insight author '${author}'` });
  }

  if (!text) {
    console.log("Invalid insight data", req.body);
    return res.status(400).json({ error: `Invalid insight text '${text}'` });
  }

  if (typeof rating !== "number") {
    console.log("Invalid insight data", req.body);
    return res
      .status(400)
      .json({ error: `Invalid insight rating (not a number) '${rating}'` });
  }

  // Create new insight
  const newComment = {
    id: (insights.length + 1).toString(), // Simple incremental ID
    taskId,
    author,
    text,
    rating,
  };

  insights.push(newComment);
  res.status(201).json(asInsightDto(newComment)); // Return the created insight
});

// Start Server

app.listen(port, () => {
  console.log(`📚 Server is running on http://localhost:${port}`);
  console.log(``);
  console.log(`* List Tasks         GET http://localhost:${port}/api/tasks`);
  console.log(`     Query Params (all optional):`);

  console.log(
    `       - orderBy: if specified either 'state', 'votes' or 'dueDate'`,
  );
  console.log(`         GET http://localhost:${port}/api/tasks?orderBy=votes`);
  console.log(
    `       - Add query param "count" to return a modified title field with each request`,
  );
  console.log(
    `         You can use this to easily see that the frontend has received "new" data`,
  );
  console.log(`         GET http://localhost:${port}/api/tasks?count`);

  console.log(`* Get a Task         GET http://localhost:${port}/api/tasks/3`);
  console.log(
    `* Vote a task        PATCH http://localhost:${port}/api/tasks/3/votes`,
  );
  console.log(
    `* List Task Insights GET http://localhost:${port}/api/tasks/3/insights`,
  );
  console.log(``);
  console.log(
    `😴 To simulate slow responses, add '?slowdown=delay_in_ms' to your URL:`,
  );
  console.log(`     GET http://localhost:${port}/api/tasks/3?slowdown=2400`);
  console.log(`     (works with all endpoints)`);
});
