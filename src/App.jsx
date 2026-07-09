import { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import StudentInfo from "./components/StudentInfo";
import SubjectForm from "./components/SubjectForm";
import Result from "./components/Result";
import Footer from "./components/Footer";

function App() {

  const [firstSemester, setFirstSemester] = useState(false);

  const [previousCGPA, setPreviousCGPA] = useState("");

  const [previousCredits, setPreviousCredits] = useState("");

  const [subjects, setSubjects] = useState([

    {

      id: 1,

      name: "",

      credit: 3,

      marks: ""

    }

  ]);

  return (

    <div className="container">

      <Header />

      <StudentInfo

        firstSemester={firstSemester}

        setFirstSemester={setFirstSemester}

        previousCGPA={previousCGPA}

        setPreviousCGPA={setPreviousCGPA}

        previousCredits={previousCredits}

        setPreviousCredits={setPreviousCredits}

      />

      <SubjectForm

        subjects={subjects}

        setSubjects={setSubjects}

      />

      <Result

        subjects={subjects}

        previousCGPA={previousCGPA}

        previousCredits={previousCredits}

        firstSemester={firstSemester}

      />

      <Footer />

    </div>

  );

}

export default App;