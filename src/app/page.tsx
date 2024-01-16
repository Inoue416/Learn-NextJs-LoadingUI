export default function Home() {
  return (
    <>
    <div className="justify-center text-center">
      <div className="text-3xl font-bold mb-5">
        Welcome Home
      </div>

      <div>
        This page is Home page.
      </div>
      <div className="mb-5">
        Could you choose links.
      </div>

      <div>
        <ul className="list-none">
          <li className="mb-2">
            <span className="font-bold mr-3">App1:</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              <a href="/App1">Click Here</a>
            </button>
          </li>
          <li>
          <span className="font-bold mr-3">App2:</span>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
              <a href="/App2">Click Here</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}
