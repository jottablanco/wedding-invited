import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SelectedMenuEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Notes" source="notes" />
        <TextInput label="Option1" source="option1" />
        <TextInput label="Option2" source="option2" />
      </SimpleForm>
    </Edit>
  );
};
