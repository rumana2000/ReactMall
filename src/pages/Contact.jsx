import ContactInput from "../component/ContactInput"
export default function Contact() {
  return (
    <>
      <div className="container py-16">
        <div className="flex justify-between items-center gap-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49930072084!2d90.25487202161692!3d23.781067239839608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1698331589034!5m2!1sen!2sbd" width="800" height="650"></iframe>
          <div className="w-10/12">
            <h2 className="text-gray-700 font-bold flex items-center justify-center text-3xl mb-3">Contact Us</h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis
            delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id
            consequatur atque doloremque!
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt
            dicta veniam aspernatur quam mollitia.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis
            delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id
            consequatur atque doloremque!
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt
            dicta veniam aspernatur quam mollitia.
            <div className="flex items-center gap-6 py-3">
              <ContactInput type="text" className="border border-primary rounded flex items-center justify-center focus:ring-0 focus:border-primary" placeholder="Enter Your E-mail" />
              <div className="py-4">
                <a href="" className="border border-primary bg-primary text-sm text-white py-3 px-3 rounded">Contact Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}