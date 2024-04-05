import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { FORBIDDEN_ERROR_MESSAGE, REQUEST_ROLES_KEY, REQUEST_USER_KEY } from '../constant'
import { ERole } from '../enum/role.enum'
import { Builder } from 'builder-pattern'
import { UniversalError } from '../class/universal-error'
import { EUniversalExceptionType } from '../enum/exceptions'
import { GqlExecutionContext } from '@nestjs/graphql'
import { TJwtTokenPayload } from '@src/shared-modules/jwt-oauth2/type/jwt-token-payload.type'

@Injectable()
export class RoleGraphQLGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
    ) {
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const requiredRoles = this.reflector.getAllAndOverride<ERole[]>(REQUEST_ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ])
        if (!requiredRoles) {
            return true
        }

        const request = GqlExecutionContext.create(context).getContext().req
        const userRequestData: TJwtTokenPayload | undefined = request[REQUEST_USER_KEY]

        if (requiredRoles.includes(userRequestData.role)) {
            return true
        }
        else {
            Builder(UniversalError)
                .messages([FORBIDDEN_ERROR_MESSAGE])
                .exceptionBaseClass(EUniversalExceptionType.forbidden)
                .build().throw()
        }
    }
}