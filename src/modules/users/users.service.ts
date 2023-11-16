import { Injectable } from '@nestjs/common';

import { UserRepository } from '../../shared/database/repositories/users.repositories';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UserRepository) {}
  async getUserById(userId: string) {
    const user = await this.usersRepo.findUnique({
      where: { id: userId },
      select: {
        name: true,
        email: true,
      },
    });

    return {
      name: user.name,
      email: user.email,
    };
  }
}
