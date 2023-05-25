import React from "react";

type Props = {
  texts: string[];
};

export const NumberCard = ({ texts }: Props) => {
  return (
    <div className="flex gap-1">
      {texts.map((text, index) => (
        <React.Fragment key={index}>
          {text.split("").map((t) => (
            <p className="h-8 w-5 bg-blue-950 text-sm text-white flex justify-center items-center rounded font-semibold">
              {t}
            </p>
          ))}
          {texts.length > index + 1 && <p>:</p>}
        </React.Fragment>
      ))}
    </div>
  );
};
