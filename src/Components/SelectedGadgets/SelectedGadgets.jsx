import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredGadgetAtAddToCart } from "../Utility/addToDb";

const SelectedGadgets = () => {
  const [addToCart, setAddToCart] = useState([]);
  // console.log(addToCart);
  const allGadgets = useLoaderData();
    // console.log(allGadgets)

  useEffect(() => {
    const storedAddToCart = getStoredGadgetAtAddToCart();
    // console.log(setAddToCart)
    const storedAddToCartInt = storedAddToCart.map((id) => parseInt(id));
    console.log(storedAddToCartInt);

    const gadgetAddToCart = allGadgets.filter((product) =>
      storedAddToCartInt.includes(product.product_id)
  );
  console.log(gadgetAddToCart);

    // const gadgetAddToCart = allGadgets.filter((gadget) =>
    //   storedAddToCartInt.includes(gadget.product_id)
    // );

    // console.log(gadgetAddToCart);

    setAddToCart(gadgetAddToCart);
  }, []);

  return (
    <div>
      <div className="bg-[#9538E2] p-10 rounded-lg mb-10">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold my-6">Dashboard</h2>
          <p className="text-xl font-medium my-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        {/* <div className="gap-5 flex justify-center">
          <button className="btn text-2xl font-bold text-[#9538E2] px-14">
            Cart
          </button>
          <button className="btn bg-[#86aeb4] text-2xl font-bold px-14">
            Wishlist
          </button>
        </div> */}
      </div>

      <Tabs className="text-center font-extrabold text-2xl">
        <TabList>
          <Tab>Add To Cart</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel className="mt-10 font-bold text-2xl">
          <h2>Gadgets Added To Cart: {addToCart.length}</h2>
        </TabPanel>
        <TabPanel className="mt-10 font-bold text-2xl">
          <h2>Gadgets Added To Wishlist</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SelectedGadgets;
