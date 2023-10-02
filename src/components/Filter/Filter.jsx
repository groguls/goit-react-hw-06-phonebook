import { Label } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/actions';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    dispatch(filterChange(evt.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        placeholder="Enter contact name"
        value={filter}
        onChange={handleFilterChange}
      />
    </Label>
  );
};
