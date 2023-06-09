const Experience = () => {
  return (
    <section className="m-auto flex h-screen max-w-xl snap-start flex-col justify-center bg-white p-12 md:max-w-6xl md:flex-row">
      <div className="mx-auto flex justify-center md:my-auto md:w-1/2">
        <h1 className="text-2xl font-bold md:text-3xl">Experience</h1>
      </div>
      <div className="mx-auto mt-4 flex flex-col text-center md:my-auto md:w-3/5 md:text-left">
        <div className="">
          <h1 className="font-bold lg:text-2xl">
            Development Project Internship
          </h1>
          <hr className="mx-auto my-2 h-0.5 w-5/6 bg-gradient-to-r from-slate-50 via-slate-300 to-slate-50 md:mx-0 md:from-slate-300 md:via-slate-300" />
          <p className="text-sm lg:text-left lg:text-base">
            Tampere University of Applied Sciences, 05/2022 - 06/2022
          </p>
          <p className="mt-2 text-sm lg:text-left lg:text-base">
            Establishing and documenting a demonstration environment for a
            monitoring system (Prometheus + Grafana) to be utilized by teachers
            on future courses.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="font-bold lg:text-2xl">
            Onsite IT support, summer job
          </h1>
          <hr className="mx-auto my-2 h-0.5 w-5/6 bg-gradient-to-r from-slate-50 via-slate-300 to-slate-50 md:mx-0 md:from-slate-300 md:via-slate-300" />
          <p className="text-sm lg:text-left lg:text-base">
            Tietokeskus Finland Oy, 06/2018 - 10/2018
          </p>
          <p className="mt-2 text-sm lg:text-left lg:text-base">
            Responsibilities ranged from customer printer and computer
            installations to network installations, troubleshooting and repairs.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Experience;
