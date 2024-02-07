export default function Categories() {
    const categories = [{
        name: "Social Impact",
        number : "01"
    },
    {
        name: "Health",
        number : "02"
    },
    {
        name: "Education",
        number : "03"
    },
    
    
   ]
        name
  return (
    <section
      aria-labelledby="categories"
      className="max-w-[var(--max-width)] mx-auto p-2"
    >
      <h2
        className="text-[clamp(2rem,3.6vw,5.5rem)] font-extrabold py-10 text-center"
        id="categories"
      >
        Categories
      </h2>
      <p className="text-2xl font-bold text-center py-2 grid grid-cols-1 md:grid-cols-3 gap-3 px-20">
        {
            categories.map((category) => (
                <div
                className="bg-white py-10 px-12 text-textDark rounded-md cursor-pointer hover:bg-primary transition-all duration-300 ease-in hover:text-white
                 
                "
           
              >
                  <div className=" ">
                      {category.number}
                  </div>
                  <div>
                      {category.name}
                  </div>
              </div>
            ))
        }
       
      </p>
    </section>
  );
}
