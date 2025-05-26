"use client"
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleRowClick = (contractNumber) => {
    router.push(`/contracts/${contractNumber}`)
  }

  const contracts = [
    { center: '재단본부', bidNumber: '', contractNumber: '1' },
    { center: '재단본부', bidNumber: '', contractNumber: '2' },
    { center: '전국', bidNumber: '구매입찰 2025-0020', contractNumber: '3' },
  ]

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="mb-4 text-2xl font-bold">계약 조회</h1>
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">센터</th>
            <th className="border px-4 py-2">입찰번호</th>
            <th className="border px-4 py-2">계약번호</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract) => (
            <tr
              key={contract.contractNumber}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => handleRowClick(contract.contractNumber)}
            >
              <td className="border px-4 py-2">{contract.center}</td>
              <td className="border px-4 py-2">{contract.bidNumber}</td>
              <td className="border px-4 py-2">{contract.contractNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
