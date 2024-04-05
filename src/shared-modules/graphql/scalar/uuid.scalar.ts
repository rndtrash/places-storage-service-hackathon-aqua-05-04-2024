import { GraphQLScalarType } from 'graphql/type'

const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

function validate(uuid: unknown): string | never {
    if (typeof uuid !== 'string' || !regex.test(uuid)) {
        throw new Error('invalid uuid')
    }
    return uuid
}

export const UUID = new GraphQLScalarType({
    name: 'UUID',
    description: 'UUID Validator',
    serialize: (value) => validate(value),
    parseValue: (value) => validate(value),
})