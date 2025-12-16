export function SocialICons({ social }) {
  return (
    <a href={social.link} target="_blank">
      <i className={`bi ${social.icon}`}></i>
    </a>
  );
}
