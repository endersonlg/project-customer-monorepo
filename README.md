# Favorite Color

This project is a customer registration system that collects basic information such as full name, CPF (Brazilian ID), email, favorite color, and notes, storing it in a PostgreSQL database. The application was developed using **Typescript**, **React** on the frontend, and **NestJS** on the backend.

## Technologies Used

- **Frontend**: Next.js with React and Typescript.
- **Backend**: NestJS with Typescript.
- **Database**: PostgreSQL.
- **Docker**: For application containerization.

## Features

- Form to register customers with the following fields:
  - Full name
  - CPF (Brazilian ID)
  - Email
  - Favorite color (selection based on a rainbow)
  - Notes
- Field validation:
  - Valid CPF and email required.
  - Mandatory fields: Full name, CPF, email, and favorite color.
- Data stored in a PostgreSQL database.

## Setup and Execution

### 1. Cloning the Repository

Clone the project and navigate to the folder:

```bash
git clone https://github.com/endersonlg/project-customer-monorepo.git
cd project-customer-monorepo
```

### 2. Installing Dependencies
In the project root, run the following command to install all dependencies:

```
npm install
```

### 3. Configuring Environment Variables
Create .env files for the backend and frontend, filling in the required information:

Backend (.env):
```
DATABASE_URL=postgres://<user>:<password>@<host>:<port>/<database>
PORT=3001
```

Frontend (.env):
```
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
```

### 4. Running Prisma on the Backend
Navigate to the backend folder and generate Prisma client files:

```
npx prisma generate
```

### 5. Running with Docker
To run postgres using Docker, execute:
```
docker-compose up 

```


### 6. Running the Application
In the project root, run the following command to start both the backend and frontend:
```
npm run dev
```

The application will be available at:

- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## Deployment
The application is deployed using Render.

- Frontend: [Deployed Application](https://favorite-color.onrender.com)
- Backend: [Deployed Backend](https://project-customer-monorepo.onrender.com)
  
Both services are built using Docker images configured in the repository.

### Project Structure
backend/: Contains the NestJS code to manage APIs and communicate with the database.
frontend/: Contains the Next.js code for the user interface.
docker-compose.yml: Configuration file for initializing Docker services.

