import "../styles/MainSection.css";

export function MainSection() {
  return (
    <section className="main">
      <div className="main-grid">
        {/* Video */}
        <div className="main-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/vertical-izquierda.jpg"
          >
            <source src="/videos/vertical-izquierda.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Texto */}
        <div className="main-content">
          <h2>Éxodo no es un boliche</h2>

          <p className="main-description">
            Es el lugar donde la noche cobra vida. Música que pega, energía que
            contagia y una comunidad que sabe cómo vivirla.
          </p>

          <div className="pillars">
            <div>
              <span>🎧</span>
              <p>Música que pega</p>
            </div>
            <div>
              <span>🔥</span>
              <p>Energía real</p>
            </div>
            <div>
              <span>🖤</span>
              <p>Gente correcta</p>
            </div>
            <div>
              <span>🌙</span>
              <p>Noches largas</p>
            </div>
          </div>

          <p className="hashtag">#creadoresdebuenosmomentos</p>
        </div>
      </div>
    </section>
  );
}
