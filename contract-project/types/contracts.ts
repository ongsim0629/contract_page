// 계약 구분 ENUM
export type ContractType = '최초계약' | '연장계약' | '변경계약'

// 계약 방법 ENUM
export type ContractMethod = '입찰' | '수의'

// 계약 종류 ENUM
export type ContractCategory =
  | '일반계약'
  | '단가계약'
  | '임대계약'
  | '공사계약'
  | '매각계약'
  | '용역계약'
  | '유지보수계약'
  | '기타계약'

// 계약 테이블
export interface Contract {
  contract_number: string // PK
  contract_name: string
  contract_type: ContractType
  contract_method: ContractMethod
  contract_category: ContractCategory
  bid_number?: string | null
  contract_date: string // ISO Date string
  contract_start_date: string
  contract_end_date: string
  supplier: string
  contract_price: number
  approval_file_url?: string | null
  contract_file_url?: string | null
  approval_number: number
  deposit_file_url?: string | null
  defect_bond_file_url?: string | null
  expected_price: number
  additional_notes?: string | null
  manager_name: string
}

// 센터
export interface Center {
  name: string // PK
}

// 계정
export interface Account {
  name: string // PK
}

// 계약-센터 연결
export interface ContractCenter {
  id: number
  contract_number: string
  center_name: string
}

// 계약-계정 연결
export interface ContractAccount {
  id: number
  contract_number: string
  account_name: string
}

// 품목 데이터
export interface DataItem {
  id: number
  contract_number: string
  erp_code: number
  erp_item_name: string
  bid_number?: number | null
  contract_category: ContractCategory
  model_number: number
  specification: number
  manufacturer: string
  expected_unit_price: number
  expected_price: number
  contract_unit_price: number
  contract_price: number
}

// 계약 상세 페이지용
export interface ContractDetail {
  contract: Contract
  centers: Center[]
  accounts: Account[]
  dataItems: DataItem[]
}
