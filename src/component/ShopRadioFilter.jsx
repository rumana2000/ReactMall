
export default function ShopRadioFilter({ text, onCagetgoryFilterRadioChange, ...rest }) {

  return (
    <>
      <div className="flex gap-2 items-center justify-center py-4">
        <input id={text} type="radio" value={text} name="default-radio"
          className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:text-primary focus:ring-0 focus:ring-primary dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
          onChange={onCagetgoryFilterRadioChange} />
        <label for={text} className="text-gray-600 capitalize text-2xl ml-4 cursor-pointer" {...rest} >{text}</label>
        <div className="ml-auto text-sm text-gray-600">(15)</div>
      </div>
    </>
  )
}