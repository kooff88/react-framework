import React, { useState } from 'react';
import { Form,Input ,Select} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const FormTest = () => {

    const [ form ] = Form.useForm();

    console.log('form',form)

    return (
        <div>
            <Form
                layout="inline"
                form={form}
                initialValues={{
                    aaaa:2222,
                    bbbb:"3"
                }}
            >
                <FormItem
                    name="aaaa"
                    label="号码" 
                 >
                    <Input placeholder="请输入参会号码" />
                </FormItem>
                <FormItem
                    name="bbbb"
                    label="人员" 
                 >
                    <Select>
                        <Option key="3">张三</Option>
                        <Option key="4">李四</Option>
                    </Select>
                </FormItem>
            </Form>
        </div>
    )
    
}

export default FormTest;