import { JwtPayload } from "jsonwebtoken";

export interface _jwtPayload extends JwtPayload {
  id: string;
  name: string;
  version: number;
  session_id: string;
  roles: string[];
  expires: string;
  language: string;
}
