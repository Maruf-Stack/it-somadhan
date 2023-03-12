import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
const Slider = () => {
  const url1 =
    "https://img.freepik.com/free-photo/screen-with-white-color-put-your-text-there-group-young-people-casual-clothes-working-modern-office_146671-16524.jpg?w=900&t=st=1673593615~exp=1673594215~hmac=a52f95642eecd0a2717a2f4195ec17313d4feb9809eeb050ce8036fc74b4d36d";
  const url2 =
    "https://img.freepik.com/free-photo/extremely-focused-male-student-taking-online-test_74855-1859.jpg?w=900&t=st=1673600539~exp=1673601139~hmac=20222d1dc4dcd33dbc2504743060d36954ea8239eb30b241e47d510057ba422c";
  const url3 =
    "https://img.freepik.com/free-photo/focused-teacher-helping-girl-with-task-typing-keyboard_74855-9923.jpg?w=900&t=st=1673600617~exp=1673601217~hmac=a7e27fa0c69cac9cdc4d9b110a9321d6b9a4b0f7cf129dadd3e7774071770637";
  const url4 =
    "https://img.freepik.com/free-photo/active-conversation-group-young-people-casual-clothes-working-modern-office_146671-16458.jpg?w=900&t=st=1673600668~exp=1673601268~hmac=6d013772099bf4b1df2ccf0f4a6cc6cfc5c954df9b32da67e7fb435d060c149c";
  const url5 =
    "https://img.freepik.com/free-photo/beauty-with-friend-man-woman-communicate-students-study-computer-science_1157-42307.jpg?w=900&t=st=1673600790~exp=1673601390~hmac=59a7db2aa2f99e2645c336f22f91f317dd362de4883a0f5ad000b19f7cccb38a";
  return (
    <div>
      <div>
        <Swiper
          spaceBetween={2}
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          // speed={100}

          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiperl"
        >
          <SwiperSlide className="maruf">
            <SwiperSlide className="gradient">
              <img src={url1} alt="" />
            </SwiperSlide>
            <div className="text-left">
              <div className="banner-title">
                <p>
                  We Are Providing<span className="">,</span>
                </p>
                <p></p>
                <p>
                  The Best <span className="it">IT</span>
                </p>
                <p>
                  Services<span className="">....</span>
                </p>
              </div>
              <div className="mt-3 banner-details">
                <p>
                  Here you can get any type of online IT support and can
                  training on any skill,<br></br> to grow your skill in those
                  field<span>....</span>
                </p>
              </div>
              <div className="mt-5">
                <button class="button">Join us now!</button>
                <button class="button ml-10">Get certificate</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="maruf">
            <SwiperSlide className="gradient">
              <img src={url2} alt="" />
            </SwiperSlide>
            <div className="text-left">
              <div className="banner-title">
                <p>
                  We Are Providing<span className="">,</span>
                </p>
                <p></p>
                <p>
                  The Best <span className="it">IT</span>
                </p>
                <p>
                  Services<span className="">....</span>
                </p>
              </div>
              <div className="mt-5 banner-details">
                <p>
                  Here you can get any type of online IT support and can
                  training on any skill,<br></br> to grow your skill in those
                  field<span>....</span>
                </p>
              </div>
              <div className="mt-5">
                <button class="button">Join us now!</button>
                <button class="button ml-10">Get certificate</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="maruf">
            <SwiperSlide className="gradient">
              <img src={url3} alt="" />
            </SwiperSlide>
            <div className="text-left">
              <div className="banner-title">
                <p>
                  We Are Providing<span className="">,</span>
                </p>
                <p></p>
                <p>
                  The Best <span className="it">IT</span>
                </p>
                <p>
                  Services<span className="">....</span>
                </p>
              </div>
              <div className="mt-5 banner-details">
                <p>
                  Here you can get any type of online IT support and can
                  training on any skill,<br></br> to grow your skill in those
                  field<span>....</span>
                </p>
              </div>
              <div className="mt-5">
                <button class="button">Join us now!</button>
                <button class="button ml-10">Get certificate</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="maruf">
            <SwiperSlide className="gradient">
              <img src={url4} alt="" />
            </SwiperSlide>
            <div className="text-left">
              <div className="banner-title">
                <p>
                  We Are Providing<span className="">,</span>
                </p>
                <p></p>
                <p>
                  The Best <span className="it">IT</span>
                </p>
                <p>
                  Services<span className="">....</span>
                </p>
              </div>
              <div className="mt-5 banner-details">
                <p>
                  Here you can get any type of online IT support and can
                  training on any skill,<br></br> to grow your skill in those
                  field<span>....</span>
                </p>
              </div>
              <div className="mt-5">
                <button class="button">Join us now!</button>
                <button class="button ml-10">Get certificate</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="maruf">
            <SwiperSlide className="gradient">
              <img src={url5} alt="" />
            </SwiperSlide>
            <div className="text-left">
              <div className="banner-title">
                <p>
                  We Are Providing<span className="">,</span>
                </p>
                <p></p>
                <p>
                  The Best <span className="it">IT</span>
                </p>
                <p>
                  Services<span className="">....</span>
                </p>
              </div>
              <div className="mt-5 banner-details">
                <p>
                  Here you can get any type of online IT support and can
                  training on any skill,<br></br> to grow your skill in those
                  field<span>....</span>
                </p>
              </div>
              <div className="mt-5">
                <button class="button">Join us now!</button>
                <button class="button ml-10">Get certificate</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
