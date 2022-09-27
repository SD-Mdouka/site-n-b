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
import Contact from "../share-component/Contact";
import MyAbout from "../share-component/About/MyAbout";

const ContactPage = () => {
  return (
    <Layout>
      {/* <Container>
        <ContactSection>
          <ContactTitle>
            <TitelSpan>Send us a message </TitelSpan>When unknow printer took a
            gallery of type and scramblted it to make a type specimen book
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
        </ContactSection>
      </Container> */}
      <MyAbout />
      <Contact />
    </Layout>
  );
};

export default ContactPage;
