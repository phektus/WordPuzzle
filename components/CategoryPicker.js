import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('random');
  const [items, setItems] = useState([
    {label: '- Random -', value: 'random'},
    {label: 'Cities', value: 'cities'},
    {label: 'Foods', value: 'foods'},
    {label: 'Animals', value: 'animals'}
  ]);

  return (
    <>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        multiple={false}
        mode="BADGE"
        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
      />
    </>
  );
}