import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <section className="flex gap-5 bg-stone-100 min-h-screen items-center  flex-col p-20">
      <h1 className="text-[50px] text-neutral-600 italic">404 Not Found</h1>
      <p className="italic text-neutral-600 text-3xl ">
        The page you are looking for does not exist.
      </p>
      <button
        className=" text-neutral-500 text-3xl font-light italic flex flex-row items-center mt-20 gap-2 hover:scale-105 ease-in-out duration-300 "
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    </section>
  );
}

export default NotFound;
