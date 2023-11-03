import ShopRadioFilter from "./ShopRadioFilter"

export default function Sideber({ allCatagorys, categoryRadioFilterOnChnage }) {
  return (
    <>
      <div className="col-span-1 shadow px-4 py-5 pb-6 rounded bg-white overflow-hidden">
        <div className="divide-y divide-gary-200 space-y-5">
          <div>
            <h3 className="text-xl text-gray-800 font-medium uppercase">cetagorices</h3>
            <div className="space-y-2">
              <div className="mt-4">
                {allCatagorys && allCatagorys.map(singleCategoryName => <ShopRadioFilter text={singleCategoryName} onCagetgoryFilterRadioChange={categoryRadioFilterOnChnage} id={singleCategoryName} forHtml={singleCategoryName} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}