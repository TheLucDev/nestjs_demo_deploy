import {
  Controller,
  Get,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Post,
  Body,
  Param,
  Req,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/auth/jwt-auth.guard';
import {
  CreateUserDto,
  EditUserDto,
  GetDetailDto,
  GetUserDto,
} from 'src/common/dto/user.dto';
import { FunctionalInit } from 'src/common/functional.init';
import { UserService } from 'src/service/user.service';

@Controller('user')
@ApiTags('User')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  // @Functionals(FunctionalInit.user_view.name)
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: 'Danh sách Người Dùng' })
  async GetAll(@Query() model: GetUserDto): Promise<any> {
    model.Validation();
    return await this.userService.GetUser(model);
  }

  // @Post()
  // // @Functionals(FunctionalInit.user_create.name)
  // @UseGuards(JwtAuthGuard)
  // @ApiOperation({ summary: 'Create User' })
  // async Post(@Query() model: CreateUserDto): Promise<any> {
  //   return await this.userService.CreateUser(model);
  // }

  @Get('/:id')
  // @Functionals(FunctionalInit.user_view.name)
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: 'Thông tin người dùng' })
  async GetDetail(
    // @Query() query: GetDetailDto,
    @Param('id') idUser: string,
  ): Promise<any> {
    return await this.userService.GetDetail(idUser);
  }

  // @Put('/:id')
  // // @Functionals(FunctionalInit.user_edit.name)
  // @UseGuards(JwtAuthGuard)
  // @UsePipes(new ValidationPipe({ transform: true }))
  // @ApiOperation({ summary: 'Edit User Group' })
  // async EditUserGroup(
  //   // @Query() query: EditUserDto,
  //   @Param('id') id: string,
  //   @Body() body: EditUserDto,
  // ): Promise<any> {
  //   return await this.userService.EditUserGroup(id, body);
  // }
}
