export class CreateUserDTO {
  login: string;
  password: string;
}

export class UpdateUserDTO extends CreateUserDTO {}
