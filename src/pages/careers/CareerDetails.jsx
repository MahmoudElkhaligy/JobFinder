import { useLoaderData } from "react-router-dom";

const CareerDetails = () => {
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem maxime incidunt ipsum dolor? Iusto excepturi, sit
          assumenda veniam aliquid accusantium nostrum ipsa perferendis debitis
          dolorem sint, amet iure fuga atque!
        </p>
      </div>
    </div>
  );
};

//loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:3000/careers/${id}`);

    if(!res.ok){
        throw Error('Could not find that career')
    }


  return res.json();
};

export default CareerDetails;
