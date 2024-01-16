export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome Home</h1>
      <div>
        This page is Home page.
      </div>
      <div>
        Could you choose links.
      </div>
      <div>
        <ul className="list-disc">
          <li>App1: <a href="/App1">Click Here</a></li>
          <li>App2: <a href="/App2">Click</a></li>
        </ul>
      </div>
    </main>
  )
}
