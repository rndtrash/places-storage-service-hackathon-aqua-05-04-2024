import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

@Controller('api/pitstop')
export class PitStopController {
    // TODO:
    // constructor(private readonly pitstopService: PitstopService) {}

    @Get()
    findAll() {
        // TODO:
        // return this.pitstopService.findAll();
        return 'test';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        // TODO:
    }

    // TODO:
    // @Post()
    // create(@Body() createUserDto: CreateUserDto) {
    //     return this.usersService.create(createUserDto);
    // }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    //     return this.usersService.update(+id, updateUserDto);
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.usersService.remove(+id);
    // }
}