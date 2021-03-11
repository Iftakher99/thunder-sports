import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faCoffee} />;

const TeamDetail = () => {
  const backgroundStyle = {
    backgroundImage: `url("https://scontent.fdac24-1.fna.fbcdn.net/v/t1.15752-0/p206x206/157825236_830920710833759_6340480133241814356_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=58c789&_nc_ohc=eBw7yUh95GQAX-m6nlB&_nc_ht=scontent.fdac24-1.fna&tp=6&oh=9efdec978acdfd32ceec83a793f77186&oe=606EF1A8")`,
    height: "200px",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  };
  const { teamId } = useParams();
  const [teams, setTeams] = useState({});
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams[0]));
  }, []);
  return (
    <div>
      <div>
        <div style={backgroundStyle}>
          <h1
            className="d-flex justify-content-center w-800 pt-5"
            style={{ color: "Black" }}
          >
            <img style={{ width: "8rem" }} src={teams.strTeamBadge} alt="" />
          </h1>
        </div>
      </div>
      {/* <h4>This is Team Detail of {teamId}</h4>
      <p>Name : {teams.strAlternate}</p> */}
      <div className="container p-5 bg-info">
        <div className="row">
          <div className="col-md-6 text-light">
            <h1> {teams.strTeam}</h1>
            <p> Full Name : {teams.strAlternate}</p>
            <p> Founded : {teams.intFormedYear}</p>
            <p> Stadium : {teams.strStadium} </p>
            <p> Capacity : {teams.intStadiumCapacity} </p>
            <p> Gender : {teams.strGender} </p>
          </div>
          <div className="col-md-6">
            <img style={{ width: "15rem" }} src={teams.strTeamJersey} alt="" />
          </div>
          <div>
            <p className="text-light p-4"> {teams.strDescriptionEN} </p>
          </div>
          <div>
            {element}
            <FontAwesomeIcon icon={faCoffee} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
