
import { Button, Input } from "../components";

export const StepFour = () => {
  // Массив данных с вариантами
  const levelVariants = [
    { id: "variant-1", label: "1" },
    { id: "variant-2", label: "2" },
    { id: "variant-3", label: "3" },
    { id: "variant-4", label: "4" },
    { id: "variant-5", label: "5" },
  ];

  return (
    <div className="emoji-quiz">
      <div className="question">
        <h2>4. Занимательный вопрос</h2>
        <ul className="level-variants">
          {/* Генерация вариантов с использованием map */}
          {levelVariants.map((variant) => (
            <li key={variant.id} className="variant-wrapper">
              <Input InputType="radio" InputName="variant" InputID={variant.id} />
              <label htmlFor={variant.id}>{variant.label}</label>
            </li>
          ))}
        </ul>
        <Button BtnType="button" disabled BtnId="next-btn" text="Далее" />
      </div>
    </div>
  );
};

