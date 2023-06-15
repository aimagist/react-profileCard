import "./styles.css";

const skills = [
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#fccb42"
  },
  {
    skill: "Wordpress",
    level: "intermediate",
    color: "#87CEFA"
  },
  {
    skill: "C#",
    level: "beginner",
    color: "#ae60fc"
  },
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#FF8C00"
  },
  {
    skill: "React",
    level: "beginner",
    color: "#00d6f2"
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "#0aad1b"
  },
  {
    skill: "PHP",
    level: "beginner",
    color: "#FF00FF"
  }
];

export default function App() {
  return (
    <body>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </body>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://media.licdn.com/dms/image/C4E03AQEJdb9Mf-38tA/profile-displayphoto-shrink_800_800/0/1636555489672?e=1692230400&v=beta&t=zr4sdxyUlCje2NOQSaCthCH675totYTZKHOzS-ACn7c"
      alt="federico michel"
    ></img>
  );
}

function Intro() {
  const name = "Federico Michel";
  const data = "Front End developer especializado en tecnologías Front-End.";
  return (
    <div>
      <h1>{name}</h1>
      <p>{data}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skillName={skill.skill}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </div>
  );
}

function Skill({ color, skillName, level }) {
  const style = { backgroundColor: color };
  return (
    <div className="skill" style={style}>
      <span>{skillName}</span>
      <span>
        {level === "beginner" && "🐣"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
