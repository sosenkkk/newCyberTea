import TeamCard from "./TeamCard";
import "./TeamCard.css";

export default function TeamHolder() {
  return (
    <>
      <div className="card_holder_team">
        <h2 className="contributors">Contributors</h2>
        <h2 style={{ marginTop: "5px" }}>Lead</h2>
        <div className="team_con">
          <TeamCard
            name="VryuShab Goyani"
            link="https://www.iiits.ac.in/home/administration/director/"
            title="Director, IIIT Sri City, Chittoor"
          />
        </div>
        <h2>Web Dev Team</h2>
        <div className="team_con">
          <TeamCard
            link="https://www.linkedin.com/in/nikhil-tripathi/"
            name="Nikhil Tripathi"
            title="Assistant Professor, IIIT Sri City"
          />
          <TeamCard
            name="Dr. Neha Agrawal"
            link="https://www.linkedin.com/in/dr-neha-agrawal-0a32776b/"
            title="Assistant Professor, IIIT Sri City"
          />
          <TeamCard
            link="https://www.linkedin.com/in/nikhil-tripathi/"
            name="Nikhil Tripathi"
            title="Assistant Professor, IIIT Sri City"
          />
          <TeamCard
            name="Dr. Neha Agrawal"
            link="https://www.linkedin.com/in/dr-neha-agrawal-0a32776b/"
            title="Assistant Professor, IIIT Sri City"
          />
        </div>
        <h2>Design Team</h2>
        <div className="team_con">
          <TeamCard
            link="https://www.linkedin.com/in/nikhil-tripathi/"
            name="Nikhil Tripathi"
            title="Assistant Professor, IIIT Sri City"
          />
          <TeamCard
            name="Dr. Neha Agrawal"
            link="https://www.linkedin.com/in/dr-neha-agrawal-0a32776b/"
            title="Assistant Professor, IIIT Sri City"
          />
          <TeamCard
            link="https://www.linkedin.com/in/nikhil-tripathi/"
            name="Nikhil Tripathi"
            title="Assistant Professor, IIIT Sri City"
          />
          <TeamCard
            name="Dr. Neha Agrawal"
            link="https://www.linkedin.com/in/dr-neha-agrawal-0a32776b/"
            title="Assistant Professor, IIIT Sri City"
          />
        </div>
      </div>
    </>
  );
}
