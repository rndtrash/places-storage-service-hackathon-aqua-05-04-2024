import { ApiProperty } from '@nestjs/swagger'
import { DefaultEntityAttributes } from '@src/shared-modules/graphql/attributes/default-entity.attributes'

export abstract class DefaultEntityRestAttributes implements DefaultEntityAttributes {
    @ApiProperty({
        description: 'Entity id in UUID format',
    })
    id: string

    @ApiProperty({
        description: 'Entity creation datetime',
        type: Date,
    })
    createdAt: Date

    @ApiProperty({
        description: 'Entity last update datetime',
        type: Date,
    })
    updatedAt: Date
}
