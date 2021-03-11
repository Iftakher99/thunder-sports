import React from "react";

const Header = () => {
  const backgroundStyle = {
    backgroundImage: `url("https://scontent.fdac24-1.fna.fbcdn.net/v/t1.15752-0/p206x206/157825236_830920710833759_6340480133241814356_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=58c789&_nc_ohc=eBw7yUh95GQAX-m6nlB&_nc_ht=scontent.fdac24-1.fna&tp=6&oh=9efdec978acdfd32ceec83a793f77186&oe=606EF1A8")`,
    height: "200px",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  };
  return (
    <div style={backgroundStyle}>
      <h1
        className="d-flex justify-content-center w-800 pt-5"
        style={{ color: "yellow" }}
      >
        Thunder League
      </h1>
    </div>
  );
};

export default Header;
