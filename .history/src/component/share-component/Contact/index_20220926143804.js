import React from 'react'

const index = () => {
  return (
    <>
     <section class="deneb_contact cantact_v2 section_padding"><div class="container"><div class="row"><div class="col-lg-12"><div class="section_title"><h2>Send us a message</h2><p>When unknow printer took a gallery of type and scramblted it to make a type specimen book</p></div><div class="contact_form"><form action="#"><div class="row"><div class="col-lg-6"><div class="form_group"><input name="first_name" type="text" class="form_control" placeholder="First name" required="" value=""/></div></div><div class="col-lg-6"><div class="form_group"><input name="last_name" type="text" class="form_control" placeholder="Last name" required="" value=""/></div></div><div class="col-lg-6"><div class="form_group"><input name="email_address" type="email" class="form_control" placeholder="Email" required="" value=""/></div></div><div class="col-lg-6"><div class="form_group"><input name="phone_number" type="number" class="form_control" placeholder="Phone" required="" value=""/></div></div><div class="col-lg-6"><div class="form_group"><input name="project_title" type="text" class="form_control" placeholder="Project Title" required="" value=""/></div></div><div class="col-lg-6"><div class="form_group"><select name="selected_option"><option value="">Choose Service</option><option value="design">Web &amp; Graphic Design</option><option value="development">Apps And Web Development</option><option value="marketing">SEO and marketing</option></select></div></div><div class="col-lg-12"><div class="form_group"><textarea name="user_message" class="form_control" placeholder="Your Message" required=""/></textarea></div></div></div><div class="col-lg-12"><div class="button_box"><button class="deneb_btn">Submit Now</button></div></div></form></div></div></div></div></section>
    </>
  )
}

export default index