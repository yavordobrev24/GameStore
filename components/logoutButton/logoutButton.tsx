"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from "@/app/actions";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button type="submit" onClick={() => localStorage.clear()}>
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          className="text-2xl cursor-pointer hover:text-purple-600"
        />
      </button>
    </form>
  );
}
