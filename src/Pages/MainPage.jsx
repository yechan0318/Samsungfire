import React from 'react'
import './MainPage.css'
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenuWrap from '../components/MainMenuWrap';
import Header from '../components/Header';

export default function MainPage() {    
  // 백앤드에서 받은 데이터
  const mainMenuItems = [
    {id: 1, title: "계약내용 확인", icon: "1"},
    {id: 2, title: "보험금청구", icon: "2"},
    {id: 3, title: "보험계약대출", icon: "3"},
    {id: 4, title: "보험료납입", icon: "4"},
    {id: 5, title: "자동차 고장출동", icon: "5"},
    {id: 6, title: "완전판매 모니터링", icon: "6"},
    {id: 7, title: "보험가입 바로확인서비스", icon: "7"},
    {id: 8, title: "보험상품", icon: "8"},
    {id: 9, title: "장기보험계약 전자서명", icon: "9"},
    {id: 10, title: "고객정보 확인/변경", icon: "10"},
    {id: 11, title: "임시운전자 특약가입", icon: "11"},
    {id: 12, title: "필요서류 안내", icon: "12"},
    {id: 13, title: "자동이체신청 /계좌변경", icon: "13"},
    {id: 14, title: "환급금지급계좌 등록/변경", icon: "14"},
    {id: 15, title: "최종주행거리 사진등록", icon: "15"},
    {id: 16, title: "포인트적립 /사용내역 확인", icon: "16"}
    ]
  const page = 1;
  
    return (
        <div>
            <Header pageHanlder={page}/>

            <div className="ad">
              <Carousel nextLabel="" prevLabel="">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.samsungfire.com/m/resources/images/front/bg_visual50.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption style={{left: '15px', top: '0%', textAlign: 'left'}}>
                  <p style={{color:'#000'}}>
                  <em style={{borderTop: '1px solid #444', borderBottom: '1px solid #444', padding: '-0.5rem 0', display: 'inline-block menu-box' ,marginBottom: '.3rem'} }>삼성화재 안전운전 캠페인</em>
                  <strong style={{display: 'block', fontSize: '22px', lineHeight: '1', marginBottom: '2.0rem', letterSpacing: '-0.07em', fontWeight: '500'}}>좋은 보험, 좋은 운전자 
                  <div>OX 퀴즈 이벤트</div>
                  </strong>
                  </p>
                  <p className="fontB font-size-13" style={{marginTop: '-25px'}}>
                    <div>정비할인쿠폰으로 차량점검 받으신 후,</div>
                    <div>안전하고 신나는 휴가 떠나세요!</div>
                  </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.samsungfire.com/m/resources/images/front/bg_visual45.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption style={{left: '15px', top: '0%', textAlign: 'left'}}>
                   <p className="fontB">
                    <div>체계적인 시스템을 갖춘 좋은 직업</div>
                    <strong style={{fontSize: '22px'}}>삼성화재 RC(Risk Consultant)</strong>
                   </p>
                   <p className="fontB" style={{fontSize: '13px', marginTop: '-15px'}}>
                     <div>고객과 나의 행복 동행, 노력한 만큼</div>
                     <div>성과를 보장받음 수 있는 성취감!</div>
                     <div>좋은 직업 삼성화재 RC에 도전해 보세요!</div>
                   </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.samsungfire.com/m/resources/images/front/bg_visual46.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption style={{left: '15px', top: '0%', textAlign: 'left'}}>
                    <p className="fontB">
                      <em style={{display:'block', fontSize:'16px', marginBottom:'-8px'}}>셀프 보장분석</em>
                      <strong style={{fontSize:'22px'}}>내 보험은 잘 가입되어 있을까?</strong>
                    </p>
                    <p className="fontB" style={{fontSize:'12px', marginTop:'-17px'}}>
                      <div>몸에 맞는 옷을 입어야 하는 것처럼</div>
                      <div>나에게 맞는 보험을 가입해야 합니다.</div>
                      <div>현재 가입하신 보험을 분석해 보시고</div>
                      <div>전문가(Risk Consultant)의 컨설팅도 받아보세요!</div>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.samsungfire.com/m/resources/images/front/bg_visual33.gif"
                    alt="Third slide"
                  />
                 <Carousel.Caption style={{left: '15px', top: '0%', textAlign: 'left'}}>
                  <p className="fontB">
                    <div>보험계약대출</div>
                    <strong style={{fontSize: '22px'}}>긴급 자금이 필요할 때!</strong>
                  </p>
                  <p className="fontB" style={{fontSize:'12px'}}>
                      <div>보험계약을 해지하지 않고, </div>
                      <div>언제 어디서나 편리하게 이용해 보세요.</div>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>

           <MainMenuWrap items={mainMenuItems} />
                        
            <div className="banner" style={{}}>
              <div className="banner-wrap">
                <img className="banner-image" src='https://www.samsungfire.com/m/resources/images/front/m_f_b01_20201231.png?ver=20210713' alt="banner1"></img>
                  <div className="banner-text">
                    <div style={{position: 'relative', padding: '20px 0 8px 20px',fontSize: '16px',lineHeight: '1', fontWeight:'600',color:'000'}}>
                    장기보험 신용대출</div>
                    <div style={{color: '#222', fontSize: '14px', paddingLeft: '20px', lineHeight: '22px'}}>
                     24시간 쉽고 빠른 대출!
                     <br/> 간편하게 한도를 확인해보세요.
                    </div>
                    </div>
              </div>
            </div>
        </div>
    )
}
