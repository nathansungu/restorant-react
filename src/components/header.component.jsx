// import react icons
import {IoMdPizza } from "react-icons/io";
import { GiAllForOne, GiCupcake } from "react-icons/gi";
import { LiaGlassMartiniAltSolid, LiaPepperHotSolid } from "react-icons/lia";
import { TbSaladFilled } from "react-icons/tb";

//port headerItems from "../headeritems";


const HeaderItemsComponent = ({ scr, name }) => {
  return (
    <div className="menu-item">
      <span className="icon"  >{scr}</span>
      <span>
        <p className="iconName">{name}</p>
      </span>
    </div>
  );
};

const HeaderItems = () => {
  return (
    <>
      <div className="menu">
        {/* {headerItems.map((listing, indx) => {
          return ( */
            // <HeaderItemsComponent
            //   key={indx}
            //   scr={listing.scr}
            //   name={listing.name}
            // />
        }
          <>
            <HeaderItemsComponent name="all" scr={<GiAllForOne />} />
            <HeaderItemsComponent name = "drinks" scr={<LiaGlassMartiniAltSolid />}/>
            <HeaderItemsComponent name= "pizza" scr={ <IoMdPizza/>}/>
            <HeaderItemsComponent name ="salad" scr={ <TbSaladFilled/>}/>
            <HeaderItemsComponent name= "spicy" scr={ <LiaPepperHotSolid/>} />
            <HeaderItemsComponent name= "sweets" scr={ <GiCupcake/>}/>
          </>
        
      </div>

      <button className="view-all-button">view all</button>
    </>
  );
};

const Header = () => {
  return (
    <>
      <div className="header">
        <HeaderItems />
      </div>
    </>
  );
};
export default Header;
