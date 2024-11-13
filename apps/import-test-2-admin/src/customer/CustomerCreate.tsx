import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";
import { SomeThingTitle } from "../someThing/SomeThingTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="customerType"
          label="Customer Type"
          choices={[
            { label: "INDIVIDUAL", value: "INDIVIDUAL" },
            { label: "COMPANY", value: "COMPANY" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Email" source="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput source="orders" reference="Order">
          <SelectArrayInput
            optionText={OrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Phone" source="phone" />
        <ReferenceInput
          source="someThing.id"
          reference="SomeThing"
          label="Some Thing"
        >
          <SelectInput optionText={SomeThingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
