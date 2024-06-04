// import { Controller, Get, Post, UseGuards } from '@nestjs/common';
// import { ApiBearerAuth, ApiHeader, ApiTags } from '@nestjs/swagger';
// import { config } from 'src/config';
// import { FunctionalService } from '../service/functional.service';
// import { ApiKeyAuthGuard } from 'src/common/auth/ApiKeyAuthGuard';

// @Controller('functional')
// @ApiTags('functional')
// @ApiBearerAuth()
// export class FunctionalController {
//   constructor(private readonly functionalService: FunctionalService) {}

//   @Get('/')
//   // @UseGuards()
//   async getAll(): Promise<any> {
//     return await this.functionalService.GetAll();
//   }

//   @Post('/init')
//   @ApiHeader({ name: 'x-api-key' })
//   // @UseGuards(ApiKeyAuthGuard)
//   async InitData(): Promise<any> {
//     return await this.functionalService.Init();
//   }
// }
