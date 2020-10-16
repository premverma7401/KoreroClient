import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Form, Select } from 'semantic-ui-react';
import agent from '../../../api/agent';

const CreateProject = () => {
  const [newProject, setNewProject] = useState({
    projectName: '',
    // createdAt: new Date().toISOString(),
    // modifiedAt: new Date().toISOString(),
  });
  const options = [
    { key: 'c', text: 'Completed', value: 'completed' },
    { key: 'p', text: 'In Progress', value: 'progress' },
    { key: 'f', text: 'Future Idea', value: 'future' },
    { key: 't', text: 'To Do List', value: 'todo' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };
  const handleSubmit = () => {
    try {
      agent.Projects.create(newProject);
      toast.success('Added Successfully');
      setNewProject({ ...newProject, projectName: '' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Project Name</label>
        <input
          placeholder="Project Name"
          name="projectName"
          value={newProject.projectName}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <Form.Field
          control={Select}
          label="Status"
          options={options}
          placeholder="Project Status"
        />
      </Form.Field>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default CreateProject;
