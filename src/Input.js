import colorNames from 'colornames'; //takes name of the color and turns it into a hex form

const Input = ({colorValue,setColorValue,setHexValue,isDarkText,setIsDarkText}) => {
  return (
    <form  onSubmit={(e) => e.preventDefault()}>
    <label>Add Color Name:</label>
      <input 
        autoFocus
        type="text" 
        value={colorValue}
        placeholder="Add color name"
        required
        onChange={(e) => {
            setColorValue(e.target.value);
            setHexValue(colorNames(e.target.value));
        }}
        />
        <button
            type="button"
            onClick={() => setIsDarkText(!isDarkText)}
        > Toggle Text Color
        </button>
    </form>
  )
}

export default Input;