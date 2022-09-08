type UserContacts = {
  id: number;
  name: string;
  phone: string;
};

export type User = {
  id: number;
  login: string;
  password: string;
  contacts: UserContacts[];
};
