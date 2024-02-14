import styles from './FeedbackForm.module.scss'
import Input from '../../elements/Input/Input'
import Button from '../../elements/Button/Button'
import Alert from '../../elements/Alert/Alert'
import React, { useState } from "react"
import { useIntl } from "react-intl"

export default function FeedbackForm() {
  const [formSuccess, setFormSuccess] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    message: '',
    was_sent: false
  });

  const intl = useIntl();

  const ff_message = intl.formatMessage({ id: "ff_message" });
  const send_button = intl.formatMessage({ id: "send_button" });
  const ff_disclaimer_1 = intl.formatMessage({ id: "ff_disclaimer_1" });
  const ff_error = intl.formatMessage({ id: "ff_error" });
  const ff_success = intl.formatMessage({ id: "ff_success" });

  //Для обновления состояния инпутов
  const handleInput = (e) => {
      const fieldName = e.target.name;
      const fieldValue = e.target.value;
      
      setFormData((prevState) => ({
          ...prevState,
          [fieldName]: fieldValue
      }));
  }

  //Для отправки формы
  const submitForm = (e) => {
      e.preventDefault()
    
      const formURL = e.target.action;

      fetch(formURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'accept': 'application/json',
        },
      }).then((response) => response.json()).then((data) => {
        setFormData({
            was_sent: true
        })

        if (data.code !== 200) {
          setFormSuccess(false);
        } else {
          setFormSuccess(true);
        }
      })
    }

  function getFormStatus() {
      if (formSuccess) { 
          return <Alert text={ff_success} isSuccess={true}/>;
      } else {
        if (formData.was_sent) {
          return <Alert text={ff_error} />;
        }
      }
  }

  return (
          <form 
              className={styles.wrapper} 
              method='POST'
              action={process.env.EMAIL_URL + '/email'}
              onSubmit={submitForm}
          >
              <Input 
                  label='Email' 
                  name='email' 
                  onChange={handleInput}
                  value={formData.email}
                  type='email'
              />

              <Input 
                  label={ff_message}
                  textarea={true} 
                  name='message' 
                  onChange={handleInput}
                  value={formData.message}
                  type='text'
              />

              <Button name={send_button} isHidden={formSuccess}/>

              {getFormStatus()}

              <div className={styles.disclaimer}>{ff_disclaimer_1}</div>
          </form>
    );
}