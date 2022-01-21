export type UserModel = {
  auth: {
    token: string;
    refreshToken?: string;
  };
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumebr: string;
  password: string;
};

export const UsersList: UserModel[] = [
  {
    id: 1,
    auth: {
      token: "80b770db-361c-4bc8-b995-30824dc9e7e6",
    },
    email: "test@gmail.com",
    firstName: "Jack",
    lastName: "Brown",
    phoneNumebr: "+989157661267",
    password: "admin",
  },
];
