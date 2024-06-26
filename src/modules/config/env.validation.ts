import { plainToInstance } from 'class-transformer'
import { IsEnum, IsNotEmpty, IsNumber, IsString, validateSync } from 'class-validator'
import { EEnvironment } from '@src/shared-modules/common/enum/environment.enum'

class EnvironmentVariables {
	@IsEnum(EEnvironment)
	NODE_ENV: EEnvironment

	@IsNumber()
	@IsNotEmpty()
	PORT: number

	@IsString()
	@IsNotEmpty()
	JWT_ACCESS_TOKEN_SECRET: string

	@IsString()
	@IsNotEmpty()
	DB_HOST: string

	@IsNumber()
	@IsNotEmpty()
	DB_PORT: number

	@IsString()
	@IsNotEmpty()
	DB_USER: string

	@IsString()
	@IsNotEmpty()
	DB_PASSWORD: string

	@IsString()
	@IsNotEmpty()
	DB_NAME: string

	@IsString()
	@IsNotEmpty()
	SWAGGER_SITE_TITLE: string

	@IsString()
	@IsNotEmpty()
	SWAGGER_DOC_TITLE: string

	@IsString()
	@IsNotEmpty()
	SWAGGER_DOC_DESCRIPTION: string

	@IsString()
	@IsNotEmpty()
	SWAGGER_DOC_VERSION: string

	@IsString()
	SWAGGER_SERVER_PREFIX: string
}

export function validate(config: Record<string, unknown>) {
	const validatedConfig = plainToInstance(EnvironmentVariables, config, {
		enableImplicitConversion: true
	})
	const errors = validateSync(validatedConfig, {
		skipMissingProperties: false
	})

	let errorMessage = errors
		.map((message) => message.constraints[Object.keys(message.constraints)[0]])
		.join('\n')

	const COLOR = {
		reset: '\x1b[0m',
		bright: '\x1b[1m',
		fgRed: '\x1b[31m'
	}

	errorMessage = `${COLOR.fgRed}${COLOR.bright}${errorMessage}${COLOR.reset}`

	if (errors.length > 0) {
		throw new Error(errorMessage)
	}

	return validatedConfig
}