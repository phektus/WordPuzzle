import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default ({ categories, setCategory }) => {      
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('random');
    const loadCategories = (_categories) => {
        let _items = [{
            label: '- Random -',
            value: 'random'
        }];
        Object.keys(_categories).map((key) => {
            _items.push({
                'label': categories[key].label,
                'value': key,
            });
        });
        return _items;
    } 
    const [items, setItems] = useState(loadCategories(categories));

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
                onSelectItem={(item) => {
                    setCategory(item.value);
                }}
            />
        </>
    );
}