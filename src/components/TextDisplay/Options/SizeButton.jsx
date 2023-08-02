const SizeButton = ({name}) => {
  return (
    <button className="size-btn">
        <p>A</p>
        <div className="size-btn-column">
            <p>{name}</p>
            <p>mm</p>
        </div>
    </button>
  )
}

export default SizeButton
