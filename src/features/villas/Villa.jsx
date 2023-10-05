function Villa({ villa }) {
  const { name, capacity, price, image } = villa;

  return (
    <div className="w-[400px]">
      <div>
        <img
          className=" rounded-t-3xl min-w-[400px]  h-[300px] object-cover "
          src={image}
        />
      </div>

      <div className=" rounded-b-3xl w-[400px]  h-[200px] bg-stone-200 ">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Villa;
