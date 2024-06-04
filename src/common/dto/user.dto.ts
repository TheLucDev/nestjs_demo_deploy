import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { SearchBaseDto } from './common.dto';

export class GetUserDto extends SearchBaseDto {
  @ApiProperty({ required: false })
  @IsOptional()
  search: string;
}
export class GetDetailDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  id: string;
}

export enum StaffActionEnum {
  'ADD' = 'ADD',
  'REMOVE' = 'REMOVE',
}

export class UpdateDetailStoreDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  store_id: string;

  @ApiProperty({ required: true, enum: StaffActionEnum })
  @IsNotEmpty()
  @IsEnum(StaffActionEnum)
  action: StaffActionEnum;
}

export class UpdateDetailGroupRoleDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  groupRole_id: string;

  @ApiProperty({ required: true, enum: StaffActionEnum })
  @IsNotEmpty()
  @IsEnum(StaffActionEnum)
  action: StaffActionEnum;
}

export class UpdateStaffDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly full_name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  phone_number: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  birth_day: string;
}

export class CreateUserDto {
  @IsOptional()
  @ApiProperty()
  email: string;

  @IsOptional()
  @ApiProperty()
  name: string;
}
export class EditUserDto {
  @IsOptional()
  @ApiProperty()
  name: string;

  // @IsOptional()
  // @ApiProperty()
  // password: string;

  @IsOptional()
  @ApiProperty()
  // groupIds: [];
  groupIds: [];

  // @IsOptional()
  // @ApiProperty()
  // roleIds: [];
}
