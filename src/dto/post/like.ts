import { ResponseDto } from "../../common";

class PostParamDto {
  postId: string;
}

class LikeResponseDto extends ResponseDto {
  id_like: number;
}

class CommentLikeRequestDto {
  dislike?: boolean;
  report?: string;
}

class CommentLikeResponseDto extends ResponseDto {
  id_like: number;
}

export {
  PostParamDto,
  LikeResponseDto,
  CommentLikeRequestDto,
  CommentLikeResponseDto,
};
