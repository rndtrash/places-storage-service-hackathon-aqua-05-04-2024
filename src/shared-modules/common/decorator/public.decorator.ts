import { CustomDecorator, SetMetadata } from '@nestjs/common'
import { IS_PUBLIC_KEY } from '../constant'

export const Public = (): CustomDecorator => SetMetadata(IS_PUBLIC_KEY, true)