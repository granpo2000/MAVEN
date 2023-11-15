import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EmailTitle } from "../email/EmailTitle";
import { PedidoTitle } from "../pedido/PedidoTitle";

export const ClienteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="address.id" reference="Email" label="Address">
          <SelectInput optionText={EmailTitle} />
        </ReferenceInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="orders"
          reference="Pedido"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PedidoTitle} />
        </ReferenceArrayInput>
        <TextInput label="Phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
