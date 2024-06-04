import {
  Controller,
  Get,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/auth/jwt-auth.guard';
import { GetMenuAdminDto } from 'src/common/dto/menuAdmin.dto';
import { MenuAdminServices } from 'src/service/menuAdmin.service';

@Controller('MenuAdmin')
@ApiTags('Menu Admin')
@ApiBearerAuth()
export class MenuAdminController {
  constructor(private readonly menuAdminService: MenuAdminServices) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: 'Danh sách Menu Admin' })
  async GetAll(): Promise<any> {
    return await this.menuAdminService.GetMenuAdmin();
  }
}
