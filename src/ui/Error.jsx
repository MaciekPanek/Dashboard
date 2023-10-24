import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center flex-col  ">
      <h1 className="text-3xl my-10 ">Something went wrong 😢</h1>
      <p className="text-2xl bg-red-400 rounded-lg px-6 py-2 text-red-50 mb-10 ">
        {error.data || error.message}
      </p>

      <button
        className=" text-neutral-500 text-3xl font-light italic flex flex-row items-center gap-2 hover:scale-105 ease-in-out duration-300 "
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
