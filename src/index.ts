import express, { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import userRoutes from './routes/user';

const app = express();
const prisma = new PrismaClient()

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


app.use(express.json());
app.use("/", userRoutes)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});