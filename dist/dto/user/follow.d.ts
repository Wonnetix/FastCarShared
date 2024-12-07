import { PaginationDto } from "../../common";
declare class FollowRequestDto {
    userId: string;
}
declare class FollowListRequestDto extends PaginationDto {
    userId: string;
}
declare class FollowResponseDto {
    isFollowed: boolean;
    pendingApproval: boolean;
}
declare class FollowUserDto {
    userId: string;
    profilePicture?: string | null;
    name?: string | null;
    isPublic?: boolean;
    pendingApproval?: boolean;
}
export { FollowRequestDto, FollowResponseDto, FollowUserDto, FollowListRequestDto, };
