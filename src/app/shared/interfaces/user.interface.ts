import { UserType } from "../enums/userType.enum";

export interface IUser {
  nome: string,
  email: string,
  imagemUrl?: string,
  tipoUsuario: UserType
}