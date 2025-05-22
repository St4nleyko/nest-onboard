import { IsOptional, IsString } from 'class-validator';
import {ApiProperty, ApiSchema} from "@nestjs/swagger";
import {PostType} from "../schemas/post.schema";
@ApiSchema({ name: 'Update Post Schema Requirements',
    description:"Req for post update"})


export class UpdatePostDto {
    @IsString()
    @ApiProperty({
        description: 'Not required field',
    })
    title?: string;

    // @ApiProperty({ type: [String] }) -- with arrays
    @IsOptional()
    @IsString()
    @ApiProperty({
        description: 'Not required field',
    })
    content?: string;
    @ApiProperty({ enum: PostType })
    type: PostType;

}
