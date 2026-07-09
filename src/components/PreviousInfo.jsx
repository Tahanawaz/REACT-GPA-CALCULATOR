function PreviousInfo({

previousCGPA,

previousCredits,

setPreviousCGPA,

setPreviousCredits

}) {

    return (

        <div className="card">

            <input

                type="number"

                placeholder="Previous CGPA"

                value={previousCGPA}

                onChange={(e)=>

                    setPreviousCGPA(e.target.value)

                }

            />

            <input

                type="number"

                placeholder="Previous Total Credit Hours"

                value={previousCredits}

                onChange={(e)=>

                    setPreviousCredits(e.target.value)

                }

            />

        </div>

    );

}

export default PreviousInfo;