import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewsSearchDtoReq {
  @ApiProperty({})
  @IsOptional()
  readonly search: string;
  @ApiProperty({})
  @IsOptional()
  readonly from: string;
  @ApiProperty({})
  @IsOptional()
  readonly to: string;
  @ApiProperty({})
  @IsOptional()
  readonly sortBy: string;
}
