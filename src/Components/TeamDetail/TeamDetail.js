import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const TeamDetail = () => {
  const backgroundStyle = {
    backgroundImage: `url("https://scontent.fdac24-1.fna.fbcdn.net/v/t1.15752-0/p206x206/157825236_830920710833759_6340480133241814356_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=58c789&_nc_ohc=eBw7yUh95GQAX-m6nlB&_nc_ht=scontent.fdac24-1.fna&tp=6&oh=9efdec978acdfd32ceec83a793f77186&oe=606EF1A8")`,
    height: "200px",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  };
  const logoStyle = {
    fontSize: "2rem",
    paddingRight: "5px",
  };
  const { teamId } = useParams();
  const [teams, setTeams] = useState({});
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams[0]));
  }, [teamId]);
  const {
    strAlternate,
    strFacebook,
    intFormedYear,
    strStadium,
    intStadiumCapacity,
    strGender,
    strYoutube,
    strTwitter,
    strInstagram,
    strTeamJersey,
    strDescriptionEN,
  } = teams;

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

      <div className="container p-5 bg-dark">
        <div className="row">
          <div className="col-md-6 text-light">
            <h1> {teams.strTeam}</h1>
            <p> Full Name : {strAlternate}</p>
            <p> Founded : {intFormedYear}</p>
            <p> Stadium : {strStadium} </p>
            <p> Capacity : {intStadiumCapacity} </p>
            <p> Gender : {strGender} </p>
          </div>
          <div className="col-md-6">
            <img style={{ width: "15rem" }} src={strTeamJersey} alt="" />
          </div>
          <div>
            <p className="text-light p-4"> {strDescriptionEN} </p>
          </div>
          <footer style={logoStyle} className="mx-auto">
            <a href={strFacebook}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href={strTwitter}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href={strInstagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href={strYoutube}>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
