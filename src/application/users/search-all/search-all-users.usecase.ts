import { SearchAllUsersRequest } from './search-all-users.request';
import { BaseUseCase, UseCase } from '@application/shared';
import { UserResponse } from '@application/users';
import { UserRepository } from '@domain/users';

@UseCase()
class SearchAllUsersUseCase extends BaseUseCase<
  SearchAllUsersRequest,
  UserResponse[]
> {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    super();
    this.userRepository = userRepository;
  }

  public async performOperation(): Promise<UserResponse[]> {
    const users = await this.userRepository.findAll();
    return users.map(UserResponse.fromDomainModel);
  }
}

export { SearchAllUsersUseCase };
