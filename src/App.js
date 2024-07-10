// MODULE
import Person from "./Person";

const App = () => {
  const johnSkills = ["JS", "React", "Node"];
  const peterSkills = ["Testing", "Automation", "QA"];
  return(
    <>
      <header>header</header>
      <section>
        <Person 
          name="John Doe" 
          job="Developer" 
          avatar="https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Kurt&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=BlazerSweater&eyeType=EyeRoll&eyebrowType=UpDownNatural&mouthType=Twinkle&skinColor=Pale"
          skills={johnSkills}
        />
        <Person 
          name="Peter Smith" 
          job="Tester" 
          avatar="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Prescription02&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Black&clotheType=ShirtVNeck&clotheColor=Red&eyeType=Wink&eyebrowType=FlatNatural&mouthType=ScreamOpen&skinColor=Light"
          skills={peterSkills}
        />
      
      {/* HW1: display the person skills
        List -> ul+li
        skills -> [---]     ++
      */}
      </section>
      <footer>footer</footer>
    
    </>
  )
}




export default App;
