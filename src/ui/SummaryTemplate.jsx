function SummaryTemplate({ children, data, title, currency, percent }) {
  return (
    <div
      className='w-1/4 rounded-xl flex items-center justify-center gap-10  border
  border-neutral-400 bg-neutral-200 dark:bg-neutral-600'>
      {children}
      <div className='flex flex-col  text-neutral-500 dark:text-neutral-300  '>
        <h2 className='italic text-neutral-600 dark:text-neutral-200  '>{title}</h2>
        <p className='text-3xl'>
          {currency}
          {data}
          {percent}
        </p>
      </div>
    </div>
  );
}

export default SummaryTemplate;
