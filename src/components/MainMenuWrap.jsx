import React, { useState } from "react";
import {
  FaPollH,
  FaCommentDollar,
  FaVoteYea,
  FaRegMoneyBillAlt,
  FaTruckMonster,
  FaIdBadge,
  FaHistory,
  FaFileMedicalAlt,
  FaFeatherAlt,
  FaCreditCard,
  FaChalkboardTeacher,
  FaArrowAltCircleUp,
  FaAddressCard,
  FaCashRegister,
  FaClock,
  FaCoins,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export default function MainMenuWrap(props) {
  const [more, setmore] = useState(true);
  const changemore = () => {
    setmore(!more);
  };
  const moveToLoginPage = () => {
    document.location.href = "/LoginPage";
  };

  return (
    <div>
      <div className="menu" style={{ maxHeight: "" }}>
        <div className="menu-line">
          <div onClick={moveToLoginPage} className="inline-block menu-box">
            <FaPollH style={{ fontSize: "23px", fontWeight: "300px" }} />
            <div>계약내용 확인</div>
          </div>
          <div onClick={moveToLoginPage} className="inline-block menu-box">
            <FaCommentDollar
              style={{ fontSize: "23px", fontWeight: "300px" }}
            />
            <div>보험금청구</div>
          </div>
          <div onClick={moveToLoginPage} className="inline-block menu-box">
            <FaRegMoneyBillAlt
              style={{ fontSize: "23px", fontWeight: "300px" }}
            />
            <div>보험계약대출</div>
          </div>
          <div onClick={moveToLoginPage} className="inline-block menu-box">
            <FaVoteYea style={{ fontSize: "23px", fontWeight: "300px" }} />
            <div>보험료납입</div>
          </div>
        </div>
        <div className="menu-line">
          <div onClick={moveToLoginPage} className="inline-block menu-box">
            <FaTruckMonster style={{ fontSize: "23px", fontWeight: "300px" }} />
            <div>
              자동차
              <br />
              고장출동
            </div>
          </div>
          <div onClick={moveToLoginPage} className="inline-block menu-box">
            <FaIdBadge style={{ fontSize: "23px", fontWeight: "300px" }} />
            <div>
              필요서류
              <br />
              안내
            </div>
          </div>
          <div onClick={moveToLoginPage} className="inline-block menu-box">
            <FaHistory style={{ fontSize: "23px", fontWeight: "300px" }} />
            <div>
              완전판매
              <br />
              모니터링
            </div>
          </div>
          <div onClick={moveToLoginPage} className="inline-block menu-box">
            <FaFileMedicalAlt
              style={{ fontSize: "23px", fontWeight: "300px" }}
            />
            <div>
              보험가입
              <br />
              바로확인서비스
            </div>
          </div>
        </div>
        <div className="menu-line" style={{ display: more ? "none" : "block" }}>
          <div onClick={moveToLoginPage} className="inline-block menu-box">
            <FaFeatherAlt style={{ fontSize: "23px", fontWeight: "300px" }} />
            <div>
              장기보험계약
              <br />
              전자서명
            </div>
          </div>
          <div onClick={moveToLoginPage} className="inline-block menu-box">
            <FaCreditCard style={{ fontSize: "23px", fontWeight: "300px" }} />
            <div>
              자동이체신청
              <br />
              /계좌 변경
            </div>
          </div>
          <div onClick={moveToLoginPage} className="inline-block menu-box">
            <FaChalkboardTeacher
              style={{ fontSize: "23px", fontWeight: "300px" }}
            />
            <div>
              임시운전자
              <br />
              특약가입
            </div>
          </div>
          <div onClick={moveToLoginPage} className="inline-block menu-box">
            <FaArrowAltCircleUp
              style={{ fontSize: "23px", fontWeight: "300px" }}
            />
            <div>
              최종 주행거리
              <br />
              사진등록
            </div>
          </div>
        </div>
        <div className="menu-line" style={{ display: more ? "none" : "block" }}>
          <div onClick={moveToLoginPage} className="inline-block menu-box">
            <FaAddressCard style={{ fontSize: "23px", fontWeight: "300px" }} />
            <div>
              환급금 지급계좌
              <br />
              등록/변경
            </div>
          </div>
          <div onClick={moveToLoginPage} className="inline-block menu-box">
            <FaCashRegister style={{ fontSize: "23px", fontWeight: "300px" }} />
            <div>
              연금납입환경
              <br />
              변경
            </div>
          </div>
          <div onClick={moveToLoginPage} className="inline-block menu-box">
            <FaClock style={{ fontSize: "23px", fontWeight: "300px" }} />
            <div>
              자동차보험
              <br />
              양도/말소해지
            </div>
          </div>
          <div onClick={moveToLoginPage} className="inline-block menu-box">
            <FaCoins style={{ fontSize: "23px", fontWeight: "300px" }} />
            <div>
              포인트 적립/
              <br />
              사용내역 확인
            </div>
          </div>
          {/* <button onClick={changemore}size="lg" style={{width: '100%', background: '#0e3058', color: '#fff', textAlign: 'center', border:'none',padding:'4px'}}>
                  <span style={{fontSize: '14px'}}>{more ? '더보기': '닫기'}</span> <span style={{fontSize: '14px'}}>{more ? <FaChevronDown /> : <FaChevronUp/>}</span>
            </button> */}
          {/*컴포넌트화 시킨부분*/}
          <div
            className="menu-line"
            style={{ display: more ? "none" : "block" }}
          >
            {/* <MainMenu items={mainMenuItems}/> */}
          </div>
        </div>
        <button
          onClick={changemore}
          size="lg"
          style={{
            width: "100%",
            background: "#0e3058",
            color: "#fff",
            textAlign: "center",
            border: "none",
            padding: "4px",
          }}
        >
          <span style={{ fontSize: "14px" }}>{more ? "더보기" : "닫기"}</span>{" "}
          <span style={{ fontSize: "14px" }}>
            {more ? <FaChevronDown /> : <FaChevronUp />}
          </span>
        </button>
      </div>
    </div>
  );
}
