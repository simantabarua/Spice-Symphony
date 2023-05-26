import SectionHeader from "../../../components/common/SectionHeader";

const FutureProduct = () => {
  return (
    <div
      className="featured-item bg-fixed text-white  my-20 "
      style={{
        backgroundImage: `url("https://i.ibb.co/1vyKDZb/featured.jpg")`,
      }}
    >
      <div className="bg-black bg-opacity-30">
        <div className="pt-8">
          <SectionHeader title="check it out" subtitle="Featured Item" />
          <div className="md:flex justify-center items-center  pb-20 pt-12 px-36">
            <div>
              <img src="https://i.ibb.co/1vyKDZb/featured.jpg" alt="menu" />
            </div>
            <div className="md:ml-10">
              <p>Aug 20, 2029</p>
              <p className="uppercase">Where can i get some?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi
                debitis magnam nostrum! Ut eum dignissimos culpa doloremque
                eligendi consectetur blanditiis laboriosam fugiat ea quia
                similique quam nisi reprehenderit numquam magnam nemo vitae
                cupiditate, atque maiores dicta minus pariatur. Perspiciatis
                nobis vero quas?
              </p>
              <button className="btn btn-outline border-0 border-b-4 mt-4">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureProduct;
