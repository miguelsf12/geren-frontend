export default function Button({
  content,
  onClick,
  type = "button",
  className = ""
}) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {content}
    </button>
  )
}
