export interface UserLoginType {
  email: string
  password: string
}

export interface UserType {
  email: string
  password: string
  username: string
  role_id: string
}

export interface ReturnUserInfo {
  access_token: string
  token_type: string
}
