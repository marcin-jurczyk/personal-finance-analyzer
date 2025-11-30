import { IsUUID, IsString, IsOptional } from 'class-validator';

export class CreateProfileDto {
  @IsUUID()
  id: string;

  @IsString()
  @IsOptional()
  name?: string;
}