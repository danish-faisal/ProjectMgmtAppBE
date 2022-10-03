import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DELETE_PROJECT } from "../mutations/projectMutations";
import { GET_PROJECTS } from "../queries/projectQueries";

export default function DeleteProjectButton({ projectId }) {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <div className="mt-5 ms-3">
      <button className="btn btn-danger" onClick={deleteProject}>
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
}
