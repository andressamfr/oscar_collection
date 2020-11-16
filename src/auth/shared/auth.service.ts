import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/shared/user.service';

@Injectable()
export class AuthService {
    constructor (
        private userService: UserService,
    ) {}

    async validadeUser(userEmail: string, userPassword: string) {
        const user = await this.userService.getByEmail(userEmail);
        if (user && user.senha === userPassword) {
            const {_id, nome, sobrenome, email} = user;
            return {id: _id, nome, sobrenome, email};
        }

        return null;
    }
}