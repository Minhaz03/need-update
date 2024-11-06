import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredGadgetAtAddToCart, getStoredGadgetToWishlist } from "../Utility/addToDb";
import Gadget from "../Gadget/Gadget";
import SelectGadget from "../SelectGadget/SelectGadget";
import WishlistGadget from "../WishlistGadget/WishlistGadget";
import { toast } from "react-toastify";

const SelectedGadgets = () => {
  const [addToCart, setAddToCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  // console.log(addToCart);
  const allGadgets = useLoaderData();
    // console.log(allGadgets)

  useEffect(() => {
    const storedAddToCart = getStoredGadgetAtAddToCart();
    const storedWishlist = getStoredGadgetToWishlist();
    // console.log(setAddToCart)
    const storedAddToCartInt = storedAddToCart.map((id) => (id));
    const storedWishlistInt = storedWishlist.map((id) => (id));
    // console.log(storedAddToCartInt);

    const gadgetAddToCart = allGadgets.filter((product) =>
      storedAddToCartInt.includes(product.product_id)
  );

    const gadgetWishlist = allGadgets.filter((product) =>
      storedWishlistInt.includes(product.product_id)
  );

  // console.log(gadgetAddToCart);

    // const gadgetAddToCart = allGadgets.filter((gadget) =>
    //   storedAddToCartInt.includes(gadget.product_id)
    // );

    // console.log(gadgetAddToCart);

    setAddToCart(gadgetAddToCart);
    setWishlist(gadgetWishlist);
  }, []);

  const notify = () => toast.success("Congratulation Product Purchased Successfully");

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
          <div className="flex flex-col md:flex-row justify-between">
            <h2 className="text-2xl font-bold">Cart</h2>
            <div className="flex flex-col md:flex-row gap-4 text-center items-center">
              {/*  */}
              <h2>Total Cost: $ 0</h2>
              {/*  */}
              <button className="btn text-xl bg-white text-fuchsia-400 ml-3">Sort By Price</button>
              {/*  */}
              <button onClick={notify} className="btn text-xl bg-fuchsia-400 text-white">Purchase</button>
              {/*  */}
            </div>
          </div>
          <div className="mt-5 space-y-8">
            {
              addToCart.map(gadget => <SelectGadget key={gadget.product_id} gadget={gadget}></SelectGadget>)
            }
          </div>
        </TabPanel>
        <TabPanel className="mt-10 font-bold text-2xl">
          {/* <h2>Gadgets Added To Wishlist: {wishlist.length}</h2> */}
          <div className="mt-5 space-y-8">
            {
              wishlist.map(gadget => <WishlistGadget key={gadget.product_id} gadget={gadget}></WishlistGadget>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SelectedGadgets;
