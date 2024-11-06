import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        fetch('/gadgetData.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
            }
        </div>
    );
};

export default Gadgets;