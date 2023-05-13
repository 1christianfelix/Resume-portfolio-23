import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { BsSquare } from "react-icons/bs";
import { MdMinimize } from "react-icons/md";
import Draggable from "react-draggable";
import { motion } from "framer-motion";
import the_wind_rises from "../assets/the_wind_rises.gif";

const AboutMe = (props) => {
  const [size, setSize] = useState(
    "h-[calc(100%-1.5rem)] w-[calc(100%-1.5px)]"
  );
  const [expanded, setExpanded] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const name = "Christian Felix";
  const nameArray = name.split("");

  const tiltAnimation = {
    rotate: [3, -3, 3],
  };

  const shakeAnimation = {
    x: [5, -5, 5],
  };

  const transition = {
    duration: 3,
    ease: "easeInOut",
    repeat: Infinity,
  };

  return (
    <Draggable
      handle=".drag-handle"
      bounds=".desktop-boundary"
      position={position}
      onDrag={(_, newPosition) => setPosition(newPosition)}
    >
      <div className={`absolute ${size} bg-[#f5f5f4] z-[100] flex flex-col`}>
        <section className="h-[1.5rem] w-[100%] bg-[#EBE8E2] flex items-center justify-between realtive drag-handle z-[1000]">
          <span className="text-black justify-self-start ml-2 hover:cursor-default">
            About Me
          </span>
          <div className="flex items-center gap-x-[.5rem] mr-2">
            <MdMinimize className="windows_btns self-end"></MdMinimize>
            <BsSquare
              className="h-[2] windows_btns"
              onClick={() => {
                if (!expanded) {
                  setPosition({ x: 0, y: 0 });
                }
                setSize(
                  !expanded
                    ? "h-[calc(100%-1.5rem)] w-[calc(100%-1.5px)]"
                    : "h-[70%] w-[70%]"
                );
                setExpanded((prev) => {
                  return !prev;
                });
              }}
            ></BsSquare>
            <GrClose className="windows_btns" onClick={props.close}></GrClose>
          </div>
        </section>
        <section className="flex items-center flex-col p-12 h-full overflow-auto">
          <div className="absolute inset-0 blur-[5px] opacity-40 -z-10">
            <img
              src={the_wind_rises}
              alt="Background"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <motion.div
            className="text-center font-darumadrop text-5xl flex"
            animate={shakeAnimation}
            transition={transition}
          >
            {nameArray.map((char, i) =>
              char === " " ? (
                <span key={i}>&nbsp;</span>
              ) : (
                <motion.span
                  className={`transform ${
                    i % 2 === 0 ? "rotate-3" : "rotate-[-3deg]"
                  }`}
                  key={i}
                  animate={tiltAnimation}
                  transition={transition}
                >
                  {char}
                </motion.span>
              )
            )}
          </motion.div>
          <div className="mt-5 text-lg text-black z-[10000] bg-white bg-opacity-[5%] backdrop-blur-lg">
            <p className=" text-center">
              <span className="">
                Just kidding, this isn't an about me page. This is a random
                story about how I got here
              </span>
              <br />
            </p>
          </div>
          <div className="w-[50%] mt-5 text-lg text-black z-[10000] bg-white bg-opacity-[15%] backdrop-blur-lg text-center">
            <p className="text-left">
              <p>
                So, there I was, fresh out of high school, plunging into a gap
                year, hoping that I would find a career path that wouldn't
                require me to go back to school. The first thing I did was buy a
                ton of self-help books. Consequently, every word I read pointed
                me to Warren Buffet's "The Intelligent Investor." Inspired, I
                started trading and basically flushed my whole account away. So,
                investing was not my thing. It was on to something new.
              </p>
              <br></br>
              <p>
                Next, I tiptoed my way into the clothing business. Another
                terrible idea. Very terrible, actually, so bad. As I pondered my
                next move, I decided to take an artistic approach and dived
                headfirst into music production. I found that my musical
                skillset was very "meh," but I thorougly enjoyed producing.
                Thanks to a friend who convinced me to join a piano and music
                theory course with her, I decided to cut my gap year short.
                After my first semester, I decided to major in music.
              </p>
              <br></br>

              <p>
                As I delved into general education courses, a newfound passion
                for learning ignited in me. In a burst of overzealous
                excitement, I texted my cousin, declaring I'd become a pre-med
                music major. Why? No clue. Anyways, in the midst of completing
                my math prerequisites, I discovered a love for problem-solving.
                Without a single thought, I spontaneously switched my major to
                mathematics. Still pre-med, of course. A strange combo, right?
              </p>
              <br></br>

              <p>
                Immersed in abstract math and organic chemistry, I began to feel
                empty inside. I was missing something important to myself. I was
                yearning for a creative outlet. Reflecting, I realized computer
                science could be the perfect blend of creativity and
                problem-solving. So, I took my counselor's advice and switched
                majors once again right before transferring to another
                university. By the way, that was a super terrible decision on my
                part.
              </p>
              <br></br>

              <p>
                Despite my intentions, I faced rejection for my computer science
                applications from my dream school and my backup. My backup did
                offer an option to join as a math major, but my heart wasn't in
                it. It wasn't a lost cause though, as one school had accepted me
                for computer science.
              </p>
              <br></br>

              <p>
                Unfortunately, life just decided to be funny and hurl pebbles
                and boulders at me out of nowhere. I was brute forced into
                finding my own path back to where I once was. I decided that I
                would just take an alternative approach and began self-studying
                and apply for a software engineering bootcamp. I spent months
                teaching myself the basics to suddenly taking on a 19 week
                software engineering program. Thousands of hours and a ton of
                McDonalds later, I emerged as a full-stack developer. Quite the
                rollercoaster, but here I am, finally a software engineer!{" "}
              </p>
              <span className="text-xs">(and technically still pre-med)</span>
            </p>
          </div>
        </section>
      </div>
    </Draggable>
  );
};

export default AboutMe;
