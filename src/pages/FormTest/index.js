import React, { useState } from 'react';
import { Form,Input } from 'antd';

const FormItem = Form.Item;

const FormTest = () => {

    const [ form ] = Form.useForm();

    console.log('form',form)

    return (
        <div>
            <Form
                layout="inline"
                form={form}
                initialValues={{
                    aaaa:2222
                }}
            >
                <FormItem
                    name="aaaa"
                    label="号码" 
                 >
                    <Input placeholder="请输入参会号码" />
                </FormItem>
            </Form>
        </div>
    )
    
}

export default FormTest;