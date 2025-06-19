import headerItems from "../headeritems";

const HeaderItemsComponent = ({ scr: Icon, name }) => {
  return (
    <div className="menu-item">
      <span><Icon className="icon" /></span>
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
        {headerItems.map((listing, indx) => {
          return (
            <HeaderItemsComponent
              key={indx}
              scr={listing.scr}
              name={listing.name}
            />
          );
        })}
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
