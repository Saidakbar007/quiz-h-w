export const Progress = ({ steps, activeStep }) => {
  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">Прогресс прохождения:</span>
        <span className="indicator__value">
          {/* TODO: Вынести наверх */}
          {(100 / steps) * (activeStep - 1)}%
        </span>
      </div>
      <div className="indicator__progressbar">
        {Array(steps)
          .fill("0")
          .map((_, index) => (
            // TODO: Реализовать через classnames библиотеки
            <div
              className={
                `indicator__unit indicator__unit-${index + 1} ` +
                (index < activeStep ? "_active" : "")
              }
            />
            // TODO: Активный шаг закрашивать другим цветом
            // TODO: Поправить стили на всех страницах
            // TODO: Сделать везде шрифты одинаковыми как на 1 странице
            // TODO: Передать key в компоненты которые возвращаются из map
          ))}
      </div>
    </div>
  );
};
