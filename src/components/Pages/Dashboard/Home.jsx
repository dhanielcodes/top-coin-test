import React from "react";
import styled from "styled-components";
import { GiReturnArrow, GiNotebook } from "react-icons/gi";
import { BiCopy } from "react-icons/bi";
import { BsWallet2, BsPiggyBank } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import { MdAssignment } from "react-icons/md";
import { CiDollar } from "react-icons/ci";

const Home = () => {
  const userInformation = [
    {
      title: "Main Balance",
      amount: "0.00",
      icon: BsWallet2,
      color: "#211103",
    },
    {
      title: "Earning Balance",
      amount: "0.00",
      icon: SlScreenDesktop,
      color: "#ab3e5b",
    },
    {
      title: "Pending Withdrawal",
      amount: "0.00",
      icon: MdAssignment,
      color: "#3d3d3d",
    },
    {
      title: "Total Withdrawal",
      amount: "0.00",
      icon: CiDollar,
      color: "#ab3e5b",
    },
    {
      title: "Active Deposit",
      amount: "0.00",
      icon: BsPiggyBank,
      color: "#211103",
    },
  ];
  return (
    <Container>
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

      <div className="second">
        <p style={{ textAlign: "center" }}>
          Please, Activate Two Factor Authentication to Keep your Account Safe
        </p>
        <h2
          style={{
            textAlign: "center",
            fontSize: "30px",
            marginTop: "60px",
            marginBottom: "80px",
          }}
          className="secondTitle"
        >
          <span>Y</span>our Account <span>Balance</span>
        </h2>

        <InfoWrapper>
          {userInformation.map((info) => {
            return (
              <div className="infoDetail">
                <span
                  style={{
                    width: "70px",
                    backgroundColor: `${info.color}`,
                    height: " 70px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                  }}
                >
                  <info.icon size={30} style={{ color: "#fff" }} />
                </span>
                <p>
                  ${" "}
                  <span
                    style={{
                      fontSize: "30px",
                      fontWeight: "600",
                      color: `${info.color}`,
                    }}
                  >
                    {info.amount}
                  </span>
                </p>
                <p style={{ color: `${info.color}`, fontWeight: "600" }}>
                  {info.title}
                </p>
              </div>
            );
          })}
        </InfoWrapper>
      </div>
    </Container>
  );
};

export default Home;
export const Container = styled.section`
  padding: 20px 0 20px 20px;
  height: 800px;
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

  .second {
    margin-top: 100px;

    .secondTitle {
      span {
        color: #ab3e5b;
      }
    }
  }
`;
const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  .infoDetail {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    P {
      margin: 0 !important;
    }
  }
`;
