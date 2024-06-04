import { SearchBaseDto } from './common.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GetMenuAdminDto extends SearchBaseDto {
  @ApiProperty({ required: false })
  @IsOptional()
  search: string;
}
