import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'calambur@smex.com', description: 'Почтовый адрес' })
    @IsString({ message: 'Должно быть строкой' })
    @IsEmail({}, { message: 'Некорректный email' })
    readonly email: string;

    @ApiProperty({ example: '123456', description: 'Пароль пользователя' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(4, 16, { message: 'Некорректный пароль' })
    readonly password: string;
}