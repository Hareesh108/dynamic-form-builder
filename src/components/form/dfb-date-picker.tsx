import type { TextFieldProps } from "@mui/material/TextField";
import type { Dayjs } from "dayjs";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller, useFormContext } from "react-hook-form";

// ----------------------------------------------------------------------

type Props = Omit<TextFieldProps, "name" | "value" | "onChange"> & {
  name: string;
};

export default function DFBDatePicker({ name, helperText, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <DatePicker
          value={field.value ?? null}
          onChange={(newValue: Dayjs | null) => {
            field.onChange(newValue);
          }}
          slotProps={{
            textField: {
              fullWidth: true,
              error: !!fieldState.error,
              helperText: fieldState.error?.message ?? helperText,
              ...other,
            },
          }}
        />
      )}
    />
  );
}
