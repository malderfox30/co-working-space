import { RangeValue } from 'rc-picker/es/interface';
import { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { DatePicker, Picker } from '@base-projects/web-uikit';
import { ReportType } from '#/generated/schemas';
import { getDefaultRangeDate } from '#/shared/utils/date';

interface Props {
  picker: string;
  value: RangeValue<Dayjs>;
  onChange: (rangeDate: RangeValue<Dayjs>) => void;
  groupBy: ReportType;
}

const formatter = (picker: string) => {
  if (picker === 'month') {
    return 'MM/YYYY';
  }
  if (picker === 'date') {
    return 'MM/DD/YYYY';
  }
  if (picker === 'time') {
    return 'MM/DD H[h]';
  }
  return undefined;
};

function RangePicker({ picker, value, onChange, groupBy }: Props) {
  const [isDefault, setIsDefault] = useState(true);

  const onRangePickerChange = (rangeDate: RangeValue<Dayjs>) => {
    setIsDefault(false);
    onChange(rangeDate);
  };

  const onPickerChange = (date: Dayjs | null) => {
    setIsDefault(false);
    onChange([date, date]);
  };

  useEffect(() => {
    if (isDefault) {
      onChange(getDefaultRangeDate(groupBy) as RangeValue<Dayjs>);
    }
  }, [groupBy]);

  return (
    <>
      {groupBy == ReportType.Hour ? (
        <DatePicker
          picker="date"
          value={value?.[0]}
          onChange={onPickerChange}
          allowClear={false}
          format="MM/DD/YYYY"
        />
      ) : (
        <DatePicker.RangePicker
          className="w-full"
          allowClear={false}
          value={value}
          onChange={onRangePickerChange}
          picker={picker as Picker}
          format={formatter(picker)}
        />
      )}
    </>
  );
}

export default RangePicker;
