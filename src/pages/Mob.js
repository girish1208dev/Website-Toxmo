import React, { useState, useRef, useEffect, useCallback } from 'react';
import "./Mob.css";

const Mob = () => {
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
    <div className="mob">
      <div className="frame-parent">
        <div className="image-4-wrapper">
          <img className="image-4-icon" alt="" src="/image-4@2x.png" />
        </div>
        <div className="commerce-happens-exploring-the-wrapper">
          <b className="commerce-happens-exploring">
          India's first passion-based social commerce marketplace
          </b>
        </div>
        <div className="group-wrapper">
        <div className="container12">
      <b className="movingText">Launching Soon</b>
    </div>
          <div className="craft-toxmo-1-parent">
            <img
              className="craft-toxmo-1-icon"
              alt=""
              src="/craft-toxmo-1@2x.png"
            />
            <img
              className="fashion-toxmo-1-icon"
              alt=""
              src="/fashion-toxmo-1@2x.png"
            />
            <img
              className="art-toxmo-1-icon"
              alt=""
              src="/art-toxmo-1@2x.png"
            />
            <img
              className="food-toxmo-1-icon"
              alt=""
              src="/food-toxmo-1@2x.png"
            />
            <img
              className="electronics-toxmo-1-icon"
              alt=""
              src="/electronics-toxmo-1@2x.png"
            />
            <img
              className="cricket-toxmo-1-icon"
              alt=""
              src="/cricket-toxmo-1@2x.png"
            />
            <img
              className="delivery-toxmo-2-icon"
              alt=""
              src="/delivery-toxmo-2@2x.png"
            />
          </div>
        </div>
        <div className="group-parent">
          <img className="frame-child" alt="" src="/group-61.svg" />
          <b className="toxmo">Toxmo</b>
          <div className="contact-wrapper" onClick={onFrameContainerClick}>
            <b className="contact">Contact</b>
          </div>
        </div>
        <div className="group-container">
          <div className="group-div">
            <img className="group-child" alt="" src="/group-109@2x.png" />
            <img className="group-item" alt="" src="/group-113@2x.png" />
            <img className="group-inner" alt="" src="/group-110@2x.png" />
          </div>
        </div>
      </div>
      <div className="mob-inner">
        <div className="image-5-parent">
          <img className="image-5-icon" alt="" src="/image-5@2x.png" />
          <img className="image-6-icon" alt="" src="/image-6@2x.png" />
          <img className="image-7-icon" alt="" src="/image-7@2x.png" />
          <div ref={targetRef} className={`note-the-stores-are-from-the-group1 ${isVisible ? 'slideFromLeft' : ''}`}>
            <div className="note-the-stores-container">
              <span className="note-the-stores-container1">
                
                <span className="the-stores-are">{`Purchasing products from passionate sellers is the perfect choice for value for money   `}</span>
              </span>
            </div>
            <div className="explore-stores-instead" style={{marginTop:'15px'}}>
              Business born from passion
            </div>
            <div className="before-you-end">
            Do you want to turn your passion into a business? Whether it's sports, fashion, art, crafts, or more, this marketplace is perfect for you. Existing static marketplaces won't work for selling your passion-driven business
              

            </div>
            <div className="cool-part-is-you-can-also-purc-wrapper">
            <div className="cool-part-is-container">
              <span className="note-the-stores-container1">
                <p className="cool-part-is">{`Get all your products in live and teams from like-minded people `}</p>
               
              </span>
            </div>
          </div>
          </div>
          
          <div className="the-next-1-billion-people-in-i-wrapper">
            <div className="the-next-1">
              The next 1 billion people in India prefer online shopping
              connected with stores to gain trust and have a better experience,
              rather than purchaing products from static marketplaces
            </div>
          </div>
        </div>
      </div>
      <div className="frame-div">
        <div className="join-our-whatsapp-group-for-re-wrapper">
          <b className="join-our-whatsapp">
            Join our Whatsapp group for real time updates
          </b>
        </div>
        <div className="group-frame">
          <div className="group-parent1">
            <div className="join-now-wrapper">
              <div className="join-now-wrapper">
                <a
                  className="join-now"
                  href="https://chat.whatsapp.com/Dc1l86oY0ei3Kc0b4AwSZY"
                  target="_blank"
                >{`Join Now `}</a>
              </div>
            </div>
            <div className="emoji-smiling-face-with-heart-parent">
              <img
                className="emoji-smiling-face-with-heart"
                alt=""
                src="/-emoji-smiling-face-with-heartshaped-eyes.svg"
              />
              <img
                className="emoji-person-raising-both-han"
                alt=""
                src="/-emoji-person-raising-both-hands-in-celebration.svg"
              />
              <img
                className="emoji-handshake-icon"
                alt=""
                src="/-emoji-handshake.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="group-parent2" data-scroll-to="frameContainer">
        <div className="group-parent3">
          <div className="group-parent4">
            <div className="linkedin-parent">
              <img className="linkedin-icon" alt="" src="/linkedin@2x.png" />
              <a
                className="ijjigbkuvy"
                href="https://www.linkedin.com/company/toxmo/"
                target="_blank"
              >
                I
              </a>
            </div>
            <div className="whatsapp-parent">
              <img className="whatsapp-icon" alt="" src="/whatsapp@2x.png" />
              <a
                className="ijjigbkuvy1"
                href="https://wa.me/message/5YXRKUFHSLF7J1"
                target="_blank"
              >
                I
              </a>
            </div>
            <div className="ijjigbkuvy-parent">
            <img className="instagram-icon" alt="" src="/instagram@2x.png" />
              <a
                className="ijjigbkuvy2"
                href="https://www.instagram.com/toxmonow?igsh=MXZqZzNsemx2ODJrdA=="
                target="_blank"
              >
                I
              </a>
              
            </div>
            <b className="follow-us">Follow us :</b>
          </div>
          <div className="contact-91-9566012163-con-wrapper">
            <b className="contact-91-container">
              <span className="note-the-stores-container1">
                <p className="cool-part-is">{`Contact : `}</p>
                <p className="cool-part-is">{`+91 9566012163 & contact@toxmo.in`}</p>
              </span>
            </b>
          </div>
          <div className="contact-91-9566012163-con-wrapper">
            <b className="contact-91-container">
              <span className="note-the-stores-container1">
                <p className="cool-part-is">{`Contact : `}</p>
                <p className="cool-part-is">{`+91 9566012163 & contact@toxmo.in`}</p>
              </span>
            </b>
          </div>
        </div>
        <div className="copyright-parent">
          <img className="copyright-icon" alt="" src="/copyright@2x.png" />
          <b className="toxmo-2024"> Toxmo, 2024</b>
        </div>
      </div>
    </div>
  );
};

export default Mob;
