# Task Tracking System

This is a simple Task Tracking System built using Node.js, Express.js, and Sequelize for interacting with a PostgreSQL database. The system allows you to create, update, retrieve tasks, and get task metrics based on status and timeline.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
  - [Create a Task](#create-a-task)
  - [Update a Task](#update-a-task)
  - [Get All Tasks (with Pagination)](#get-all-tasks-with-pagination)
  - [Get Task Metrics](#get-task-metrics)

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js and npm

## Getting Started

1. Clone this repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd task-tracking-system
   ```
3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the app:
   `npm start`

Your app should now be running on http://localhost:3000.

## API Endpoints

1. Create a Task:

- **URL:** `/tasks`
- **Method:** `POST`
- **Description:** Create a new task.
- **Request Body:**
  ```json
  {
    "title": "Task Title",
    "status": "open"
  }
  ```
- **Response:**
  Status: 201 Created
  Body:
  ```json
  {
    "id": 1,
    "title": "Task Title",
    "status": "open",
    "createdAt": "2023-09-25T00:00:00.000Z",
    "updatedAt": "2023-09-25T00:00:00.000Z"
  }
  ```

2. Update a Task:

- **URL:** `/tasks/:id`
- **Method:** `PUT`
- **Request URL Parameters:** Replace :id with the ID of the task to update.
- **Request Body:**
  ````json
  {
  "title": "Updated Task Title",
  "status": "inprogress"
  }```
  ````
- **Response:**
  Status: 200 OK
  Body:
  ```json
  {
    "id": 1,
    "title": "Updated Task Title",
    "status": "inprogress",
    "createdAt": "2023-09-25T00:00:00.000Z",
    "updatedAt": "2023-09-26T00:00:00.000Z"
  }
  ```

3. Get All Tasks (with Pagination):
   URL: /tasks
   Method: GET
   Query Parameters:
   page (optional, default: 1): Page number for pagination.
   limit (optional, default: 10): Number of tasks per page.
   Response:
   Status: 200 OK
   Body:
   json
   Copy code
   {
   "tasks": [
   {
   "id": 1,
   "title": "Task 1",
   "status": "open",
   "createdAt": "2023-09-25T00:00:00.000Z",
   "updatedAt": "2023-09-25T00:00:00.000Z"
   },
   // ... other tasks
   ],
   "page": 1,
   "limit": 10,
   "totalPages": 2,
   "totalTasks": 15
   }

4. Get Task Metrics:
   URL: /metrics
   Method: GET
   Response:
   Status: 200 OK
   Body:
   json
   Copy code
   [
   {
   "date": "September 2023",
   "metrics": {
   "open_tasks": 5,
   "inprogress_tasks": 3,
   "completed_tasks": 7
   }
   },
   {
   "date": "August 2023",
   "metrics": {
   "open_tasks": 2,
   "inprogress_tasks": 4,
   "completed_tasks": 10
   }
   },
   // ... other months
   ]
   This README provides an overview of the Task Tracking System, including how to set up and run the app, as well as details about the available APIs. Feel free to customize and expand upon it for your specific project needs.
