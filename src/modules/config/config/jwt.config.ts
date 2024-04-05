import { registerAs } from '@nestjs/config'

export default registerAs('jwt', () => {
	return {
		accessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
	}
})