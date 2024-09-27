import React, { useState, useEffect } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";

const CustomModal = ({ activeItem, toggle, onSave }) => {
    const [currentItem, setCurrentItem] = useState(activeItem);

    useEffect(() => {
        setCurrentItem(activeItem);
    }, [activeItem]);

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        const itemValue = type === "checkbox" ? checked : value;

        setCurrentItem(prevItem => ({
            ...prevItem,
            [name]: itemValue,
        }));
    };

    return (
        <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="todo-title">Title</Label>
                        <Input
                            type="text"
                            id="todo-title"
                            name="title"
                            value={currentItem.title}
                            onChange={handleChange}
                            placeholder='Enter Todo Title'
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="todo-description">Description</Label>
                        <Input
                            type='text'
                            id='todo-description'
                            name='description'
                            value={currentItem.description}
                            onChange={handleChange}
                            placeholder='Enter Todo description'
                        />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="checkbox"
                                name='completed'
                                checked={currentItem.completed}
                                onChange={handleChange}
                            />
                            Completed
                        </Label>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="success"
                    onClick={() => onSave(currentItem)}
                >
                    Save
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CustomModal;
