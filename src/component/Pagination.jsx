
export default function Pagination({numberOfPanination, pgh, currentPage, nextPageHandler, previousPageHandler}) {

  let setPagination = (index) => {
    pgh(index)
    
  }

  let getPaginationItem = () => {
    let paginationItem = []
    for (let index = 1; index <= numberOfPanination; index++) {
      if (currentPage + 1 == index) {
        paginationItem.push(<button  onClick={() => setPagination(index)}  className="rounded-full cursor-pointer  w-10 h-10 flex items-center bg-white text-primary border border-primary justify-center">{index}</button>)
      }else {
        paginationItem.push(<button  onClick={() => setPagination(index)}  className="bg-primary rounded-full cursor-pointer text-white  w-10 h-10 flex items-center hover:bg-white hover:text-primary border border-primary justify-center">{index}</button>)
      }
    }
    return paginationItem
  }


  return (
    <>
      <div className="container py-16 min-w-sm">
        <div className="flex items-center gap-6 justify-center">
          <button className="rounded-md w-48 h-10 hover:bg-white hover:text-black border border-primary  bg-primary text-white text-sm" onClick = {previousPageHandler}>PreviousPage</button>
          <div className="flex items-center gap-6">
            { getPaginationItem()}
          </div>
          <button className="rounded-md w-48 h-10 hover:bg-white hover:text-black border border-primary  bg-primary text-white text-sm" onClick = {nextPageHandler}>NextPage</button>
        </div>
      </div>
    </>
  )
}