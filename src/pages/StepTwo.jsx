


import React from "react";
import { Button, Input } from "../components";

export const StepTwo = () => {
  // Массив с вариантами ответа
  const variants = [
    { id: "variant-1", label: "Ваш ответ 1" },
    { id: "variant-2", label: "Ваш ответ 2" },
    { id: "variant-3", label: "Ваш ответ 3" },
    { id: "variant-4", label: "Ваш ответ 4" },
  ];

  return (
    <div className="variants-quiz">
      <div className="question">
        <h2>1. Занимательный вопрос</h2>
        <ul className="variants">
          {variants.map((variant) => (
            <li key={variant.id} className="variant-wrapper">
              <Input
                InputType="radio"
                InputName="variant"
                InputID={variant.id}
              />
              <label htmlFor={variant.id}>{variant.label}</label>
            </li>
          ))}
        </ul>
        <Button BtnType="button" disabled BtnId="next-btn" text="Далее" />
      </div>
    </div>
  );
};


