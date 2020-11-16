import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';

export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            username: 'email',
            password: 'senha'
        });
    }

    async validate(email: string, senha: string): Promise<any> {
        const user = await this.authService.validadeUser(email, senha);
        if (user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}

