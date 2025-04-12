import "next-auth";
import { UserProfile } from "./user";

declare module "next-auth" {
  interface Session {
    user: UserProfile;
  }
}
