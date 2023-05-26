import MenuItem from "../../../components/common/MenuItem";
import SectionHeader from "../../../components/common/SectionHeader";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12">
      <SectionHeader title="From Our Menu" subtitle="Popular Items" />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 ">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4 ">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
