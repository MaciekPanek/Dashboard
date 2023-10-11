import FormInput from "../../ui/FormInput";

function AddNewVilla() {
  return (
    <section className="bg-stone-100 min-h-screen ">
      <form className="bg-slate-500 w-full h-[800px] gap-3 flex flex-col ">
        <FormInput />
        <FormInput />
        <FormInput />
        <FormInput />
        <FormInput />
      </form>
    </section>
  );
}

export default AddNewVilla;
