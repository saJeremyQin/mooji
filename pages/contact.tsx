import Button from 'components/atoms/Button'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import IconListItem from 'components/molecules/IconListItem'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React,{ useState, ChangeEvent} from 'react'
import { FiMail, FiPhoneCall } from 'react-icons/fi'
import { database } from '../firebase/firebaseConfig'
import { getDatabase, push, ref } from "firebase/database";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject,setSubject] = useState('');
  const [message, setMessage] = useState('');
  const messagesRef = ref(database, "messages");



  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("handle submit");   
    console.log('name,', name);
    console.log('email,', email);
    console.log('subject,', subject);
    console.log('message,', message);
    
    push(messagesRef, {
      name,
      email,
      subject,
      message,
    }).
      then(() => {
        console.log("Message sent successfully");
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }
    ).catch((error) => {
      console.error("Error pushing data:", error);
      // Additional code to handle the error case
    });
    
  }
  return (
    <>
      <PageTemplate title='Contact - Mooji'>
        <section className="grid grid-cols-1 place-items-center gap-10 lg:gap-5 lg:grid-cols-2">
          <aside className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 gap-12 sm:place-items-center lg:w-full lg:place-items-start" data-aos="fade-up-right">
            <div className="sm:text-center lg:text-left">
              <PageSentence
                title="We love receiving messages from you, we are waiting for it."
                badge="CONTACT"
              />
            </div>
            <div className="space-y-6">
              <IconListItem
                label="Phone"
                value="+61 451 561 068"
                icon={<FiPhoneCall />}
              />
              <IconListItem
                label="Email"
                value="mooji.dev@gmail.com"
                icon={<FiMail />}
              />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end" data-aos="fade-down-left">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Name" onChange={(e) => setName(e.target.value)} value={name} />
                <InputGroup label="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
              </div>
              <InputGroup label="Subject" onChange={(e) => setSubject(e.target.value)} value={subject}/>
              <TextAreaGroup label="Message" onChange={(e) => setMessage(e.target.value)} value={message}/>
              <Button value="Send Message" />
            </form>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Contact
