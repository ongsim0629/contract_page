export default async function ContractDetailPage({ params }) {
  const { id } = params

  return (
    <div className="flex flex-col items-center">
      <p>파라미터 {id}</p>
    </div>
  )
}