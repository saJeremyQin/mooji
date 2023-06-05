import Button from 'components/atoms/Button'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import SelectGroup from 'components/molecules/FormGroup/SelectGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React,{ ChangeEvent, useState } from 'react'
import { db } from '../firebase/firebaseConfig'
import { push, ref } from "firebase/database"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateArgCount } from '@firebase/util'

const Quote = () => {
  const [name, setName] =  useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [comsize, setComsize] = useState('small');
  const [problem, setProblem] = useState('');
  const quotesRef = ref(db, "quotes");


  const isEmailValid = () => {
    // Basic email validation check using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('comsieze is', comsize);
    

    // check if it is empty
    if(!name || !email || !company || !problem ) {
      toast.warning("Please fill the form correctly!");
      return ;
    }
    // validate email format with Regular expression
    if(!isEmailValid()) {
      toast.error("Please provide a valid email!");
      return ;
    }

    push(quotesRef,{
      name,
      email,
      company,
      comsize
    }).then(()=>{
      toast.success("Message sent successfully");

      setName('');
      setEmail('');
      setCompany('');
      setComsize('small');
      setProblem('');

    }).catch((error) => {
      console.error("Error pushing data:", error);

    })

  }
  
  return (
    <>
       <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="dark"
      />
      <PageTemplate title='Send Quote - Mooji'>
        <section className="grid grid-cols-1 place-items-center gap-5 lg:grid-cols-2">
          <aside className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 place-items-center gap-12 lg:w-full lg:place-items-start" data-aos="fade-down-right">
            <div className="text-center lg:text-left">
              <PageSentence
                title="Tell us about your problem and how we can help"
                description="We are happy to help you, tell us what is the problem with your company, and we are ready to answer these problems. It usually takes a few minutes for us to respond."
                badge="SEND QUOTE"
              />
            </div>
            <div className="w-fit">
              <ButtonLink
                value="Ask Us"
                href="/faq"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end" data-aos="fade-up-left">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Name" onChange={(e) => setName(e.target.value)} value={name}/>
                <InputGroup label="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Company" onChange={(e) => setCompany(e.target.value)} value={company}/>
                <SelectGroup
                  label="Company Size"
                  // onChange={(e) => setComsize(e.target.value) value={comsize}}
                  onChange={(e) => setComsize((e.target as HTMLSelectElement).value)}
                  value={comsize}
                  options={[
                    { label: 'Small', value: 'small' },
                    { label: 'Medium', value: 'medium' },
                    { label: 'Large', value: 'large' },
                  ]}
                />
              </div>
              <TextAreaGroup label="Tell Us Your Problem" value={problem}  onChange={(e) => setProblem(e.target.value)} />
              <Button value="Send Quote" />
            </form>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Quote
