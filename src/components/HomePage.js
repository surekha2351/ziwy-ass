import React, { useState } from "react";
import "./home.css";
import NewEnrollmentForm from "./NewEnrollmentForm";

const HomePage = () => {
  const [showActiveTable, setShowActiveTable] = useState(true);
  const [showCompletedTable, setShowCompletedTable] = useState(false);
  const [showNewEnrollmentForm, setShowNewEnrollmentForm] = useState(false);
  const [activeButtonClicked, setActiveButtonClicked] = useState(true);

  const handleActiveClick = () => {
    setShowActiveTable(true);
    setShowCompletedTable(false);
    setShowNewEnrollmentForm(false); // Hide New Enrollment form when Active is clicked
    setActiveButtonClicked(true);
  };

  const handleCompletedClick = () => {
    setShowActiveTable(false);
    setShowCompletedTable(true);
    setShowNewEnrollmentForm(false); // Hide New Enrollment form when Completed is clicked
    setActiveButtonClicked(false);
  };

  const handleNewEnrollmentClick = () => {
    setShowActiveTable(false);
    setShowCompletedTable(false);
    setShowNewEnrollmentForm(true);
  };
  return (
    <div>
      <div className="table-bottom-space">
        <div className="buttons-row">
          <h1 className="enroll-head">Enrollment Management</h1>
          <button
            className={`buttons-home ${
              activeButtonClicked ? "active-button" : ""
            }`}
            onClick={handleActiveClick}
          >
            Active
          </button>
          <button
            className={`buttons-home ${
              !activeButtonClicked ? "active-button" : ""
            }`}
            onClick={handleCompletedClick}
          >
            Completed
          </button>
          <button
            className={`buttons-home ${
              !activeButtonClicked ? "active-button" : ""
            }`}
            onClick={handleNewEnrollmentClick}
          >
            New Enrollment
          </button>
        </div>
        <hr />
        <div className="filter">
          <p className="fil">Filters : none</p>
          <p className="fil">^</p>
        </div>

        {showActiveTable && (
          <table className="table">
            <thead>
              <tr>
                <th rowSpan="5" className="patient">
                  Patient Name
                </th>
                <th rowSpan="5">Status</th>
                <th rowSpan="5">Enrollment Type</th>
                <th rowSpan="5">Device ID</th>
                <th rowSpan="5" className="patient">
                  Start Date
                </th>
                <th rowSpan="5">End Date</th>
                <th rowSpan="5">Remaining Timing</th>
                <th rowSpan="5" className="patient">
                  Provider
                </th>
                <th rowSpan="5" className="patient">
                  Location
                </th>
                <th rowSpan="5">Primary Indication</th>
              </tr>
            </thead>

            <tbody>
              {/* Render default rows here */}
              <tr>
                <td>PLANTAT, ELAMORE</td>
                <td>Active</td>
                <td>30 Day MCT</td>
                <td>202309/C881508</td>
                <td>
                  04/26/2024
                  <br />
                  1:30PM
                </td>
                <td>
                  05/26/2024
                  <br />
                  1.30PM
                </td>
                <td>27 Days</td>
                <td>Suvarchaia Dara </td>
                <td>
                  CardioVascular
                  <br />
                  Institute of Oriando-
                  <br />
                  Oriandho
                </td>
                <td>Paipitations</td>
              </tr>
              <tr>
                <td>RIVERA, LUIS</td>
                <td>Active</td>
                <td>30 Day MCT</td>
                <td>202345/C986357</td>
                <td>
                  04/16/2024
                  <br />
                  3:27
                </td>
                <td>
                  05/16/2024
                  <br />
                  3:27
                </td>
                <td>17 Days</td>
                <td>Suvarchaia Dara </td>
                <td>
                  CardioVascular
                  <br />
                  Institute of Oriando-
                  <br />
                  Oriandho
                </td>
                <td>Paipitations</td>
              </tr>
              <tr>
                <td>HERNANDEZ, EVION</td>
                <td>Active</td>
                <td>14 Days MCT</td>
                <td>202345/C986370</td>
                <td>
                  04/16/2024
                  <br />
                  10:11AM
                </td>
                <td>
                  04/30/2024
                  <br />
                  10:11AM
                </td>
                <td>0 Days</td>
                <td>Amitra Caines</td>
                <td>
                  CardioVascular
                  <br />
                  Institute of Oriando-
                  <br />
                  Oriandho
                </td>
                <td>Paipitations</td>
              </tr>
              <tr>
                <td>PRICE, JUDITH</td>
                <td>Active</td>
                <td>30 Days MCT</td>
                <td>202345/C986339</td>
                <td>
                  04/11/2024
                  <br />
                  10:36AM
                </td>
                <td>
                  05/11/2024
                  <br />
                  10:36AM
                </td>
                <td>11 Days</td>
                <td>Amitra Caines</td>
                <td>
                  CardioVascular
                  <br />
                  Institute of Oriando-
                  <br />
                  Oriandho
                </td>
                <td>Paipitations</td>
              </tr>
              <tr>
                <td>TOLMAN, KEVIN</td>
                <td>Active</td>
                <td>30 Days MCT</td>
                <td>202311/C882541</td>
                <td>
                  04/11/2024
                  <br />
                  5:09PM
                </td>
                <td>
                  05/10/2024
                  <br />
                  5:09PM
                </td>
                <td>11 Days</td>
                <td>Suvarchaia Dara </td>
                <td>
                  CardioVascular
                  <br />
                  Institute of Oriando-
                  <br />
                  Oriandho
                </td>
                <td>Paipitations</td>
              </tr>
              {/* Repeat the above row structure for a total of 5 rows */}
            </tbody>
          </table>
        )}

        {showCompletedTable && (
          <table className="table">
            <thead>
              <tr>
                <th className="patient">Patient Name</th>
                <th>Status</th>
                <th>Enrollment Type</th>
                <th>Device ID</th>
                <th className="patient">Start Date</th>
                <th>End Date</th>
                <th>Remaining Timing</th>
                <th className="patient">Provider</th>
                <th className="patient">Location</th>
                <th>Primary Indication</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jhon Deo</td>
                <td>Completed</td>
                <td>20 Day MCT</td>
                <td>202009/C883508</td>
                <td>
                  07/26/2024
                  <br />
                  1:30PM
                </td>
                <td>
                  08/26/2024
                  <br />
                  1.30PM
                </td>
                <td>27 Days</td>
                <td>Mallika singh </td>
                <td>
                  CardioVascular
                  <br />
                  Institute of Oriando-
                  <br />
                  Oriandho
                </td>
                <td>Paipitations</td>
              </tr>
              <tr>
                <td>Epic Man</td>
                <td>Completed</td>
                <td>10 Day MCT</td>
                <td>202307/C746357</td>
                <td>
                  02/16/2024
                  <br />
                  3:27
                </td>
                <td>
                  03/16/2024
                  <br />
                  3:27
                </td>
                <td>17 Days</td>
                <td>Mallika singh </td>
                <td>
                  CardioVascular
                  <br />
                  Institute of Oriando-
                  <br />
                  Oriandho
                </td>
                <td>Paipitations</td>
              </tr>
              <tr>
                <td>HARWARD</td>
                <td>Completed</td>
                <td>14 Days MCT</td>
                <td>209245/C989870</td>
                <td>
                  01/16/2024
                  <br />
                  10:11AM
                </td>
                <td>
                  01/30/2024
                  <br />
                  10:11AM
                </td>
                <td>0 Days</td>
                <td>Latha</td>
                <td>
                  CardioVascular
                  <br />
                  Institute of Oriando-
                  <br />
                  Oriandho
                </td>
                <td>Paipitations</td>
              </tr>
              <tr>
                <td>PIYUSH</td>
                <td>Completed</td>
                <td>30 Days MCT</td>
                <td>202355/C989239</td>
                <td>
                  02/11/2024
                  <br />
                  10:36AM
                </td>
                <td>
                  03/11/2024
                  <br />
                  10:36AM
                </td>
                <td>11 Days</td>
                <td>Latha</td>
                <td>
                  CardioVascular
                  <br />
                  Institute of Oriando-
                  <br />
                  Oriandho
                </td>
                <td>Paipitations</td>
              </tr>
              <tr>
                <td> KEVIN</td>
                <td>Complted</td>
                <td>30 Days MCT</td>
                <td>202362/C087541</td>
                <td>
                  05/11/2024
                  <br />
                  5:09PM
                </td>
                <td>
                  06/10/2024
                  <br />
                  5:09PM
                </td>
                <td>11 Days</td>
                <td>Mallika singh </td>
                <td>
                  CardioVascular
                  <br />
                  Institute of Oriando-
                  <br />
                  Oriandho
                </td>
                <td>Paipitations</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      {showNewEnrollmentForm && <NewEnrollmentForm />}

      {(showActiveTable || showCompletedTable) && (
        <div className="pagination">
          <div className="items-per-page">
            <select>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <label className="page-num">Items per page </label>
            &emsp; Total Items: 5
          </div>
          <div className="current-page">
            <button>&lt;</button> {/* Previous arrow */}
            <span className="one">1</span> {/* Current page display */}
            <button>&gt;</button> {/* Next arrow */}
          </div>
        </div>
      )}
      <footer className="footer">
        <div className="footer-left">
          <p> Enrollment | Events | Reports</p>
          <p>Copyright©2017Zywie,inc. All rights reserved. &emsp;Terms Of Use &emsp; Privacy Policy &emsp;System Status </p>
        </div>
        <div className="footer-right">
          <p>1-877-858-7200</p>
          <p>Info@zywie.healthcare </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;