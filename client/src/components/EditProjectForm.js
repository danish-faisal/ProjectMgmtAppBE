import { useState } from "react";
import { FaEdit } from "react-icons/fa";

export default function EditProjectForm({ project }) {
  const statusObj = {
    "Not Started": "new",
    "In Progress": "progress",
    Completed: "completed",
  };
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState(statusObj[project.status]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !status) {
      return alert("Please fill in all the fields");
    }
  };

  return (
    <>
      <div className="mt-5">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#editProjectModal"
        >
          <div className="d-flex align-items-center">
            <FaEdit className="icon" />
            <div>Update Project</div>
          </div>
        </button>
      </div>

      <div
        className="modal fade"
        id="editProjectModal"
        aria-labelledby="editProjectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editProjectModalLabel">
                Update Project
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    id="status"
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="new">Not Started</option>
                    <option value="progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
