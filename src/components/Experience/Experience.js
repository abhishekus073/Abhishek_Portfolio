// Inside your component
import React from "react";
import styles from "./Experience.module.css";
import img from "../../assets/skills/html.png"
import img2 from "../../assets/skills/css.png"
import img3 from "../../assets/skills/react.png"
import img4 from "../../assets/skills/node.png"
import img5 from "../../assets/skills/graphql.png"
import img6 from "../../assets/skills/mongodb.png"
import img7 from "../../assets/skills/figma.png"
import img8 from "../../assets/history/google.png"
import img9 from "../../assets/skills/figma.png"


const skillsData = [
  {
    "title": "HTML",
    "imageSrc": img
  },
  {
    "title": "CSS",
    "imageSrc": img2
  },
  {
    "title": "React",
    "imageSrc": img3
  },
  {
    "title": "Node",
    "imageSrc": img4
  },
  {
    "title": "GraphQL",
    "imageSrc": img5
  },
  {
    "title": "MongoDB",
    "imageSrc": img6
  },
  {
    "title": "Figma",
    "imageSrc": img7
  }   
]

const history = [
  {
    "role": "Software Engineer",
    "organisation": "Google",
    "startDate": "Sept, 2022",
    "endDate": "Present",
    "experiences": ["Worked on Google Maps", "Reduced load times by 50%"],
    "imageSrc": img8
  },
  {
    "role": "UI Designer",
    "organisation": "Mirosoft",
    "startDate": "Aug, 2021",
    "endDate": "Aug, 2022",
    "experiences": ["Worked on Windows 11", "Designed the control panel"],
    "imageSrc": img9
  },
  {
    "role": "SWE Intern",
    "organisation": "Netflix",
    "startDate": "Apr, 2020",
    "endDate": "Jun, 2020",
    "experiences": [
      "Worked on component library",
      "Helped create UI components"
    ],
    "imageSrc": "history/netflix.png"
  }
];

 export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skillsData.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={skill.imageSrc} alt={skill.title} />
              </div>
             
              <p>{skill.title}</p>
            </div>
          ))}
          
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={historyItem.imageSrc}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
