/* eslint-disable @typescript-eslint/no-explicit-any */
import Combobox from '@/components/ui/combobox';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Search } from 'lucide-react';
import AccordinCheckBox from './accordinCheckBox';

const vehicleColor = ['Red', 'Blue'];
const carBrands = [
  {
    value: 'Toyota',
    label: 'Toyota',
  },

  {
    value: 'Audi',
    label: 'Audi',
  },

  // {
  //   value: 'BMW',
  //   label: 'BMW',
  // },

  {
    value: 'Nissan',
    label: 'Nissan',
  },
  // {
  //   value: 'Mercedes',
  //   label: 'Mercedes',
  // },
];

const carTypes = ['M', 'L', 'XL', 'XXL'];
const fuelTypes = ['CNG', 'LPG', 'Petrol', 'Diesel'];

const Filter = ({
  setSearchValue,
  setColor,
  setBrand,
  setCarType,
  setFuelType,
  color,
  brand,
  carType,
  fuelType,
}: any) => {
  return (
    <>
      <div className=" filter-side flex flex-col  gap-4 border-r pr-2">
        <h3 className="text-xl font-bold uppercase text-secondary">
          Filter By:
        </h3>
        <div className="relative my-4">
          <Search className="absolute top-0 bottom-0 my-auto text-gray-500 left-3" />
          <Input
            onChange={e => setSearchValue(e.target.value)}
            type="text"
            placeholder="Search"
            className=" pr-4"
          />
        </div>

        <div className="pb-2">
          <h3 className="font-bold mb-2">Vehicle Color </h3>
          <div className="flex gap-2 flex-wrap justify-between">
            {vehicleColor.map(option => (
              <div
                onClick={() => setColor(option)}
                className={`flex text-secondary flex-1 border-2 justify-center border-primary px-2 py-1 rounded  font-bold text-sm cursor-pointer ${color === option ? 'bg-primary ' : 'text-gray-700'}`}
                key={option}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div className="flex justify-between items-center pb-3">
          <p className="font-bold text-gray-800">Avaible now only</p>
          <Switch />
        </div>
        <Separator />

        <div className="my-4">
          <h3 className="font-bold mb-2">Vehicle Brand</h3>
          <Combobox data={carBrands} value={brand} setValue={setBrand} />
        </div>

        <AccordinCheckBox
          data={carTypes}
          title={'Vehicle  Type'}
          value={carType}
          setValue={setCarType}
        />

        <AccordinCheckBox
          data={fuelTypes}
          title={'Fuel Type'}
          value={fuelType}
          setValue={setFuelType}
        />
      </div>
    </>
  );
};

export default Filter;

// --------------price----------------
// const [range, setRange] = useState([0, 4000]);
// const handleRangeChange = (value: SetStateAction<number[]>) => {
//   setRange(value);
// };

// const handleFromInputChange = (e: { target: { value: string } }) => {
//   const newValue = parseInt(e.target.value);
//   setRange([newValue, range[1]]);
// };

// const handleToInputChange = (e: { target: { value: string } }) => {
//   let newValue = parseInt(e.target.value);
//   if (newValue < range[0]) {
//     newValue = range[0];
//   }
//   setRange([range[0], newValue]);
// };

{
  /* <div className=" py-4">
    <h3 className="font-bold mb-4"> Price Range / Hour</h3>
    <Slider
      defaultValue={[0, 2500]}
      max={5000}
      min={0}
      step={1}
      value={range}
      onValueChange={handleRangeChange}
      formatLabel={value => `$${value} `}
      minStepsBetweenThumbs={0}
    />
    <div className="flex justify-between gap-4 mt-2">
      <div className="relative my-4 flex items-center">
        <p className="absolute top-2 bottom-0 my-auto font-bold  text-gray-500 left-3">
          From :{' '}
        </p>
        <Input
          type="number"
          placeholder="000"
          value={range[0] ? range[0] : undefined}
          className="pl-16 pr-4"
          onChange={handleFromInputChange}
          max="5000"
        />
      </div>
      <div className="relative my-4 flex items-center">
        <p className="absolute top-2 bottom-0 my-auto font-bold  text-gray-500 left-3">
          To :{' '}
        </p>
        <Input
          type="number"
          placeholder="000"
          value={range[1] ? range[1] : undefined}
          className="pl-16 pr-4"
          onChange={handleToInputChange}
          max={4}
        />
      </div>
    </div>
  </div> */
}
{
  /* <Separator /> */
}
