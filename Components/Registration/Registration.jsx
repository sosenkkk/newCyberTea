import React from 'react';
import qr from '../../assets/qr.jpeg'
import './Registration.css';

const Registration = () => {
    return (
        <div id="registration">
            <div className="max-w-md mx-auto p-6 bg-white border border-gray-300 rounded shadow">
                <div name="Register" id="Register">
                    <h1 className="text-3xl lg:text-4xl font-semibold mb-4 headingStyle">
                        Registration
                    </h1>
                </div>
                <div>
                    <h3 className="text-lg lg:text-xl text-yellow-400 yellowHeadingStyle">
                        Payment Procedure
                    </h3>
                    <ul className="text-base lg:text-lg mt-2 list-decimal list-inside">
                        <li className="mb-2">
                            Pay the registration fee using the below payment methods and amount according to your category.
                        </li>
                        <li className="mb-2">
                            After payment, fill out the <a href="/register" target="_blank" rel="noreferrer" className="linkStyle">Link To The Form</a>.
                        </li>
                    </ul>
                </div>
                <div className="mt-4 table-container">
                    <h3 className="text-lg lg:text-xl text-yellow-400 yellowHeadingStyle">
                        Registration Fee
                    </h3>
                    <div className="table-responsive">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="py-2 px-4 tableCellStyle">
                                        Participant Type
                                    </th>
                                    <th className="py-2 px-4 text-right tableCellStyle">
                                        Indian Participants
                                    </th>
                                    <th className="py-2 px-4 text-right tableCellStyle">
                                        Foreign Participants
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4">
                                        BTech with Research/MS/PhD/Equivalent
                                    </td>
                                    <td className="py-2 px-4 text-right">Rs. 1000/-</td>
                                    <td className="py-2 px-4 text-right">$ 50/-</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4">FACULTY</td>
                                    <td className="py-2 px-4 text-right">Rs. 2000/-</td>
                                    <td className="py-2 px-4 text-right">$ 70/-</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4">INDUSTRY</td>
                                    <td className="py-2 px-4 text-right">Rs. 3000/-</td>
                                    <td className="py-2 px-4 text-right">$ 100/-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="lg:flex justify-between mt-4">
                    <div className="w-full lg:w-1-2">
                        <h3 className="text-lg lg:text-xl text-yellow-400 yellowHeadingStyle">
                            Indian Participants Fee Payment (Through UPI)
                        </h3>
                        <a href="https://drive.google.com/file/d/1TiR9dAVszBogEzPpILuab7qqmI8GcN_E/view?usp=sharing"
                            target="_blank" rel="noreferrer" className="flex items-center justify-center mt-2">
                            <img src={qr} alt="UPI QR code"
                                className="w-12 h-12" />
                        </a>
                    </div>
                    <div className="w-full lg:w-1-2 mt-4 lg:mt-0">
                        <h3 className="text-lg lg:text-xl text-yellow-400 yellowHeadingStyle">
                            Foreign Participants Fee Payment Information
                        </h3>
                        <p className="mt-2 text-sm lg:text-base">
                            ACCOUNT NAME: IIIT SRI CITY CHITTOOR OPEX A/C<br />
                            BANK ACCOUNT NUMBER: 38329375681<br />
                            IFSC CODE: SBIN0016527<br />
                            MICR CODE: 517002825<br />
                            SWIFT CODE: SBININBB324
                        </p>
                    </div>
                </div>
                <p className="text-center text-lg lg:text-2xl font-bold text-yellow-400 mt-4">
                    After the payment, fill out the form to confirm your registration <a href="https://forms.gle/To8gFQaw9cRxEi6z7"
                        target="_blank" rel="noreferrer" className="linkStyle">Link To The Form</a>.
                </p>
                <p className="mt-2 text-sm lg:text-base font-light text-yellow-400">
                    For any queries, contact us at ____
                </p>
            </div>
        </div>
    );
};

export default Registration;
