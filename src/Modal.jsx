import { useRef, useEffect, useState } from "react";
import './Modal.css';

function Modal({ onSubmit }) {
    const dialogRef = useRef();
    const formRef = useRef();
    const emailRef = useRef();
    const emailErrorRef = useRef();
    const emailConfirmRef = useRef();
    const emailConfirmErrorRef = useRef();
    const usernameRef = useRef();
    const usernameErrorRef = useRef();

    useEffect(() => {
        const handleFormSubmit = (e) => {
            e.preventDefault();
            let isValid = true;

            if (!emailRef.current.value) {
                isValid = false;
                emailErrorRef.current.innerText = 'E-mail is required';
                emailRef.current.classList.add('register__email__active');
            } else if (!emailRef.current.value.match(/@/)) {
                isValid = false;
                emailErrorRef.current.innerText = 'Provide a valid email address including @';
                emailRef.current.classList.add('register__email__active');
            } else {
                emailRef.current.classList.remove('register__email__active');
            }

            if (!usernameRef.current.value) {
                isValid = false;
                usernameErrorRef.current.innerText = 'Username is required';
                usernameRef.current.classList.add('register__username__active');
            } else {
                usernameErrorRef.current.innerText = '';
                usernameRef.current.classList.remove('register__username__active');
            }

            if (emailRef.current.value !== emailConfirmRef.current.value) {
                isValid = false;
                emailConfirmErrorRef.current.innerText = 'The field must match the provided email address';
            }

            if (isValid) {
                onSubmit(usernameRef.current.value, emailRef.current.value);
                dialogRef.current.close();
            }
        };

        const handleEmailInput = () => {
            emailErrorRef.current.innerText = '';
            if (emailRef.current.value === emailConfirmRef.current.value || emailRef.current.value.match(/@/)) {
                emailRef.current.classList.remove('register__email__active');
            } else {
                emailRef.current.classList.add('register__email__active');
            }
        };

        const handleEmailConfirmInput = () => {
            emailConfirmErrorRef.current.innerText = '';
        };

        formRef.current.addEventListener('submit', handleFormSubmit);
        emailRef.current.addEventListener('input', handleEmailInput);
        emailConfirmRef.current.addEventListener('input', handleEmailConfirmInput);

        return () => {
            formRef.current.removeEventListener('submit', handleFormSubmit);
            emailRef.current.removeEventListener('input', handleEmailInput);
            emailConfirmRef.current.removeEventListener('input', handleEmailConfirmInput);
        };
    }, []);

    const [name, setName] = useState('');

    return (
        <main className="main">
            <button className="openModal" onClick={() => dialogRef.current.showModal()}>
                Register
            </button>

            <dialog className="modal" ref={dialogRef}>
                <form className="register" ref={formRef}>
                    <h2 className="modal__title">Register for more contents!</h2>

                    <label htmlFor="userName" className="register__label">Username: <span className="required">* required</span></label>
                    <input className="register__username" ref={usernameRef} value={name} onChange={(e) => setName(e.target.value)} />
                    <span className="register__error register__error--username" ref={usernameErrorRef}></span>

                    <label htmlFor="email" className="register__label">Email: <span className="required">* required</span></label>
                    <input className="register__email" type="text" name="email" aria-required="true" id="email" ref={emailRef} />
                    <span className="register__error register__error--email" ref={emailErrorRef}></span>

                    <br />
                    <label htmlFor="email__valid" className="register__label">Confirm Email: <span className="required">* required</span></label>
                    <input className="register__email--valid" type="text" name="email" aria-required="true validation" id="email__valid" ref={emailConfirmRef} />
                    <span className="register__error register__error--email__valid" ref={emailConfirmErrorRef}></span>

                    <br />
                    <button type="submit" className="register__register">Register</button>
                    <button className="register__close" type="button" onClick={() => dialogRef.current.close()}>Close</button>
                </form>
            </dialog>
        </main>
    );
}

export default Modal;
