import css from "Components/Statistics/Statistics.module.css"
const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && 
        <h2 className={css.title}>{title}</h2>
      }

      <ul className={css['stat-list']}>
        {stats.map((stat) => {
          return (
            <li key={stat.id} className={css.item}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage} %</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
