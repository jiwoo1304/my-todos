import { Dispatch, SetStateAction } from "react";
import Modal from "@/components/modals/modal";
import { FaGear } from "react-icons/fa6";
import { ITask } from "@/app/todos/page";

export default function AddTodoModal({
  setShowModal,
  setNewTodoInput,
  setSubTitle,
  addButtonHandle,
  task,
  setTaskType,
  setShowTaskModal,
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setNewTodoInput: Dispatch<SetStateAction<string>>;
  setSubTitle: Dispatch<SetStateAction<string>>;
  addButtonHandle: () => Promise<void>;
  task: ITask | undefined;
  setTaskType: Dispatch<SetStateAction<"Add" | "Edit" | undefined>>;
  setShowTaskModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Modal setShowModal={setShowModal}>
      <>
        <div
          style={{ backgroundColor: task?.color }}
          className="relative w-80 rounded-t-lg shadow-lg p-6 space-y-4 text-white"
        >
          <h2 className="text-lg font-semibold">{task?.title}</h2>
          <div
            style={{ margin: "0px" }}
            className="absolute right-3 top-1/2 -translate-y-1/2"
            onClick={() => {
              setTaskType("Edit");
              setShowTaskModal(true);
            }}
          >
            <FaGear size={28} />
          </div>
        </div>

        <div className="w-80 bg-gray-800 rounded-b-lg shadow-lg p-6 space-y-4 text-white">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-300"
            >
              할일
            </label>
            <input
              onChange={(e) => setNewTodoInput(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-600 rounded-md bg-gray-700 text-white"
              id="title"
              type="text"
              placeholder="할일 제목 입력"
            />
          </div>

          <div>
            <label
              htmlFor="subtitle"
              className="block text-sm font-medium text-gray-300"
            >
              내용
            </label>
            <input
              onChange={(e) => setSubTitle(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-600 rounded-md bg-gray-700 text-white"
              id="subtitle"
              type="text"
              placeholder="내용 입력"
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 text-sm text-gray-400 hover:text-gray-200 focus:outline-none"
            >
              취소
            </button>
            <button
              onClick={addButtonHandle}
              className="px-4 py-2 text-sm text-white border border-gray-100 hover:ring rounded-md focus:outline-none"
            >
              만들기
            </button>
          </div>
        </div>
      </>
    </Modal>
  );
}
