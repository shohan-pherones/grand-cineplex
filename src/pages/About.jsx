const AboutPage = () => {
  return (
    <div className="pt-[5rem]">
      <div className="about-bg flex justify-center items-center">
        <div className="flex justify-center flex-col text-center max-w-xl items-center gap-5">
          <h2 className="text-6xl font-semibold">About Us</h2>
          <p className="text-4xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="wrapper section-padding flex justify-between gap-44 text-4xl">
        <div className="left flex-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
          exercitationem nemo maiores laboriosam asperiores consequatur at, ipsa
          recusandae veniam nobis, ratione quisquam. Ducimus provident culpa
          molestias velit magni autem ea.
        </div>
        <div className="right flex-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, nulla
          quae ipsa, facere minima ducimus eos sed ipsum nobis consectetur
          aspernatur dolore a sunt, earum est? Autem placeat quae fuga.
        </div>
      </div>

      <div className="grid grid-cols-5 wrapper section-padding gap-10">
        <div className=" w-full group hover:scale-90 duration-700 rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover group-hover:scale-125 duration-1000"
            src="https://images.pexels.com/photos/15663076/pexels-photo-15663076/free-photo-of-a-man-driving-a-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="A Man Driving a Car"
          />
        </div>
        <div className="translate-y-[-5rem] w-full group hover:scale-90 duration-700 rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover group-hover:scale-125 duration-1000"
            src="https://images.pexels.com/photos/9060352/pexels-photo-9060352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="A Man Driving a Car"
          />
        </div>
        <div className="translate-y-[5rem] w-full group hover:scale-90 duration-700 rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover group-hover:scale-125 duration-1000"
            src="https://images.pexels.com/photos/17217984/pexels-photo-17217984/free-photo-of-scandinavian-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="A Man Driving a Car"
          />
        </div>
        <div className="translate-y-[-5rem] w-full group hover:scale-90 duration-700 rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover group-hover:scale-125 duration-1000"
            src="https://images.pexels.com/photos/17034834/pexels-photo-17034834/free-photo-of-buildings-on-santorini-greece.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="A Man Driving a Car"
          />
        </div>
        <div className=" w-full group hover:scale-90 duration-700 rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover group-hover:scale-125 duration-1000"
            src="https://images.pexels.com/photos/16158164/pexels-photo-16158164/free-photo-of-nature-fashion-sunglasses-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="A Man Driving a Car"
          />
        </div>
      </div>

      <div className="wrapper section-padding text-4xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, illum
        repellendus? Beatae ab quae inventore eligendi dolorum molestias sed
        illum dolorem labore expedita facilis enim quisquam assumenda, id
        similique facere, blanditiis odio voluptate quo corporis quas ut. Quidem
        fugiat magni tempora ut, nam, laborum praesentium recusandae accusamus
        voluptates nulla adipisci.
      </div>
    </div>
  );
};

export default AboutPage;
