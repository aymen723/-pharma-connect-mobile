export type TokenData = {
  token: string;
  expirationDate: string;
  creationDate: string;
};

export type UserRole = "CLIENT" | "ADMIN" | "PHARMACY";

export type UserProfile = {
  id: number;
  username: string;
  email: string;
  emailVerified: boolean;
  picture?: string;
  role: UserRole;
};

export type LoginResp = {
  tokenData: TokenData;
  role: UserRole;
  id: number;
  profile: UserProfile;
};
