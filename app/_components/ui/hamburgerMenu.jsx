import { FaBars } from "react-icons/fa";

export default function HamburgerMenu() {
  return (
    <>
      <button
        type="button"
        id="toggleHeader"
        name="toggleHeader"
        className="md:hidden p-2 rounded-md text-gray-500 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        <FaBars />
      </button>
    </>
  );
}
