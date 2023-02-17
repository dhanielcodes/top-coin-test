import React, { useState } from "react";
import { GiReturnArrow, GiNotebook } from "react-icons/gi";
import {
  BiCopy,
  BiTime,
  BiDollarCircle,
  BiData,
  BiSupport,
  BiUserCircle,
} from "react-icons/bi";
import styled from "styled-components";
import { BsWallet2, BsPiggyBank } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import { MdAssignment } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { GiPayMoney } from "react-icons/gi";
import carouselData from "../Landing/FirstSection/carousel";
import Modals from "../../../reusables/Modal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [planId, setPlanId] = useState("");
  //   const plans = [
  //     {
  //       amount: "100.20",
  //       duration: "After 2 Hours",
  //       profit: "100.2%",
  //       minMax: "$20.00 - $999.00",
  //       support: "24/7 SUPPORT",
  //       include: "Principal Included",
  //       numberOfDeposits: "3 per day",
  //       id: "pl1",
  //     },
  //     {
  //       amount: "115.00",
  //       duration: "After 2 Hours",
  //       profit: "115.00%",
  //       minMax: "$1000.00 - $2999.00",
  //       support: "24/7 SUPPORT",
  //       include: "Principal Included",
  //       numberOfDeposits: "3 per day",
  //       id: "pl1",
  //     },
  //     {
  //       amount: "100.20",
  //       duration: "After 2 Hours",
  //       profit: "100.2%",
  //       support: "24/7 SUPPORT",
  //       include: "Principal Included",
  //       numberOfDeposits: "3 per day",
  //       id: "pl1",
  //     },
  //     {
  //       amount: "100.20",
  //       duration: "After 2 Hours",
  //       profit: "100.2%",
  //       support: "24/7 SUPPORT",
  //       include: "Principal Included",
  //       numberOfDeposits: "3 per day",
  //       id: "pl1",
  //     },
  //     {
  //       amount: "100.20",
  //       duration: "After 2 Hours",
  //       profit: "100.2%",
  //       support: "24/7 SUPPORT",
  //       include: "Principal Included",
  //       numberOfDeposits: "3 per day",
  //       id: "pl1",
  //     },
  //     {
  //       amount: "100.20",
  //       duration: "After 2 Hours",
  //       profit: "100.2%",
  //       support: "24/7 SUPPORT",
  //       include: "Principal Included",
  //       numberOfDeposits: "3 per day",
  //       id: "pl1",
  //     },
  //   ];
  return (
    <Container>
      {" "}
      <div className="userInfo">
        <div className="userInfoDetail">
          <span className="userInfoIcon">
            <GiReturnArrow />
          </span>
          <p>
            <span style={{ color: "#ab3e5b", fontWeight: "600" }}>
              Last Access
            </span>{" "}
            : Feb 6 2023 07:55:27 PM
          </p>
        </div>
        <div className="userInfoDetail">
          <span className="userInfoIcon">
            <GiNotebook />
          </span>
          <p>
            <span style={{ color: "#ab3e5b", fontWeight: "600" }}>
              Registered At
            </span>{" "}
            : Feb 6 2023
          </p>
        </div>
        <div className="userInfoDetail refLink">
          <p style={{ fontSize: "13px" }}>
            https://meta-hours.club/?ref=Nametheman
          </p>
          <span className="userInfoIcon copyIcon">
            <BiCopy size={25} style={{ color: "#fff" }} />
          </span>
        </div>
      </div>
      <Second className="second">
        <h3 className="title">
          <span>S</span>elect Your <span>Investment Plans</span>
        </h3>

        <CardWrapper>
          {carouselData.map((plan) => {
            return (
              <Card key={plan.id} id={plan.id}>
                <div>
                  <h4 style={{ textAlign: "center", color: "#3d3d3d" }}>
                    <span style={{ fontSize: "25px" }}>{plan.roi}</span>$
                  </h4>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #e2e2e2",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <BiTime />
                      <p style={{ fontWeight: "600" }}>Durations:</p>
                    </div>
                    <p>{plan.duration}</p>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #e2e2e2",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <BiDollarCircle />
                      <p style={{ fontWeight: "600" }}>Total Profit:</p>
                    </div>
                    <p>${plan.totalProfit}</p>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #e2e2e2",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <BiData />
                      <p style={{ fontWeight: "500", fontSize: "14px" }}>
                        Min - Max Deposit:
                      </p>
                    </div>
                    <p style={{ fontSize: "14px" }}>
                      ${plan.min} - ${plan.max}
                    </p>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #e2e2e2",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <BiSupport />
                      <p style={{ fontWeight: "600" }}>Support:</p>
                    </div>
                    <p>{plan.support}</p>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #e2e2e2",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <BiUserCircle />
                      <p style={{ fontWeight: "600" }}>Include:</p>
                    </div>
                    <p>{plan.include}</p>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #e2e2e2",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <GiPayMoney />
                      <p style={{ fontWeight: "600" }}>Number of Deposits:</p>
                    </div>
                    <p>{plan.number}</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "40px 0 20px 0",
                  }}
                >
                  <button
                    onClick={() => {
                      setShowModal(true);
                      setPlanId(plan.id);
                      alert(plan.id);
                    }}
                    style={{
                      background: "#f8e5ee",
                      border: "none",
                      outline: "none",
                      padding: "12px 40px",
                      borderRadius: "30px",
                      cursor: " pointer",
                    }}
                  >
                    Select
                  </button>
                  {showModal && (
                    <Modals
                      show={showModal}
                      closeModal={() => setShowModal(false)}
                      headText="Add Agent Manager"
                      plan={planId}
                    >
                      <h1>hfhfh</h1>
                    </Modals>
                  )}
                </div>
              </Card>
            );
          })}
        </CardWrapper>
      </Second>
    </Container>
  );
};

export default Home;
const Container = styled.section`
  padding: 20px 0 20px 20px;
  /* min-height: 100vh; */
  .userInfo {
    display: flex;
    align-items: center;
    justify-content: space-around;

    .userInfoDetail {
      display: flex;
      align-items: center;
      gap: 10px;

      .userInfoIcon {
        background-color: #999999;
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }
      .copyIcon {
        border-radius: 4px;
        background-color: #ab3e5b;
        height: 50px;
        width: 50px;
      }
    }
    .refLink {
      background-color: #999999;
      padding-left: 10px;
      border-radius: 4px;
      display: flex;
      align-items: center;
    }
  }
`;
const Second = styled.div`
  .title {
    text-align: center;
    font-size: 35px;

    span {
      color: #ab3e5b;
    }
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

const Card = styled.div`
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  padding: 10px 15px;
  width: 300px;
  margin-bottom: 15px;
  transition: 0.3s ease-in;

  &:hover {
    border: 1px solid #ab3e5b;
  }
`;
