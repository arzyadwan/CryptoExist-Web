import { Tooltip } from './Tooltip';

type TooltipMap = {
  [key: string]: string;
};

type TextWithTooltipProps = {
  text: string;
  keywords: TooltipMap;
};

export const TextWithTooltip = ({ text, keywords }: TextWithTooltipProps) => {
  if (!text) return null;

  const regex = new RegExp(`(${Object.keys(keywords).join('|')})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        const lowerCasePart = part.toLowerCase();
        if (keywords[lowerCasePart]) {
          return (
            <Tooltip key={index} content={keywords[lowerCasePart]}>
              <span className="text-accent border-b border-accent border-dashed cursor-help">
                {part}
              </span>
            </Tooltip>
          );
        }
        return part;
      })}
    </>
  );
};