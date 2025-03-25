/* REPOSITORIES*/
import User from '@/models';

class UserRepository {
  async findAll(): Promise<User[]> {
    return User.findAll();
  }

  async findById(id: number): Promise<User | null> {
    return User.findByPk(id);
  }

  async create(userData: { name: string; email: string }): Promise<User> {
    return User.create(userData);
  }

  async update(id: number, userData: { name?: string; email?: string }): Promise<[number]> {
    return User.update(userData, { where: { id } });
  }

  async delete(id: number): Promise<number> {
    return User.destroy({ where: { id } });
  }
}

export default new UserRepository();