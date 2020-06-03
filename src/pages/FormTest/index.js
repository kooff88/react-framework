import React, { useState } from 'react';
import { Form,Input ,Select, Button} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const FormTest = () => {

    const [ form ] = Form.useForm();

    const onFinish = (values) => {
        console.log('values==>',values)
    }

    const onFinishFailed = (info) =>{
        console.log('info==>',info)
    }

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
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <FormItem
                    name="aaaa"
                    label="号码" 
                    rules={[
                        {
                            required:true,
                            message:"必填！"
                        }
                    ]}
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
                <FormItem>
                    <Button type="primary" htmlType="submit" >提交</Button>
                </FormItem>
            </Form>
        </div>
    )
    
}

export default FormTest;