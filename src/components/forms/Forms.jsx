import React from "react";
import "./forms.css";
import * as Form from '@radix-ui/react-form';


const Forms = () => {
  return (
    <>
    <div className="background">
    <Form.Root className="FormRoot">
    <Form.Field className="FormField" name="email">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Email</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter your email
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Please provide a valid email
        </Form.Message>
      </div>
      
      <Form.Control asChild>
        <input className="Input" type="email" required />
      </Form.Control>
    </Form.Field>
    <Form.Field className="FormField" name="phone">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Contact Number</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter your Contact number
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Please provide a valid contact number
        </Form.Message>
      </div>
      
      <Form.Control asChild>
        <input className="Input" type="phone" required />
      </Form.Control>
    </Form.Field>

    <Form.Field className="FormField" name="address">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Address</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter your address
        </Form.Message>
        <Form.Message className="FormMessage" match="typeMismatch">
          Please provide a valid address
        </Form.Message>
      </div>
      
      <Form.Control asChild>
        <input className="Input" type="email" required />
      </Form.Control>
    </Form.Field>

    <div className="Payment">
    <div className="payment-text"><p>Select the payment method</p></div>
    <div className="payment-methods">
    <img src="src/assets/esewa.png"/>
    <img src="src/assets/kh.jpg"/>
    <img src="src/assets/visa.png"/>

    </div>
    
    </div>
   
    <Form.Submit asChild>
      <button className="Button" style={{ marginTop: 10 }}>
        Submit Your Details
      </button>
    </Form.Submit>
  </Form.Root>
  </div>
    </>
  );
};

export default Forms;
