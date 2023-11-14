
export default function Input({ className, onKeyUpHandeler, ...rest }) {
  return (
    <>
      <input onChange={onKeyUpHandeler} className={className} {...rest} />
    </>
  )
}