import { CreateMultimediaPostRequestDto } from ".";
import { ResponseDto } from "../../common";
declare class UpdatePostRequestDto {
    content: string;
}
declare class UpdateMultimediaPostRequestDto extends CreateMultimediaPostRequestDto {
    post_id: string;
}
declare class UpdatePostResponseDto extends ResponseDto {
}
export { UpdatePostRequestDto, UpdatePostResponseDto, UpdateMultimediaPostRequestDto, };
