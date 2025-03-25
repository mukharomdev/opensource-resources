// // src/index.ts
import 'module-alias/register';
import {express,dotenv}  from "@/libraries";

import sequelize from '@/config';
import userRoutes from '@/routes';


/*
 * Load up and parse configuration details from
 * the `.env` file to the `process.env`
 * object of Node.js
 */
dotenv.config();

/*
 * Create an Express application and get the
 * value of the PORT environment variable
 * from the `process.env`
 */
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

/* Define a route for the root path ("/")
 using the HTTP GET method */
 app.get("/", (req, res) => {
  const message = 
  "<h1>Express + PostGresSql + Sequleize TypeScript Server</h1>"
      res.send(message);
});


// Routes
app.use('/api', userRoutes);

// Sync database
sequelize.sync().then(() => {
  console.log('Database synced');
});

/* Start the Express app and listen
 for incoming requests on the specified port */
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});




