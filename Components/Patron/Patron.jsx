import PatronCard from "./PatronCard";
import "./PatronCard.css";

export default function Patron() {
  return (
    <>
      <div className="card_holder_patron">
        <h2>Chief Patron</h2>
        <div className="workshop_con">
          <PatronCard
            name="Prof.D.V.L.N. Somayajulu"
            img="/img/somayajulu.png"
            link="https://www.iiits.ac.in/home/administration/director/"
            title="Director, IIIT Sri City, Chittoor"
          />
        </div>
        <h2>Workshop Conveners</h2>
        <div className="workshop_con">
          <PatronCard
            link="https://www.linkedin.com/in/nikhil-tripathi/"
            name="Nikhil Tripathi"
            title="Assistant Professor, IIIT Sri City"
            img="/img/1659677963779.jpeg"
          />
          <PatronCard
            name="Dr. Neha Agrawal"
            img="/img/1619627502520.jpeg"
            link="https://www.linkedin.com/in/dr-neha-agrawal-0a32776b/"
            title="Assistant Professor, IIIT Sri City"
          />
        </div>
      </div>
    </>
  );
}
