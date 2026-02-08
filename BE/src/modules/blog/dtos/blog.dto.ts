import { IsNotEmpty, IsString } from 'class-validator';
import { BlogMessages } from 'src/common/enums/messages.enum';

export class BlogDto {
  @IsString()
  @IsNotEmpty({ message: BlogMessages.requiredTitle })
  title: string;
  @IsString()
  @IsNotEmpty({ message: BlogMessages.requiredContent })
  content: string;
}
