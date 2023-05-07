import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { profiles } from "../constants";

const ProfileCard = ({
  index,
  name,
  image,
  link,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    // className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className={'flex flex-col items-center justify-center gap-8'}>
      <div className={'h-24 w-24'}>
      <a target="_blank" href={link}>
       <img
          src={image}
          alt={`Profile_by-${name}`}
        />
      </a> 
      </div>
    </div>
  </motion.div>
);

const Profiles = () => {
  return (
    <div className={`mt-12 rounded-[20px]`}>
      <div
        className={`rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I did</p>
          <h2 className={styles.sectionHeadText}>My Profile Links.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {profiles.map((profile, index) => (
          <ProfileCard key={profile.name} index={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Profiles, "");
