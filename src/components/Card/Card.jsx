import likeSvg from './assets/like.svg'

export const Card = ({ title, subtitle, to, id }) => {
  console.log(likeSvg);
  return (
    <article>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <strong>id: { id }</strong>
      <a target="_blank" rel='noreferrer' title={to} href={to}>Show more...</a>
    </article>
  );
};
