export default function Home() {
  return (<>
    <div className="container">
      <h1 className="center site-title">Refactoria</h1>
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
      Refactoria is a video game that teaches undergraduate and graduate computer science students the concept of code refactoring, or the restructuring of source code to improve speed, maintainability, and readability. The game uses a series of puzzles to give students hands-on experience with a variety of common "code smells" (problems that indicate deeper problems with code).

      </p>

      <h2 className="title"> Storyline </h2>
      <p> 
      Players play as an expert chef with their sidekick Watson the Whiskbot to refactor Watson's instructions into efficient, readable, and easily maintainable code. While making fun recipes like a fried egg burger, tomato soup, and chicken nuggets, players learn better coding etiquette!
      
      </p>
      <h2 className="title">Our Mission</h2>
      <p>
      Our mission was to create an interactive game that helps students improve their coding capabilities and practices. 
      Players cook certain recipes by refactoring the given code, presented as recipe ingredients, stations, and steps, 
      as they attempt to cook certain recipes. Each level encapsulates a different puzzle, focusing on specific refactoring practices, 
      such as removing code smells or improving algorithms for better performance. 
      </p>
      <p>
      The code will be edited through an embedded code editor. The editor will be able to offer areas of improvement or 
      refactoring suggestions. Additionally, code will be tested to ensure that the expected output is still produced.
      </p>
      <p>
      Players will be scored on how well they refactor the code under the given prompts. In order to teach refactoring concepts in a way that is accessible to any coding language, we developed our own proprietary toy language with the following features:
      <ul>  
        <li> Tokenizer & Parser </li>
        <li> Full Interpreter </li>
        <li> Java-like Syntax </li>
        <li> In-Game Playback </li>
      </ul>

      </p>
    </div>
    <div className="container">
      <h2 className="title">Contributers</h2>
      <div className="contributers">
        <div className="contributer">
          <img className="contributer" src="/img/contributers/Christopher Engelbart.jpeg" />
          <p>Christopher Engelbart</p>
        </div>
        <div className="contributer">
          <img className="contributer" src="/img/contributers/Nerissa Lundquist.jpg" />
          <p>Nerissa Lundquist</p>
        </div>
        <div className="contributer">
          <img className="contributer" src="/img/contributers/Stephen Pachucki.jpg" />
          <p>Stephen Pachucki</p>
        </div>
        <div className="contributer">
          <img className="contributer" src="/img/contributers/Dani Qira.jpeg" />
          <p>Daniella Qira</p>
        </div>
        <div className="contributer">
          <img className="contributer" src="/img/contributers/David Van Hise.jpg" />
          <p>David Van Hise</p>
        </div>
      </div>
    </div>
  </>);
}
