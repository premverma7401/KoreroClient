import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Form, TextArea } from 'semantic-ui-react';
import agent from '../../../api/agent';
import { ProjectContext } from '../../../store/ProjectContext';

const CreateProjectInfo = () => {
  const [projects, setProjects] = useContext(ProjectContext);
  const initialState = {
    description: '',
    liveUrl: '',
    gitUrl: '',
    techUsed: '',
    projectName: '',
  };
  const newState = {
    description: '',
    liveUrl: '',
    gitUrl: '',
    techUsed: '',
    projectName: '',
  };
  const [projectInfo, setProjectInfo] = useState(initialState);
  const [projectInfoFromDb, setProjectInfoFromDb] = useState({
    description: '',
    liveUrl: '',
    gitUrl: '',
    techUsed: '',
    projectName: '',
    projectListId: '',
  });
  const [New, setNew] = useState(false);

  const [temp, setTemp] = useState({ projectName: '', projectId: 0 });
  const fetchProjectInfo = async (id) => {
    try {
      const projectInfoFromDb = await agent.ProjectInfo.details(id);
      if (!projectInfoFromDb) {
        console.log('No project details');
        setNew(true);
        setProjectInfoFromDb(newState);
      } else {
        setNew(false);
        setProjectInfoFromDb(projectInfoFromDb);
        console.log(projectInfoFromDb);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    let info = { ...projectInfoFromDb };
    info[e.target.name] = e.target.value;
    info.projectListId = parseInt(temp.projectId);
    info.projectName = temp.projectName;
    setProjectInfoFromDb(info);
    console.log(projectInfoFromDb);
  };

  const handleSelect = (e) => {
    fetchProjectInfo(e.target.value);
    setTemp({
      ...temp,
      projectName: e.target.options[e.target.selectedIndex].dataset.name,
      projectId: e.target.value,
    });
  };
  const handleSubmit = () => {
    try {
      console.log('handleSubmit');
      agent.ProjectInfo.create(projectInfoFromDb);
      toast.success('Added Successfully');
      setProjectInfoFromDb(initialState);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = () => {
    try {
      console.log('handleUpdate');
      agent.ProjectInfo.update(projectInfoFromDb);
      toast.success('Updated Successfully');
      setProjectInfoFromDb(initialState);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form>
      <Form.Field>
        <label>Project Name</label>
        <select htmlFor="projects" name="projectName" onChange={handleSelect}>
          <option value="">Select Project</option>
          {projects.map((project) => (
            <option
              key={project.id}
              value={project.id}
              data-name={project.projectName}
            >
              {project.projectName}
            </option>
          ))}
        </select>
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <TextArea
          placeholder="Description"
          value={projectInfoFromDb.description}
          onChange={handleChange}
          name="description"
        />
      </Form.Field>
      <Form.Field>
        <label>Live Url</label>
        <input
          placeholder="www."
          name="liveUrl"
          value={projectInfoFromDb.liveUrl}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Git Url</label>
        <input
          placeholder="www.github.com/"
          name="gitUrl"
          value={projectInfoFromDb.gitUrl}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Technologies Used</label>
        <input
          placeholder="technology"
          name="techUsed"
          value={projectInfoFromDb.techUsed}
          onChange={handleChange}
        />
      </Form.Field>
      <Button.Group widths={2}>
        {New ? (
          <Button type="submit" primary onClick={handleSubmit}>
            Save
          </Button>
        ) : (
          <Button type="submit" primary onClick={handleUpdate}>
            Update
          </Button>
        )}
        <Button type="reset" onClick={() => setProjectInfoFromDb(initialState)}>
          Reset
        </Button>
      </Button.Group>
    </Form>
  );
};

export default CreateProjectInfo;
