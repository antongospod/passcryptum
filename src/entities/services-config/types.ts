export type CompressedLogins = Record<string, number>

// CompressedServiceOptions cannot be the number 5
// as this value is the default setting
export type CompressedServiceOptions = 0 | 1 | 2 | 3 | 4 | 6 | 7

export type CompressedServiceData =
  | [CompressedServiceOptions, CompressedLogins]
  | CompressedLogins

export type CompressedConfig = Record<string, CompressedServiceData>

export interface LoginData {
  name: string
  version: number
}

export interface ServiceData {
  name: string
  useSpecialCharacters: boolean
  passwordLengthIndex: number
  logins: LoginData[]
}

export type ServicePreferences = Omit<ServiceData, 'logins'>

export type ServicesConfig = ServiceData[]
