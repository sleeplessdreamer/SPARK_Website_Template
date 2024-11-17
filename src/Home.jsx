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
        SPARK is
        a game (TBD).
      </p>
      <h2 className="title">Our Mission</h2>
      <p>
        Our mission was to game. (TBD)
      </p>
    </div>
    <div className="container">
      <h2 className="title">Contributers</h2>
      <div className="contributers">
        <div className="contributer">
          <img className="contributer" src="/img/contributers/chrise.png" />
          <p>Christopher Engelbart</p>
        </div>
        <div className="contributer">
          <img className="contributer" src="/img/contributers/ariellal.png" />
          <p>Ariella Litvin</p>
        </div>
        <div className="contributer">
          <img className="contributer" src="/img/contributers/nerissal.png" />
          <p>Nerissa Lundquist</p>
        </div>
        <div className="contributer">
          <img className="contributer" src="/img/contributers/stephenp.png" />
          <p>Stephen Pachucki</p>
        </div>
        <div className="contributer">
          <img className="contributer" src="/img/contributers/daniellaq.png" />
          <p>Daniella Qira</p>
        </div>
        <div className="contributer">
          <img className="contributer" src="/img/contributers/davidh.jpg" />
          <p>David Van Hise</p>
        </div>
      </div>
    </div>
  </>);
}
