import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import React from 'react';
type IAccordinCheckBoxProps = {
  data: string[];
  title: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  setValue: (value: string) => void;
};
const AccordinCheckBox: React.FC<IAccordinCheckBoxProps> = ({
  data,
  title,
  value,
  setValue,
}) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          {' '}
          <h3 className="font-bold mb-2">{title} </h3>
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-2 gap-y-4">
            {data.map((type: string) => (
              <div
                onClick={() => setValue(type)}
                key={type}
                className="flex items-center space-x-2"
              >
                <Checkbox id={type} name={type} checked={value === type} />
                <Label htmlFor={type}>{type}</Label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordinCheckBox;
