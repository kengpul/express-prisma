import express from 'express';
import * as user from '../controllers/user';

const router = express.Router();

router.get('/', user.getAllUsers);
router.post('/', user.createUser);
router.put('/:id', user.updateUser);
router.delete('/:id', user.deleteUser);

router.get('/roles', user.getAllRoles);
router.post('/roles', user.createRole);
router.put('/roles/:id', user.updateRole);
router.delete('/roles/:id', user.deleteRole);

router.get("/branches", user.getAllBranches);
router.post("/branches", user.createBranch);
router.put("/branches/:id", user.updateBranch);
router.delete("/branches/:id", user.deleteBranch);

export default router;