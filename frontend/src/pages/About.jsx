import ng from "/assets/NG.png";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-4xl font font-semibold text-center">
            About Nico
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-2">
            <div className="flex items-center justify-center p-4">
              <img
                src={ng}
                alt="/"
                height={"250px"}
                width={"250px"}
                className="shadow-gray-400 rounded-md p-4"
              />
            </div>
            <p>
              <span className="font-bold">Hey there! I&#39;m Nico!</span>{" "}
              I&#39;m a QA and software engineer with a proven track record in
              ensuring software quality through a blend of manual testing and
              automation. I approach testing and development with a holistic
              perspective, striving for seamless user experiences. My background
              includes experience in teaching, curriculum development, community
              engagement, and program management. I&#39;m passionate about
              fostering community and cultivating a culture of continuous
              learning and innovation. I love to connect, so please reach out if
              you have questions, ideas, or just want to chat!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
