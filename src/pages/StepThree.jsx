
/* eslint-disable linebreak-style */
import React from "react";
import { Button, Input } from "../components";

export const StepThree = () => {
  // Массив данных с вариантами
  const emojiVariants = [
    { id: "variant-1", src: "./img/laugh.png", alt: "laugh", label: "Ваш ответ 1" },
    { id: "variant-2", src: "./img/hearts.png", alt: "hearts", label: "Ваш ответ 2" },
    { id: "variant-3", src: "./img/smirk.png", alt: "smirk", label: "Ваш ответ 3" },
    { id: "variant-4", src: "./img/fright.png", alt: "fright", label: "Ваш ответ 4" },
  ];

  return (
    <div className="emoji-quiz">
      <div className="question">
        <h2>3. Занимательный вопрос</h2>
        <ul className="emoji-variants">
          {/* Используем map для генерации вариантов */}
          {emojiVariants.map((variant) => (
            <li key={variant.id} className="variant-wrapper">
              <Input InputType="radio" InputName="variant" InputID={variant.id} />
              <label htmlFor={variant.id}>
                <img src={variant.src} alt={variant.alt} />
                <p>{variant.label}</p>
              </label>
            </li>
          ))}
        </ul>
        <Button BtnType="button" disabled BtnId="next-btn" text="Далее" />
      </div>
    </div>
  );
};
