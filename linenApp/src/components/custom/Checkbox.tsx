import "./checkbox.scss";


interface Props {
  isChecked: boolean;
  changeChecked: () => void;
}

const Checkbox = ({ isChecked, changeChecked }: Props) => {
  // const [checked, setChecked] = useState(isChecked);
  console.log("checkbox", { isChecked });

  return (
    <div
      className={"checkbox__field"}
      onClick={() => {
        changeChecked();
        // setChecked((prev) => !prev);
      }}
    >
      {isChecked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000"
          strokeWidth={4}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        >
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      )}
    </div>
  );
};

export default Checkbox;
