import express from 'express'
import cors from 'cors'
import indexRoutes from './routes/index.routes.js'
import tasksRoutes from './routes/tasks.routes.js'
import { PORT } from './config.js';
//app
const app = express()
//cors
app.use(cors())
//middleware json
app.use(express.json())
//routes
app.use(indexRoutes)
app.use(tasksRoutes)
//server
app.listen(PORT)
console.log(`Server listening in ${PORT}`);
