import React from "react";
import styled from "styled-components";
import { BsWallet2, BsPiggyBank, BsBank } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import { MdAssignment } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { GiPayMoney } from "react-icons/gi";
import { GiReturnArrow, GiNotebook } from "react-icons/gi";
import {
  BiCopy,
  BiTime,
  BiDollarCircle,
  BiData,
  BiSupport,
  BiUserCircle,
} from "react-icons/bi";
import { HiCurrencyDollar } from "react-icons/hi";

const Home = () => {
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
      <Second>
        <h3>
          Main <span>Balance</span>
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "80px",
          }}
        >
          <div
            style={{
              background: "#ab3e5b",
              width: "420px",
              height: "120px",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 30px",
            }}
          >
            <div>
              <p>
                ${" "}
                <span style={{ fontSize: "26px", fontWeight: "600" }}>
                  0.00
                </span>
              </p>
              <p style={{ fontWeight: "600" }}>Main Balance</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "80px",
                width: "80px",
                background: "#fff",
                justifyContent: "center",
                borderRadius: "50%",
              }}
            >
              <BsBank size={30} />
            </div>
          </div>
          <div
            style={{
              background: "#211103",
              width: "420px",
              height: "120px",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 30px",
            }}
          >
            <div style={{ color: "white" }}>
              <p>
                ${" "}
                <span style={{ fontSize: "26px", fontWeight: "600" }}>
                  0.00
                </span>
              </p>
              <p style={{ fontWeight: "600" }}>Pending Withdrawals</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "80px",
                width: "80px",
                background: "#fff",
                justifyContent: "center",
                borderRadius: "50%",
              }}
            >
              <HiCurrencyDollar size={40} />
            </div>
          </div>
        </div>
        <h3>
          Payment <span>Info</span>
        </h3>
        <p style={{ textAlign: "center" }}>
          Minimum Withdrawal amount depends of the payment processor $25
          Bitcoin, $5 Litecoin, $25 Ethereum, $5 Dogecoin, $10 Tether TRC20, $5
          Dash, $5 Tether ERC20, $5 Tether BEP20, $5 Tron, $5 BNB, $5 Stellar,
          $0.1 ePayCore <br /> <br /> Commission for Bitcoin 5%, Litecoin 4%,
          Ethereum 5%, Dogecoin 4%, Tether TRC20 5%, Dash 4%, Tether ERC20 5%,
          Tether BEP20 5%, Tron 4%, BNB 4%, Stellar 4%, ePayCore 0.5%.
        </p>
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
  h3 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 90px;

    span {
      color: #ab3e5b;
    }
  }
`;
