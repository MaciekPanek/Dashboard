function FormRow({ children, className, error }) {
  return (
    <div
      className={`${className} border-b-neutral-200 border-b-2 py-4 flex-col md:flex-row flex text-center items-center gap-1 md:gap-20 dark:border-neutral-500 `}>
      {children}
      <span className='text-red-400 italic '>{error}</span>
    </div>
  );
}

export default FormRow;
