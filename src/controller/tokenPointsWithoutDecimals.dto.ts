import { ApiProperty } from '@nestjs/swagger';
import {
  PointsWithoutDecimalsDto,
  RenzoPointsWithoutDecimalsDto,
} from './pointsWithoutDecimals.dto';
import { RenzoPoints } from 'src/explorer/renzoapi.service';

export class TokenPointsWithoutDecimalsDto {
  @ApiProperty({
    type: Number,
    description: 'error code',
    example: 0,
  })
  public readonly errno: number;
  //errmsg
  @ApiProperty({
    type: String,
    description: 'error message',
    example: 'no error',
  })
  public readonly errmsg: string;

  @ApiProperty({
    type: String,
    description: 'points total supply',
    example: '437936.342254',
    examples: ['437936.342254', null],
    required: false,
  })
  public readonly total_points: string;

  @ApiProperty({
    type: [PointsWithoutDecimalsDto],
    description: 'user points data',
    nullable: true,
  })
  public readonly data?: PointsWithoutDecimalsDto[];
}

export class RenzoTokenPointsWithoutDecimalsDto {
  @ApiProperty({
    type: [RenzoPointsWithoutDecimalsDto],
    description: 'user points data',
    nullable: true,
  })
  public readonly data?: RenzoPointsWithoutDecimalsDto[];

  @ApiProperty({
    type: 'object',
    description: 'totals',
    example: '0xd754Ff5e8a6f257E162F72578A4bB0493c0681d8',
  })
  public readonly totals: RenzoPoints;
}

export class ExceptionResponse {
  @ApiProperty({
    type: Number,
    description: 'error code',
    example: 0,
  })
  public readonly errno: number;
  //errmsg
  @ApiProperty({
    type: String,
    description: 'error message',
    example: 'no error',
  })
  public readonly errmsg: string;
}
