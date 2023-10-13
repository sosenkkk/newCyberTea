import React from "react";
import qr from "../../src/assets/qr.jpeg";
import "./Registration.css";

function Registration() {
  return (
    <>
      <div className="Registration_container" id="registration">
        <div className="reg_heading_container">
          <p className="reg_heading">Registration</p>
        </div>
        <div className="reg_payment">
          <p className="payment_heading">Payment Procedure</p>
        </div>
        <div className="reg_list">
          <ul>
            <li>
            Pay the registration fee using below payment methods and amount as per
your participation Type.
            </li>
            <li>
            After payment please fill the form to confirm your registration {"->"} <a href="https://forms.gle/To8gFQaw9cRxEi6z7" target="_blank" rel="noreferrer">Link to the form.</a>
            </li>
          </ul>
        </div>
        <div className="reg_fee">
          <p className="fee_heading">Registration Fee</p>
        </div>
        <div className="fee_container">
          <div className="grid-container">
            <div className="grid-heading">Participant Type</div>
            <div className="grid-heading">Indian Participants</div>
            <div className="grid-heading">Foreign Participants</div>
            <div className="grid-item">
              BTech with Research/ MS/MTech/PhD/Equivalent
            </div>
            <div className="grid-item">Rs. 1000/-</div>
            <div className="grid-item">$ 50/-</div>
            <div className="grid-item">Faculty</div>
            <div className="grid-item">Rs. 1500/-</div>
            <div className="grid-item">$ 70/-</div>
            <div className="grid-item">Industry Person</div>
            <div className="grid-item">Rs. 2000/-</div>
            <div className="grid-item">$ 100/-</div>
          </div>
        </div>
        <div className="payment_container">
          <div className="QR_Fee">
            <p className="QR_heading">Fee Payment through UPI</p>
            <div className="QR_img">
              <a href="#">
                <img src={qr} alt="No image available" />
              </a>
            </div>
          </div>

          <div className="QR_Fee">
            <p className="QR_heading">Fee Payment through Bank Transfer</p>
            <div className="payment_info_con">
              <p className="line_height_2">
                Account Name: IIIT SRI CITY CHITTOOR OPEX A/C{" "}
              </p>
              <p className="line_height_2">Bank Account Number : 38329375681</p>{" "}
              <p className="line_height_2">IFSC CODE: SBIN0016527</p>
              <p className="line_height_2">MICR CODE: 517002825 </p>
              <p className="line_height_2">SWIFT CODE: SBININBB324</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
