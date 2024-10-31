import { JwtPayload } from "jsonwebtoken";
export interface _jwtPayload extends JwtPayload {
  id: number;
  name: string;
  version: number;
  session_id: string;
  roles: string[];
  expires: string;
}
