import { IsString, MinLength } from 'class-validator';
import {ApiProperty, ApiSchema} from "@nestjs/swagger";
import {PostType} from "../schemas/post.schema";
@ApiSchema({ name: 'Create Post Schema Requirements',
description:"Req for post create"})

export class CreatePostDto {
    @IsString()
    @MinLength(1, { message: 'Title must not be empty' })
    @ApiProperty({
        description: 'Required field - min. 1 letter',
        minimum: 1,
        default: 1,
    })
    title: string;

    @IsString()
    @MinLength(1, { message: 'Content must not be empty' })
    @ApiProperty({
        description: 'Required field - min. 1 letter',
        minimum: 1,
        default: 1,
        example: 'priklad textu',
    })

    content: string;


    @ApiProperty({ enum: PostType })
    type: PostType;
}
