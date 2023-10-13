function FormRow({ children, className }) {
  return (
    <div className={`${className} border-b-neutral-200 border-b-2 py-4 `}>
      {children}
    </div>
  );
}

export default FormRow;
