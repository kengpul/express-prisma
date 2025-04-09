import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from "express";
import userRoutes from './routes/user';
import ExpressError from "./utils/ExpressError";
import errorHandler from "./utils/errorHandler";

const app = express();
const prisma = new PrismaClient()

app.use(express.json());

async function main() { }
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect()
        process.exit(1)
    })


app.use("/", userRoutes)

app.all("/{*any}", (req: Request, res: Response, next) => {
    next(new ExpressError("Page not found", 404));
});

app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});