function SubjectForm({ subjects, setSubjects }) {

  const handleChange = (id, field, value) => {

    setSubjects(

      subjects.map(subject =>

        subject.id === id

          ? { ...subject, [field]: value }

          : subject

      )

    );

  };

  const addSubject = () => {

    setSubjects([

      ...subjects,

      {

        id: Date.now(),

        name: "",

        credit: 3,

        marks: ""

      }

    ]);

  };

  const removeSubject = (id) => {

    if (subjects.length === 1) return;

    setSubjects(

      subjects.filter(subject => subject.id !== id)

    );

  };

  return (

    <>

      {subjects.map((subject, index) => (

        <div className="subject-card" key={subject.id}>

          <div className="form-group">

            <label>

              Subject {index + 1}

            </label>

            <input

              type="text"

              placeholder="Enter Subject Name"

              value={subject.name}

              onChange={(e) =>

                handleChange(

                  subject.id,

                  "name",

                  e.target.value

                )

              }

            />

          </div>

          <div className="form-group">

            <label>

              Credit Hours

            </label>

            <input

              type="number"

              min="1"

              max="6"

              value={subject.credit}

              onChange={(e) =>

                handleChange(

                  subject.id,

                  "credit",

                  e.target.value

                )

              }

            />

          </div>

          <div className="form-group">

            <label>

              Marks (%)

            </label>

            <input

              type="number"

              min="0"

              max="100"

              value={subject.marks}

              onChange={(e) =>

                handleChange(

                  subject.id,

                  "marks",

                  e.target.value

                )

              }

            />

          </div>

          <button

            className="remove-btn"

            onClick={() => removeSubject(subject.id)}

          >

            Remove

          </button>

        </div>

      ))}

      <button

        className="add-btn"

        onClick={addSubject}

      >

        + Add Another Subject

      </button>

    </>

  );

}

export default SubjectForm;