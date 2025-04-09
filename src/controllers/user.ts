import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import ExpressError from "../utils/ExpressError";

const prisma = new PrismaClient({
    errorFormat: "minimal",
});

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.json({ users });
}

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newUser = await prisma.user.create({
            data: req.body
        });
        res.json({ user: newUser });
    } catch (error) {
        if (error.code === "P2002") {
            return next(new ExpressError("User already exists", 400));
        }
        return next(new ExpressError(`Error creating user: ${error}`, 500));
    }

}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedUser = await prisma.user.update({
        where: { id },
        data: req.body
    });
    res.json({ user: updatedUser });
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await prisma.user.delete({
        where: { id }
    });
    res.json({ message: "User deleted" });
}

export const getAllRoles = async (req: Request, res: Response) => {
    const roles = await prisma.role.findMany();
    res.json({ roles });
}

export const createRole = async (req: Request, res: Response) => {
    const newRole = await prisma.role.create({
        data: req.body
    });
    res.json({ newRole });
}

export const updateRole = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedRole = await prisma.role.update({
        where: { id: Number(id) },
        data: req.body
    });
    res.json({ updatedRole });
}

export const deleteRole = async (req: Request, res: Response) => {
    const { id } = req.params;
    await prisma.role.delete({
        where: { id: Number(id) }
    });
    res.json({ message: "Role deleted" });
}

export const getAllBranches = async (req: Request, res: Response) => {
    const branches = await prisma.branch.findMany();
    res.json({ branches });
}

export const createBranch = async (req: Request, res: Response) => {
    const newBranch = await prisma.branch.create({
        data: req.body
    });
    res.json({ newBranch });
}

export const updateBranch = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedBranch = await prisma.branch.update({
        where: { id: Number(id) },
        data: req.body
    });
    res.json({ updatedBranch });
}

export const deleteBranch = async (req: Request, res: Response) => {
    const { id } = req.params;
    await prisma.branch.delete({
        where: { id: Number(id) }
    });
    res.json({ message: "Branch deleted" });
}