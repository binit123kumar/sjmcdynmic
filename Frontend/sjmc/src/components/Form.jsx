import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

const Form = () => {
    const [state, handleSubmit] = useForm("xjvnddgv");

    if (state.succeeded) {
        return <p>Thanks for Your Input!</p>;
    }

    // Define CSS styles as variables
    const containerStyles = {
        backgroundColor: '#780000',
        padding: '20px',
        width:'50vw',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0.2, 0.2, 0.4, 0.8)',
        marginBottom:'10px',
        
    };

    const labelStyles = {
        marginBottom: '5px',
        color: '#fff',
    };

    const inputStyles = {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    };

    const buttonStyles = {
        width: '100%',
        padding: '10px',
        backgroundColor: 'white',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const form={
        backgroundColor:'#78000'
    }
    const buttonHoverStyles = {
        backgroundColor: '#0056b3',
    };

    return (
        <div className='container' style={containerStyles}>
            <form onSubmit={handleSubmit} style={form}>
                <label htmlFor="name" style={labelStyles}>Name</label>
                <input 
                    id="name" 
                    type="text" 
                    name="name" 
                    placeholder="Enter your name"
                    style={inputStyles} 
                />

                <label htmlFor="email" style={labelStyles}>Email</label>
                <input 
                    id="email" 
                    type="email" 
                    name="email" 
                    placeholder="Enter your email"
                    style={inputStyles} 
                />

                <label htmlFor="query" style={labelStyles}>Write Your Message Here!</label>
                <textarea 
                    id="query" 
                    name="query" 
                    placeholder="Write your query here"
                    style={inputStyles} 
                />

                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <ValidationError
                    prefix="Query"
                    field="query"
                    errors={state.errors}
                />

                <button 
                    type="submit" 
                    disabled={state.submitting}  
                    style={buttonStyles}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'grey'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
