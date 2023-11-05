import { useForm } from "react-hook-form";

function NewBooking() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <section className=" bg-stone-100 h-screen ">
      new booking
      <form></form>
    </section>
  );
}

export default NewBooking;
