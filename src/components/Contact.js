import React, { useContext } from "react";
import { Button, message, Form, Input, Modal } from "antd";
const { TextArea } = Input;
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com";
import styles from "../styles/contact.module.less";
import btnStyles from "../styles/button.module.less";
import { context } from "src/utils/context";

const Contact = () => {
	const formName = `contact`;
	const [form] = Form.useForm();
	const { isModalVisible, toggleModal } = useContext(context);

	const handleOk = () => {
		toggleModal(false);
	};

	const handleCancel = () => {
		toggleModal(false);
	};

	const SERVICE_ID = "service_9eni01o";
	const TEMPLATE_ID = "template_q3oo5h1";
	const USER_ID = "uSuE4Y84vbE7tMBv2";

	const handleSubmit = (params) => {
		emailjs.send(SERVICE_ID, TEMPLATE_ID, params, USER_ID).then(
			(result) => {
				message.success("Сообщение успешно отправлено! Спасибо!");
			},
			(error) => {
				message.error("При отправке сообщения возникла ошибка...");
			}
		);
		form.resetFields();
	};

	return (
		<Modal
			title="Сообщение"
			visible={isModalVisible}
			onOk={handleOk}
			onCancel={handleCancel}
			style={{ backgroundColor: "blue" }}
			okButtonProps={{
				hidden: true,
			}}
			cancelButtonProps={{
				hidden: true,
			}}
			centered
			keyboard={true}
			transitionName=""
		>
			<Form
				name={formName}
				method="post"
				onFinish={handleSubmit}
				layout="vertical"
				form={form}
				className={styles.form}
			>
				<Form.Item
					label="Don't fill this out"
					className={`hidden`}
					style={{ display: `none` }}
					name="bot-field"
				>
					<Input type={`hidden`} />
				</Form.Item>

				<Form.Item
					label="Имя"
					rules={[
						{
							required: true,
							message: `Пожалуйста введите ваше имя`,
						},
					]}
					name="from_name"
				>
					<Input
						placeholder="введите ваше имя..."
						prefix={
							<UserOutlined className="site-form-item-icon" />
						}
					/>
				</Form.Item>

				<Form.Item
					label="Email"
					rules={[
						{
							required: true,
							type: `email`,
							message: `Пожалуйста введите адрес вашей электронной почты`,
						},
					]}
					name="reply_to"
				>
					<Input
						placeholder="введите адрес электронной почты"
						prefix={
							<MailOutlined className="site-form-item-icon" />
						}
					/>
				</Form.Item>

				<Form.Item
					label="Сообщение"
					rules={[
						{
							required: true,
							message: `Пожалуйста введите ваше сообщение`,
						},
					]}
					name="message"
				>
					<TextArea
						autoSize={{ minRows: 2, maxRows: 6 }}
						placeholder="введите сообщение"
						rows={5}
						maxLength={400}
						showCount={true}
					/>
				</Form.Item>

				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						disabled={false}
						style={{ marginTop: "1rem" }}
						className={btnStyles.btnNavbar}
					>
						Отправить
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default Contact;
