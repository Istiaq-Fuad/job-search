import { Oval } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="h-full flex justify-center items-center">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#31363F"
        secondaryColor="#EEEEEE"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Spinner;
