import React from "react";
import {
  InputContact,
  TextareaContact,
  SubmitContact,
  EmailInput,
  TextInput,
  FormInput,
  Contactform,
  TitelSpan,
  ContactTitle,
  ContactSection,
  Container,
} from "../Style/ContactStyle";
import { Layout } from "../share-component/Layout/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <ContactSection>
        <Container>
          <ContactTitle>
            <TitelSpan>Drop </TitelSpan>Me A line
          </ContactTitle>
          <Contactform action="">
            <FormInput>
              <TextInput type="text" placeholder="Your Name" />
              <EmailInput type="email" placeholder="Your Email" />
            </FormInput>
            <SubmitContact
              type="text"
              className="sub"
              placeholder="Your Subject"
            />
            <TextareaContact
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></TextareaContact>
            <InputContact type="submit" value="Send Message" />
          </Contactform>
        </Container>
      </ContactSection>
    </Layout>
  );
};

export default ContactPage;
