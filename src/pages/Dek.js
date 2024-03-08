import React, { useState, useRef, useEffect, useCallback } from 'react';

import './Dek.css';


const Dek = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5, // Adjust as needed
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="dek">
      <div className="frame-group">
        <div className="image-4-container">
          <img className="image-4-icon1" alt="" src="/image-4@2x.png" />
        </div>
        <div className="group-parent5">
          <img className="frame-item" alt="" src="/group-61.svg" />
          <b className="toxmo1">Toxmo</b>
          <div className="contact-container" onClick={onFrameContainerClick}>
            <b className="contact3">Contact</b>
          </div>
         
        </div>
        <div className="group-wrapper2">
        
        <div className="container12">
      <b className="movingText">Lunching Soon</b>
    </div>
          <div className="craft-toxmo-1-group">
            <img
              className="craft-toxmo-1-icon1"
              alt=""
              src="/craft-toxmo-1@2x.png"
            />
            <img
              className="fashion-toxmo-1-icon1"
              alt=""
              src="/fashion-toxmo-1@2x.png"
            />
            <img
              className="art-toxmo-1-icon1"
              alt=""
              src="/art-toxmo-1@2x.png"
            />
            <img
              className="food-toxmo-1-icon1"
              alt=""
              src="/food-toxmo-1@2x.png"
            />
            <img
              className="electronics-toxmo-1-icon1"
              alt=""
              src="/electronics-toxmo-1@2x.png"
            />
            <img
              className="cricket-toxmo-1-icon1"
              alt=""
              src="/cricket-toxmo-1@2x.png"
            />
            <img
              className="delivery-toxmo-2-icon1"
              alt=""
              src="/delivery-toxmo-2@2x.png"
            />
          </div>
        </div>
        <div className="group-wrapper3">
          <div className="group-parent6">
            <img className="group-icon" alt="" src="/group-109@2x.png" />
            <img className="image-1-icon" alt="" src="/image-1@2x.png" />
            <img className="group-child1" alt="" src="/group-110@2x.png" />
          </div>
        </div>
        <div className="toxmo-commerce-happens-explori-wrapper">
          <b className="toxmo-commerce-happens-container">
            <p className="toxmo2">Toxmo</p>
            <p className="commerce-happens-exploring1">
            India's first passion-based social commerce marketplace
            </p>
          </b>
        </div>
      </div>
      <div className="dek-inner">
        <div className="image-5-group">
          <img className="image-5-icon1" alt="" src="/image-5@2x.png" />
          <div ref={targetRef} className={`note-the-stores-are-from-the-group ${isVisible ? 'slideFromLeft' : ''}`}>
            <div className="note-the-stores-container2" style={{ marginTop: '80px' }}> 
              <span className="note-the-stores-container3">
               
                <span className="the-stores-are1">{` Purchasing products from passionate sellers is the perfect choice for value for money   `}</span>
              </span>
            </div>
            <div className="explore-stores-instead1" style={{ marginTop: '20px' }}>

            Business born from passion
            </div>
            <div className="before-you-end1" style={{ marginTop: '60px' }}>
            Do you want to turn your passion into a business? Whether it's sports, fashion, art, crafts, or more, this marketplace is perfect for you. Existing static marketplaces won't work for selling your passion-driven business
            </div>
          </div>
          <div className="cool-part-is-you-can-also-purc-container">
            <div className="cool-part-is-container2">
              <span className="note-the-stores-container3">
                <p className="toxmo2">{`Get all your products in live and teams from like-minded people  `}</p>
                
              </span>
            </div>
          </div>
          <div className="the-next-1-billion-people-in-i-container">
            <div className="the-next-11">
            The next 1 billion people in India prefer online shopping
              connected with stores to gain trust and have a better experience,
              rather than purchaing products from static marketplaces
            </div>
          </div>
        </div>
      </div>
      <div className="group-parent7">
        <div className="join-our-whatsapp-group-for-re-container">
          <b className="join-our-whatsapp1">
            Join our Whatsapp group for real time updates
          </b>
        </div>
        <div className="group-wrapper4">
          <div className="group-parent8">
            <div className="join-now-container">
              <div className="join-now-container">
                <a
                  className="join-now1"
                  href="https://chat.whatsapp.com/Dc1l86oY0ei3Kc0b4AwSZY"
                  target="_blank"
                >{`Join Now `}</a>
              </div>
            </div>
            <div className="emoji-smiling-face-with-heart-group">
              <img
                className="emoji-smiling-face-with-heart1"
                alt=""
                src="/-emoji-smiling-face-with-heartshaped-eyes.svg"
              />
              <img
                className="emoji-person-raising-both-han1"
                alt=""
                src="/-emoji-person-raising-both-hands-in-celebration.svg"
              />
              <img
                className="emoji-handshake-icon1"
                alt=""
                src="/-emoji-handshake.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="group-parent9" data-scroll-to="frameContainer">
        <div className="group-parent10">
          <div className="group-parent11">
            <div className="linkedin-group">
              <img className="linkedin-icon1" alt="" src="/linkedin@2x.png" />
              <a
                className="ijjigbkuvy3"
                href="https://www.linkedin.com/company/toxmo/"
                target="_blank"
              >
                I
              </a>
            </div>
            <div className="whatsapp-group">
              <img className="whatsapp-icon1" alt="" src="/whatsapp@2x.png" />
              <a
                className="ijjigbkuvy4"
                href="https://wa.me/message/5YXRKUFHSLF7J1"
                target="_blank"
              >
                I
              </a>
            </div>
            <div className="ijjigbkuvy-group">
            <img className="instagram-icon1" alt="" src="/instagram@2x.png" />
              <a
                className="ijjigbkuvy5"
                href="https://www.instagram.com/toxmo.in?igsh=MXZqZzNsemx2ODJrdA=="
                target="_blank"
              >
                I
              </a>
              
            </div>
            <b className="follow-us1">Follow us :</b>
          </div>
          <div className="contact-91-9566012163-con-frame">
            <b className="contact-91-container4">
              <span className="note-the-stores-container3">
                <p className="toxmo2">{`Contact : `}</p>
                <p className="toxmo2">{`+91 9566012163 & contact@toxmo.in`}</p>
              </span>
            </b>
          </div>
        </div>
        <div className="copyright-group">
          <img className="copyright-icon1" alt="" src="/copyright@2x.png" />
          <b className="toxmo-20241"> Toxmo, 2024</b>
        </div>
      </div>
    </div>
  );
};

export default Dek;
