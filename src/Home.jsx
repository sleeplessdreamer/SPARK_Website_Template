export default function Home() {
  return (<>
    <div className="container">
      <h1 className="center site-title">Refactor Game</h1>
      <p className="subtitle center">
        Fall 2024 &rarr; Spring 2025
      </p>
      <div className="ghbtns">
        <a className="download-btn" href="https://github.com/sleeplessdreamer/SPARK-Website-Template/releases/latest" target="_blank" rel="noreferrer">Download</a>
        <iframe src="https://ghbtns.com/github-btn.html?user=sleeplessdreamer&repo=SPARK-Website-Template&type=star&count=true&size=large" width="140" height="30" title="GitHub"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=sleeplessdreamer&repo=SPARK-Website-Template&type=fork&count=true&size=large" width="140" height="30" title="GitHub"></iframe>
      </div>
      <h2 className="title">About</h2>
      <p>
      RefactorMaze is a game that focuses on teaching refactoring principles, aimed at college students.
      </p>
      <h2 className="title">Our Mission</h2>
      <p>
      Our mission was to create an interactive game that helps students improve their coding capabilities and practices. 
      Players make their way through different mazes by refactoring the given code, presented as maze mechanisms, 
      as they attempt to escape. Each level encapsulates a different puzzle, focusing on specific refactoring practices, 
      such as removing code smells or improving algorithms for better performance. 
      </p>
      <p>
      The code will be edited through an embedded code editor. The editor will be able to offer areas of improvement or 
      refactoring suggestions. Additionally, code will be tested to ensure that the expected output is still produced.
      </p>
      <p>
      Players will be scored on how well they refactor the code under the given prompts. A leaderboard will be offered 
      for players to monitor their progress and see where they stand against other players, encouraging competition. 
      Furthermore, badges and achievements will be offered based on game progress and special accomplishments. 
      </p>
    </div>
    <div className="container">
      <h2 className="title">Contributers</h2>
      <div className="contributers">
        <div className="contributer">
          <img className="contributer" src="..\public\img\contributers\Christopher Engelbart.jpeg" />
          <p>Christopher Engelbart</p>
        </div>
        <div className="contributer">
          <img className="contributer" src="..\public\img\contributers\Ariela Litvin.jpg" />
          <p>Ariella Litvin</p>
        </div>
        <div className="contributer">
          <img className="contributer" src="..\public\img\contributers\Nerissa Lundquist.jpg" />
          <p>Nerissa Lundquist</p>
        </div>
        <div className="contributer">
          <img className="contributer" src="..\public\img\contributers\Stephen Pachucki.jpg" />
          <p>Stephen Pachucki</p>
        </div>
        <div className="contributer">
          <img className="contributer" src="..\public\img\contributers\Dani Qira.jpeg" />
          <p>Daniella Qira</p>
        </div>
        <div className="contributer">
          <img className="contributer" src="..\public\img\contributers\David Van Hise.jpg" />
          <p>David Van Hise</p>
        </div>
      </div>
    </div>
  </>);
}
