import styled from "styled-components";
/*
    ===============================
            Drop Styles
    ===============================
*/

export const ContactSection = styled.div`
  margin-top: 30px;
  padding: 50px 0;
  text-align: center;
`;

export const ContactTitle = styled.h2`
  font-size: 60px;
  margin-bottom: 30px;
  @media (max-width: 575px) {
    font-size: 40px;
  }
`;

export const TitelSpan = styled.span`
  font-weight: normal;
`;

export const Contactform = styled.form`
  width: 70%;
  margin: auto;
  @media (max-width: 575px) {
    width: 90%;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  outline: 0;
  padding: 5px;
  margin-bottom: 10px;
  @media (max-width: 575px) {
    width: 100%;
  }
`;

export const FormInput = styled.div`
  overflow: hidden;
`;

export const TextInput = styled(Input)`
  float: left;
  width: 49%;
`;

export const EmailInput = styled(Input)`
  float: right;
  width: 49%;
`;

export const SubmitContact = styled(Input)`
  width: 100%;
`;

export const TextareaContact = styled.textarea`
  width: 100%;
  outline: 0;
  background: #ccc;
`;
export const InputContact = styled(Input)`
  width: 60%;
  background: #fff;
  border: 1px solid #ccc;
  color: #888;
  cursor: pointer;
`;
