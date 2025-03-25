import { Request, Response } from 'express';
import UserService from '@/services';

class UserController {
  async getAllUsers(req: Request, res: Response) {
    const users = await UserService.getAllUsers();
    res.json(users);
  }

  async getUserById(req: Request, res: Response) {
    const user = await UserService.getUserById(parseInt(req.params.id));
    
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }

  async createUser(req: Request, res: Response) {
    const user = await UserService.createUser(req.body);
    res.status(201).json(user);
  }

  async updateUser(req: Request, res: Response) {
    const updated = await UserService.updateUser(parseInt(req.params.id), req.body);
    if (updated[0] === 1) {
      res.json({ message: 'User updated' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const deleted = await UserService.deleteUser(parseInt(req.params.id));
    if (deleted === 1) {
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }
}

export default new UserController();