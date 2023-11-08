import Input from "../component/Input";


export default function LogIn() {
  return (
    <>
      <div className="container py-16">
        <div className="max-w-xl mx-auto shadow rounded px-3 py-4 overflow-hidden">
          <h2 className="text-2xl font-medium capitalize mb-1">login</h2>
          <p className="text-gray-500 text-sm mb-6">login if you are returing customer</p>
          <form action="">
            <div className="space-y-5">
              <div>
                <label for="email" className="text-gray-600 text-md mb-2 capitalize block">email address</label>
                <Input type="email" className="block text-sm w-full border border-gray-300 rounded px-4 py-3 focus:ring-0 focus:border-primary placeholder-gray-400" placeholder="email@gmail.com" />
              </div>
              <div>
                <label for="password" className="text-gray-600 text-md mb-2 capitalize block">password</label>
                <Input type="password" className="block text-sm w-full border border-gray-300 rounded px-4 py-3 focus:ring-0 focus:border-primary placeholder-gray-400" placeholder="*********" />
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-2">
                  <Input type="checkbox" id="checkbox" className="text-primary focus:ring-0 cursor-pointer" />
                  <label for="checkbox" className="text-gray-400 text-sm capitalize">remember</label>
                </div>
                <a href="" className="text-primary text-sm capitalize">forget password?</a>
              </div>
              <div>
                <button type="submit" className="border border-primary  bg-primary  rounded text-white text-xl w-full capitalize py-2">
                  login
                </button>
              </div>
            </div>
          </form>
          <div className="flex items-center justify-center py-2">
            <div className="text-gray-600  capitalize bg-white">or with login</div>
          </div>
          <div className="flex items-center justify-center gap-6 py-2">
            <a href="" className="capitalize border text-primary border-primary w-full flex item-center justify-center hover:bg-primary hover:text-white  py-2 rounded px-8">facebook</a>
            <a href="" className="capitalize border text-primary border-primary w-full flex items-center justify-center hover:bg-primary hover:text-white  py-2 rounded px-8">instragram</a>
          </div>
          <div>
            <h3 className="flex items-center justify-center py-2">Did you have an account? <a href="" className="text-primary"> Register now</a></h3>
          </div>
        </div>
      </div>
    </>
  )
}