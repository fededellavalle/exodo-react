import "../styles/Banner.css";

export function Banner() {
  return (
    <section className="banner">
      <div className="banner-overlay" />

      <div className="banner-content">
        <img
          src="/images/logo-exodo2.png"
          alt="Éxodo Club Nocturno"
          className="banner-logo"
        />

        <h1 className="banner-title">#sabemosdenoche</h1>

        <div className="banner-socials">
          <SocialLink
            href="https://www.facebook.com/profile.php?id=100094000429780"
            icon="facebook"
          />
          <SocialLink
            href="https://www.instagram.com/exodo_club_/"
            icon="instagram"
          />
          <SocialLink href="https://x.com/exodo_club_" icon="twitter-x" />
          <SocialLink
            href="https://www.tiktok.com/@exodoclubnocturno"
            icon="tiktok"
          />
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <i className={`bi bi-${icon}`} />
    </a>
  );
}
