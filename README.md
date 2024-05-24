# GameStore

Web application for managing gaming purchases, powered by Next.js, React, Tailwind CSS, and PostgreSQL for robust data management.

## Usage

1. Register for an account to access personalized features.

2. Log in using your credentials.

3. Browse games by categories, view details, and add preferred items to your cart.

4. Proceed to the cart for checkout to finalize your purchase.

## How to run

### Prerequisites

- Ensure [Node.js](https://nodejs.org/) is installed on your system.
- Ensure PostgreSQL is installed on your system.

### Installation and Starting

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/gamestore.git
   ```
   
2. Navigate to the project directory and install dependencies:

   ```bash
   cd gamestore/app
   npm install
   ```
   
3. **Create a `.env` file in the `gamestore` folder and add your preferred session secret and PostgreSQL database configuration:**

   ```bash
   SESSION_SECRET=secret_for_json_web_tokens
   PG_USER=your_username
   PG_PASSWORD=your_password
   PG_HOST=localhost
   PG_PORT=5432
   PG_DATABASE=gamestore
   ```
   
4. **Open the database in the terminal and run the command:**

   ```bash
   psql -U your_postgres_username
   your_postgres_password
   ```
   
5. **After that run the first sql command in the create.sql (postgres-db folder) to create a database**
 
   ```bash
   CREATE DATABASE gamestore;
   ```
   When you create it you also have to connect to it using \c gamestore
   
6. **After creating the database and connecting to it execute the commands in the create.sql and insert.sql files to create the tables and insert values**
   
7. **Start the app:**

   ```bash
   npm run dev
   ```

8. **Open `http://localhost:3000` in your web browser to use the app.**
