import "./checkbox.scss";

function CartBox({ content, background, checked, set }) {
  return (
    <label
      style={{ "--backgroundBox": background }}
      className="checkbox"
      htmlFor="red"
    >
      <input
        checked={checked}
        type="checkbox"
        name="red"
        value="red"
        id="red"
        onChange={() => set(!checked)}
      />
      <span className="checkmark"></span>
      <span className="content">{content}</span>
    </label>
  );
}

export default CartBox;
