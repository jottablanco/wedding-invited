import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SelectedMenuCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Notes" source="notes" />
        <TextInput label="Option1" source="option1" />
        <TextInput label="Option2" source="option2" />
      </SimpleForm>
    </Create>
  );
};
