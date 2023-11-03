import "../css/style.css"

export default function Banner() {
  return (
    <>
      <div className="bg-cover bg-no-repeat bg-center py-36 banner">
        <div className="container">
          <h1 className="text-6xl text-blue-950 mb-4 capitalize">best collection for<br/> home decoration</h1>
          <p className="text-2xl text-gray-800">Lorem ipsum dolor sit amet pariatur,volup<br/>tatem delectus numquam rem
            molestiae
          </p>
          <button
            className="text-3xl mt-10 capitalize hover:text-primary transition bg-primary text-white border rounded hover:bg-transparent px-8 py-4 border-primary">shop
            now</button>
        </div>
      </div>
    </>
  )
}