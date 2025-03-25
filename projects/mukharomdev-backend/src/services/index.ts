/* SERVICES */

import UserRepository from '@/repositories';

class UserService {
  async getAllUsers() {
    return UserRepository.findAll();
  }

  async getUserById(id: number) {
    return UserRepository.findById(id);
  }

  async createUser(userData: { name: string; email: string }) {
    return UserRepository.create(userData);
  }

  async updateUser(id: number, userData: { name?: string; email?: string }) {
    return UserRepository.update(id, userData);
  }

  async deleteUser(id: number) {
    return UserRepository.delete(id);
  }
}

export default new UserService();