## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
$ npm run start
```

## Run tests

```bash
$ npm run test:e2e
```

## How would I collaborate with a teammate?

To effectively collaborate on this project, we would adopt Agile methodology to ensure smooth development, clear task ownership, and continuous improvement. Here’s how we’d approach the collaboration:

- Task Breakdown: We will break the project into smaller, manageable tasks, each defined as user stories. These tasks should be simple and specific to ensure clarity and focus.

- Individual Ownership: Each teammate will take ownership of specific tasks. One could focus on the backend API, while the other works on the frontend interface. We will clearly define which part of the project each person is responsible for.

- Continuous Review: Once a task is completed, the other teammate will review the solution. This ensures that both parties understand the work, can provide feedback, and improve the overall quality of the project.

## If I had more time

- I would have integrated TypeORM to store superhero data persistently in a database, replacing the in-memory array. This would ensure that data is saved between server restarts and can scale with increased usage.

- I would have added a logger middleware to capture and log all incoming requests, actions, and error messages. This would help with debugging and tracking user activity for better system observability.

- To improve the user experience with larger datasets, I would have added pagination and filtering capabilities for the list of superheroes. This would allow users to navigate through a manageable number of results and search for superheroes based on different criteria (e.g., name, superpower, humility score).

- I would have explored authentication and authorization in NestJS. By implementing JWT-based authentication, I would ensure that only authorized users can add, update, or delete superhero data, protecting the API from unauthorized access.
