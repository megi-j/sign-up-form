import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export default function FormBox() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log(data);
  };
  console.log(errors);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="First Name"
        {...register("firstName", { required: true })}
      />
      {errors.firstName && <p>First Name cannot be empty</p>}
      <Input
        type="text"
        placeholder="Last Name"
        {...register("lastName", { required: true })}
      />
      {errors.lastName && <p>Last Name cannot be empty</p>}
      <Input
        type="email"
        placeholder="Email Address"
        {...register("email", {
          required: true,
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Looks like this is not an email",
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <Input
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      {errors.password && <p>Password cannot be empty</p>}
      <Button type="submit">CLAIM YOUR FREE TRIAL</Button>
      <Agreement>
        By clicking the button, you are agreeing to our{" "}
        <Terms>Terms and Services</Terms>{" "}
      </Agreement>
    </Form>
  );
}

const Form = styled.form`
  width: 100%;
  height: 474px;
  background: #ffffff;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  align-content: space-between;
`;
const Input = styled.input`
  width: 100%;
  height: 56px;
  background: #ffffff;
  border: 1px solid #dedede;
  border-radius: 5px;
  padding: 15px 32px;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 0.25px;
  opacity: 0.75;
  color: #3d3b48;
  &:focus {
    outline: none;
    border: 1px solid #5e54a4;
  }
`;
const Button = styled.button`
  width: 100%;
  height: 56px;
  background: #38cc8b;
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
  border-radius: 5px;
  font-family: "Poppins";
  border: none;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 1px;
  color: #ffffff;
  &:hover {
    background: #77e2b3;
    cursor: pointer;
  }
`;
const Agreement = styled.p`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 11px;
  line-height: 26px;
  color: #bab7d4;
`;
const Terms = styled.span`
  color: #ff7979;
`;
