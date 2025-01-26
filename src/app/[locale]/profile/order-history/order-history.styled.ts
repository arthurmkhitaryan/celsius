import styled from 'styled-components';

export const DateSelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const DateSelect = styled.select`
  width: 100%;
  padding: 16px;
  padding-right: 50px;
  border-radius: 4px;
  font-size: 20px;
  background-color: #f2f6fd;
  color: #1c1c1c;
  appearance: none;

  &:focus {
    border-color: #ccc;
    outline: none;
  }
`;

export const SelectIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 12px;
  color: #000;

  &::after {
    content: '▼';
    font-size: 16px;
  }
`;

export const OrderHistory = styled.div`
  flex: 0 0 75%;
  max-width: 75%;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const OrderTitle = styled.h3`
  font-size: 22px;
  padding-bottom: 10px;
  margin-bottom: 60px;
  border-bottom: 1px solid #f2f6fd;
  font-weight: 400;
  color: #1c1c1c;
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`;

export const FilterLabel = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
  color: #1c1c1c;
  line-height: 30px;
`;

export const ClearButton = styled.button`
  background-color: transparent;
  color: #0d2427;
  padding: 16px 32px 16px 32px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 20px;
  border: none;
  font-size: 20px;
`;

export const SearchButton = styled.button`
  background-color: #0044cc;
  color: #fff;
  padding: 16px 32px 16px 32px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const OrderTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-height: 100px;
`;

export const DatePickerStyles = `
  .custom-date-picker {
    width: 100%;
    padding: 16px;
    border-radius: 4px;
    font-size: 20px;
    background-color: #f2f6fd;
    color: #1c1c1c;
    border: 1px solid #ccc;
  }

  .react-datepicker__input-container {
    font-size: 18px;
  }

  .custom-date-picker:focus {
    border-color: #0044cc;
    outline: none;
  }
`;

export const TableHeader = styled.th`
  font-size: 18px;
  color: #1c1c1c;
  background-color: #f2f6fd;
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-weight: 400;
`;

export const TableCell = styled.td`
  padding: 12px;
`;

export const OrderImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  background: #f2f6fd;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
`;
