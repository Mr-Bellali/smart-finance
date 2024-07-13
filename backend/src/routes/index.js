import { Router } from "express";
import transactionRoute from './TransactionsRoutes.js'
import profileRoute from "./ProfileRoutes.js";

const routes = Router();

routes.use(transactionRoute);
routes.use(profileRoute)

export default routes;