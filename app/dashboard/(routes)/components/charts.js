import { Sparklines, SparklinesLine } from 'react-sparklines';

const data = [3, 4, 4, 3, 4, 5, 4, 3, 4, 4, 2, 4, 5];

const Sparkchart = ({ color }) => {
  return (
    <Sparklines data={data}>
      <SparklinesLine color={color} />
    </Sparklines>
  );
};

export default Sparkchart;
