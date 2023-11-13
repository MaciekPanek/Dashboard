function SummaryTemplate({ children, data, title, currency, percent }) {
  return (
    <div
      className='w-1/4 rounded-xl flex items-center justify-center gap-10  border
  border-neutral-400 bg-neutral-200'>
      {children}
      <div className='flex flex-col  text-neutral-500  '>
        <h2 className='italic text-neutral-600 '>{title}</h2>
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
